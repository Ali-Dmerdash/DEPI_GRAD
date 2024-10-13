import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

function ProtectedRoute({ isAdmin }: { isAdmin?: boolean }) {
  const { profile, isLoading, session } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (!session || !profile) {
        navigate("/login"); // Redirect to login if not authenticated or profile is missing
      }
    }
  }, [session, profile, isLoading, navigate]);

  return <Outlet />;
}

export default ProtectedRoute;
