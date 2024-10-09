import React from "react";
import AdminNavbar from "../Components/AdminNavbar/AdminNavbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Box } from "@mui/material";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      <Sidebar />
      <Box component="main">{children}</Box>
    </>
  );
};

export default AdminLayout;
