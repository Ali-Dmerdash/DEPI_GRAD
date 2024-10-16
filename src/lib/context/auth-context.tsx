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

interface AuthContextType {
  session: Session | null;
  supabase: SupabaseClient;
  isLoading: boolean;
  profile: Database["public"]["Tables"]["profile"]["Row"] | null;
  doctor: Database["public"]["Tables"]["doctor"]["Row"][] | null;
  patient: Database["public"]["Tables"]["patient"]["Row"] | null;
  appointment: Database["public"]["Tables"]["appointment"]["Row"][] | null;
  logout: () => Promise<void>;
}

type Profile = Database["public"]["Tables"]["profile"]["Row"];
type Appointment = Database["public"]["Tables"]["appointment"]["Row"];
type Doctor = Database["public"]["Tables"]["doctor"]["Row"];
type Patient = Database["public"]["Tables"]["patient"]["Row"];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [doctor, setDoctor] = useState<Doctor[] | null>(null);
  const [patient, setPatient] = useState<Patient | null>(null);
  const [appointment, setAppointment] = useState<Appointment[] | null>(null);

  // Fetch User Profile
  const fetchUserProfile = (userId: string): Promise<Profile | null> => {
    return Promise.resolve(
      supabase
        .from("profile")
        .select()
        .eq("id", userId)
        .single()
        .then(({ data, error }) => {
          if (error) {
            console.error("Profile fetch error:", error);
            return null;
          }
          return data;
        })
    );
  };

  // Fetch Appointments
  const fetchAppointments = (): Promise<Appointment[] | null> => {
    return Promise.resolve(
      supabase
        .from("appointment")
        .select("*")
        .then(({ data, error }) => {
          if (error) {
            console.error("Appointments fetch error:", error);
            return null;
          }
          return data;
        })
    );
  };

  // Fetch Doctor Data
  const fetchDoctor = (): Promise<Doctor[] | null> => {
    return Promise.resolve(
      supabase
        .from("doctor")
        .select("*")
        .then(({ data, error }) => {
          if (error) {
            console.error("Doctor fetch error:", error);
            return null;
          }
          return data;
        })
    );
  };

  // Fetch Patient Data
  const fetchPatient = (userId: string): Promise<Patient | null> => {
    return Promise.resolve(
      supabase
        .from("patient")
        .select("*")
        .eq("user_id", userId) // Assuming the user ID is associated with the patient
        .single()
        .then(({ data, error }) => {
          if (error) {
            console.error("Patient fetch error:", error);
            return null;
          }
          return data;
        })
    );
  };

  const loadUserData = (currentSession: Session | null) => {
    if (!currentSession?.user?.id) {
      setLoading(false);
      return;
    }

    setLoading(true);

    // Fetch profile, appointments, doctor, and patient data
    Promise.all([
      fetchUserProfile(currentSession.user.id),
      fetchAppointments(),
      fetchDoctor(),
      fetchPatient(currentSession.user.id),
    ])
      .then(([profileData, appointmentData, doctorData, patientData]) => {
        setProfile(profileData);
        setAppointment(appointmentData);
        setDoctor(doctorData);
        setPatient(patientData);
      })
      .catch((error: Error) => {
        console.error("Error loading user data:", error);
        setProfile(null);
        setAppointment(null);
        setDoctor(null);
        setPatient(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    let mounted = true;

    const initialize = () => {
      Promise.resolve(supabase.auth.getSession()).then(
        ({ data: { session: initialSession } }) => {
          if (!mounted) return;

          setSession(initialSession);

          if (initialSession) {
            loadUserData(initialSession);
          } else {
            setLoading(false);
          }
        }
      );
    };

    initialize();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, currentSession) => {
      if (!mounted) return;

      setSession(currentSession);

      if (event === "SIGNED_IN" && currentSession) {
        loadUserData(currentSession);
      } else if (event === "SIGNED_OUT") {
        setProfile(null);
        setAppointment(null);
        setDoctor(null);
        setPatient(null);
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const logout = (): Promise<void> => {
    setLoading(true);
    return Promise.resolve(supabase.auth.signOut())
      .then(({ error }) => {
        if (error) throw error;
      })
      .catch((error: Error) => {
        console.error("Logout error:", error);
      })
      .finally(() => {
        setProfile(null);
        setAppointment(null);
        setDoctor(null);
        setPatient(null);
        setLoading(false);
      });
  };

  const value: AuthContextType = {
    session,
    supabase,
    isLoading,
    profile,
    doctor,
    patient,
    appointment,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
