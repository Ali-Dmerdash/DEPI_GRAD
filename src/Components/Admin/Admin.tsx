import { Box } from "@mui/material";
import React from "react";
import Dashboard from "../AdminDashboard/Dashboard";
import Appointments from "../AdminAppointment";
import Doctors from "../../pages/doctors";
import AddDoctors from "../../pages/addDoctor";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Admin() {
  return (
    <Router>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        {/* Navbar at the top */}
        <Navbar />

        <Box sx={{ display: "flex", flexGrow: 1 }}>
          {/*  Sidebar on the left */}
          <Sidebar />

          {/* Main content area*/}
          <Box
            sx={{
              flexGrow: 1,
              p: 3,
              ml: { md: "250px" }, // Adjust for sidebar width on desktop
              mt: "64px", // Adjust for Navbar height
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/add-doctor" element={<AddDoctors />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}
