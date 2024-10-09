import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { Container } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

import Appointment from "./Components/Appointment";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contact";
import Doctors from "./pages/doctors";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import MyAppointment from "./pages/user-appointment";
import Error from "./pages/error";
import Dashboard from "./Components/AdminDashboard/Dashboard";
import AddDoctors from "./pages/addDoctor";
import Appointments from "./Components/AdminAppointment";
import ListDoctors from "./pages/listDoctors/index.";
import AdminLayout from "./layouts/adminlayout";
import UserLayout from "./layouts/userlayout";

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
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/userappointment" element={<MyAppointment />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="/dashboard" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard/add-doctor" element={<AddDoctors />} />
            <Route
              path="/dashboard/all-appointments"
              element={<Appointments />}
            />
            <Route path="/dashboard/all-doctors" element={<ListDoctors />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
library.add(fab, fas, far);
