import { useEffect } from "react";
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
}

export default ProtectedRoute;
