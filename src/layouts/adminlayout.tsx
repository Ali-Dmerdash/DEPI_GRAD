import React from "react";
import AdminNavbar from "../Components/AdminNavbar";
import Sidebar from "../Components/Sidebar";
import { Box, Grid2 } from "@mui/material";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <Grid2 container>
        <Grid2 size={2}>
          <Sidebar />
        </Grid2>
        <Grid2 size={10}>
          <Box sx={{ mt: "100px" }} component="main">
            <Outlet />
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default AdminLayout;
