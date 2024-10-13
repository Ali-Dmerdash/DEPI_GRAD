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

<<<<<<< HEAD
  // Logout function to sign the user out
  const logout = async () => {
    try {
      console.log("Attempting to logout...");
      const { error } = await supabase.auth.signOut();
      console.log("signOut called");
=======
  useEffect(() => {
    const setData = async () => {
      console.log(isLoading + " setdata");

      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
>>>>>>> 17660ff9cec2d79dcfe26e61ceb6503d143fbb13
      if (error) {
        console.error("Error during logout:", error);
      } else {
        console.log("User successfully logged out.");
        setProfile(null);
        // Clear tokens from local storage if used
        // localStorage.removeItem("sb-lllmoslobnckitvzjjwg-auth-token"); // Adjust key based on your storage setup
      }
    } catch (err) {
      console.error("Unexpected error during logout:", err);
    }
  };

  useEffect(() => {
    // Function to fetch the user profile
    const fetchUserProfile = async (userId: string) => {
      try {
        const { data: profileData, error: profileError } = await supabase
          .from("profile")
          .select()
<<<<<<< HEAD
          .eq("id", userId)
          .single();

        if (profileError) {
          console.error("Error fetching profile:", profileError);
          setProfile(null);
        } else {
          setProfile(profileData);
          console.log("Got profile:", profileData);
          if (profileData.is_admin) {
            console.log("Admin Account");
          }
        }
      } catch (err) {
        console.error("Unexpected error fetching profile:", err);
        setProfile(null);
=======
          .eq("id", session.user.id)
          .single()
          .then((data) => {
            if (data) {
              setProfile(data as any);
              console.log(data);
              console.log("got profile");
            }
          });
>>>>>>> 17660ff9cec2d79dcfe26e61ceb6503d143fbb13
      }
      setLoading(false);
    };

<<<<<<< HEAD
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
        console.log(`${isLoading} authchange`);
        setSession(currentSession);
        setLoading(true); // Start loading when auth state changes

        if (currentSession) {
          await fetchUserProfile(currentSession.user.id);
        } else {
          setProfile(null);
        }

        setLoading(false); // End loading after processing auth state change
=======
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        console.log(isLoading + " authchange");
        setSession(session);

        if (session) {
          // get profile data
          supabase
            .from("profile")
            .select()
            .eq("id", session.user.id)
            .single()
            .then((data) => {
              if (data) {
                setProfile(data as any);
                console.log(data);
                console.log("got profile");
              }
            });
        }
        setLoading(false);
>>>>>>> 17660ff9cec2d79dcfe26e61ceb6503d143fbb13
      }
    );

    // const setData = async () => {
    //   console.log(isLoading + " setdata");

    //   const {
    //     data: { session },
    //     error,
    //   } = await supabase.auth.getSession();
    //   if (error) {
    //     setLoading(false);
    //     throw error;
    //   }
    //   setSession(session);

    //   if (session) {
    //     setLoading(false);
    //     // get profile data
    //     supabase
    //       .from("profile")
    //       .select()
    //       .eq("id", session.user.id)
    //       .single()
    //       .then((data) => {
    //         if (data) {
    //           setProfile(data as any);
    //           console.log(data);
    //           console.log("got profile");
    //         }
    //       });
    //   }
    //   setLoading(false);
    // };

    // const { data: listener } = supabase.auth.onAuthStateChange(
    //   (_event, session) => {
    //     console.log(isLoading + " authchange");
    //     setSession(session);

    //     if (session) {
    //       // get profile data
    //       setLoading(false);
    //       supabase
    //         .from("profile")
    //         .select()
    //         .eq("id", session.user.id)
    //         .single()
    //         .then((data) => {
    //           if (data) {
    //             setProfile(data as any);
    //             console.log(data);
    //             console.log("got profile");
    //           }
    //         });
    //     }
    //     setLoading(false);
    //   }
    // );
    // setData();

    // Cleanup subscription on unmount
    return () => {
      authListener.subscription.unsubscribe();
      // listener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoading, session, supabase, profile, logout }}
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
