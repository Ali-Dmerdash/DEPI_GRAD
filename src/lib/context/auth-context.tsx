// src/contexts/AuthContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Session, SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "../supabase/clients";
import { Database } from "../../../database.types";
import { useNavigate } from "react-router-dom";

// Define the shape of the AuthContext
interface AuthContextType {
  session: Session | null;
  supabase: SupabaseClient;
  isLoading: boolean;
  profile: Database["public"]["Tables"]["profile"]["Row"] | null;
  doctor: Database["public"]["Tables"]["doctor"]["Row"] | null;
  patient: Database["public"]["Tables"]["patient"]["Row"] | null;
  appointment: Database["public"]["Tables"]["appointment"]["Row"][] | null; // Make sure this is an array
  logout: () => Promise<void>;

}

// Create the AuthContext with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the props for the AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Create the AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [profile, setProfile] = useState<
    Database["public"]["Tables"]["profile"]["Row"] | null
  >(null);
  const [doctor, setDoctor] = useState<
    Database["public"]["Tables"]["doctor"]["Row"] | null
  >(null);
  const [patient, setPatient] = useState<
    Database["public"]["Tables"]["patient"]["Row"] | null
  >(null);
  const [appointment, setAppointment] = useState<
    Database["public"]["Tables"]["appointment"]["Row"][] | null
  >(null);




  // Logout function to sign the user out
  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error during logout:", error);
      } else {
        console.log("User successfully logged out.");
        setProfile(null);
        // Clear tokens from local storage if used
        localStorage.removeItem("sb-lllmoslobnckitvzjjwg-auth-token"); // Adjust key based on your storage setup
      }
    } catch (err) {
      console.error("Could not sign out", err);
    }
  };
  
  useEffect(() => {


    const fetchAppointments = async () => {
      try {
        const { data:appointmentData, error:appointmentError } = await supabase
          .from('appointment')
          .select('*');
        if (appointmentError) {
          console.error('Error fetching appointments:', appointmentError);
          return;
        }
        console.error('got appointment');
        setAppointment(appointmentData);
        console.log(appointment);
      } catch (err) {
        console.error('Unexpected error:', err);
      } 
  }
    // Function to fetch the user profile
    const fetchUserProfile = async (userId: string) => {
      try {
        const { data: profileData, error: profileError } = await supabase
          .from("profile")
          .select()
          .eq("id", userId)
          .single();

        if (profileError) {
          console.error("Error fetching profile:", profileError);
          setProfile(null);
        } else {
          setProfile(profileData);
        }
      } catch (err) {
        console.error("Unexpected error fetching profile:", err);
        setProfile(null);
      }
    };

    // Function to fetch the initial session
    const fetchInitialSession = async () => {
      try {
        const {
          data: { session: initialSession },
          error,
        } = await supabase.auth.getSession();
        if (error) {
          console.error("Error fetching session:", error);
          setLoading(false);
          return;
        }
        setSession(initialSession);
        if (initialSession) {
          await fetchUserProfile(initialSession.user.id);
          await fetchAppointments();
        }
      } catch (err) {
        console.error("Unexpected error fetching session:", err);
      } finally {
        setLoading(false); // Set loading to false after fetching session and profile
      }
    };

    fetchInitialSession();
    
    // Listen for changes to auth state
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, currentSession: Session | null) => {
        setSession(currentSession);
        setLoading(true); // Start loading when auth state changes
         console.log(currentSession);
        if (currentSession) {
          await fetchUserProfile(currentSession.user.id);
          await fetchAppointments();
          console.log(appointment);
        } else {
          setProfile(null);
        }
        setLoading(false); // End loading after processing auth state change
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        session,
        supabase,
        profile,
        patient,
        doctor,
        appointment,
        logout

      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
