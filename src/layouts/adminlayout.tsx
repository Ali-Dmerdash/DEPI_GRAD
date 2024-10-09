import React from "react";
import AdminNavbar from "../Components/AdminNavbar/AdminNavbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Box, Grid2 } from "@mui/material";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      <Grid2 container>
        <Grid2 size={2}>
          <Sidebar />
        </Grid2>
        <Grid2 size={10}>
          <Box sx={{ mt: "100px" }} component="main">
            {children}
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default AdminLayout;
