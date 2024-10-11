import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
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
