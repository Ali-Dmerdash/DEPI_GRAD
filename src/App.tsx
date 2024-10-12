import "./App.css";

import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import { createClient } from "@supabase/supabase-js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { Container } from "@mui/material";

import Appointment from "./pages/user/reserve-appointment";
import AboutUs from "./pages/user/about";
import ContactUs from "./pages/user/contact";
import Doctors from "./pages/user/doctors";
import Home from "./pages/user/home";
import Login from "./pages/login";
import Profile from "./pages/user/profile";
import Register from "./pages/register";
import MyAppointment from "./pages/user/user-appointment";
import Error from "./pages/error";
import Dashboard from "./pages/admin/admin-dashboard";
import AddDoctors from "./pages/admin/admin-addDoctor";
import Appointments from "./pages/admin/admin-appointment/Components/admin-appointment-detail";
import ListDoctors from "./pages/user/home/Components/listDoctors/index.";
import AdminLayout from "./layouts/adminlayout";
import UserLayout from "./layouts/userlayout";
import ProtectedRoute from "./lib/protectedroute/protected-route";

function App() {
  return (
    <>
      <Container maxWidth={"lg"}>
        <Routes>
          <Route path="*" element={<Error />} />

          <Route path="/" element={<UserLayout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/userappointment" element={<MyAppointment />} />
            </Route>
          </Route>
          <Route element={<ProtectedRoute isAdmin />}>
            <Route path="/dashboard" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/dashboard/add-doctor" element={<AddDoctors />} />
              <Route
                path="/dashboard/all-appointments"
                element={<Appointments />}
              />
              <Route path="/dashboard/all-doctors" element={<ListDoctors />} />
            </Route>
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
library.add(fab, fas, far);
