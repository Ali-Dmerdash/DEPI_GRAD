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
import UserLayout from "./layouts/userlayout";
import AdminLayout from "./layouts/adminlayout";

function App() {
  return (
    <>
      <Container maxWidth={"lg"}>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Navigate to="/home" />} />

          <Route
            path="/home"
            element={
              <UserLayout>
                <Home />
              </UserLayout>
            }
          />
          <Route
            path="/doctors"
            element={
              <UserLayout>
                <Doctors />
              </UserLayout>
            }
          />
          <Route
            path="/about"
            element={
              <UserLayout>
                <AboutUs />
              </UserLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <UserLayout>
                <ContactUs />
              </UserLayout>
            }
          />
          <Route
            path="/appointment"
            element={
              <UserLayout>
                <Appointment />
              </UserLayout>
            }
          />
          <Route
            path="/userappointment"
            element={
              <UserLayout>
                <MyAppointment />
              </UserLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <UserLayout>
                <Profile />
              </UserLayout>
            }
          />

          <Route
            path="/dashboard"
            element={
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            }
          />
          <Route
            path="/dashboard/add-doctor"
            element={
              <AdminLayout>
                <AddDoctors />
              </AdminLayout>
            }
          />
          <Route
            path="/dashboard/all-appointments"
            element={
              <AdminLayout>
                <Appointments />
              </AdminLayout>
            }
          />
          <Route
            path="/dashboard/all-doctors"
            element={
              <AdminLayout>
                <ListDoctors />
              </AdminLayout>
            }
          />

          <Route
            path="/login"
            element={
              <UserLayout>
                <Login />
              </UserLayout>
            }
          />
          <Route
            path="/register"
            element={
              <UserLayout>
                <Register />
              </UserLayout>
            }
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
library.add(fab, fas, far);
