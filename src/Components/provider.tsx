import React from "react";
import { AuthProvider } from "../lib/context/auth-context";

function Provider({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default Provider;
