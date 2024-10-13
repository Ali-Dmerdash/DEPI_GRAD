import { useEffect } from "react";
<<<<<<< HEAD
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
=======
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth-context";

function ProtectedRoute({ isAdmin }: { isAdmin?: boolean }) {
  const { profile, isLoading } = useAuth();

  useEffect(() => {
    console.log("hehe");
    console.log(profile);
  }, []);

  //   if (isLoading) return <></>;
  if (!profile) {
    return <Navigate to={"/login"} />;
  } else {
    return <Outlet />;
  }
>>>>>>> 17660ff9cec2d79dcfe26e61ceb6503d143fbb13
}

export default ProtectedRoute;
