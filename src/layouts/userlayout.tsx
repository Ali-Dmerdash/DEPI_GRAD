import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default UserLayout;
