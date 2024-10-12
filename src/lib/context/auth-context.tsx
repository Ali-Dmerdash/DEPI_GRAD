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

// Define the shape of the AuthContext
interface AuthContextType {
  session: Session | null;
  supabase: SupabaseClient;
  isLoading: boolean;
  profile: Database["public"]["Tables"]["profile"]["Row"] | null;
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

  useEffect(() => {
    const setData = async () => {
      console.log(isLoading + " setdata");

      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) {
        setLoading(false);
        throw error;
      }
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
    };

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
      }
    );

    setData();

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading, session, supabase, profile }}>
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
