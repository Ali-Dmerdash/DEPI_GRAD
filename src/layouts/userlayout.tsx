import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { Box } from "@mui/material";

interface UserLayoutProps {
  children: React.ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box component="main">{children}</Box>
      <Footer />
    </>
  );
};

export default UserLayout;
