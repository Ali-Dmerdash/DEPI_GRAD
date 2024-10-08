import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Profile from "./pages/profile";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home/Home";
import AddDoctors from "./pages/addDoctors/AddDoctors";
import ListDoctors from "./pages/listDoctors/ListDoctors";
import { Box, Container } from "@mui/material";
import AppointmentsTable from "./pages/appointmentsTable/AppointmentsTable";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Appointment from "./Components/Appointment";
import Register from "./pages/Register";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/ContactUs";
import Doctors from "./pages/Doctors";

function App() {
  return (
    <>
      <Container maxWidth={"lg"}>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
library.add(fab, fas, far);
