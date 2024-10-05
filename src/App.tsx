import "./App.css";
import "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import Navbar from "./components/Navbar/Navbar";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import DoctorsTest from "./pages/Doctors/DoctorsTest";
import AboutTest from "./pages/About/AboutTest";
import ContactTest from "./pages/Contact/ContactTest";
import RegisterTest from "./pages/Register/RegisterTest";
import Home from "./pages/Home/Home";
import Appointment from "./components/Appointment/Appointment";
import Footer from "./components/Footer/Footer";
import AddDoctors from "./pages/addDoctors/AddDoctors";
import ListDoctors from "./pages/listDoctors/ListDoctors";
import { Box, Container } from "@mui/material";
import AppointmentsTable from "./pages/appointmentsTable/AppointmentsTable";
        
function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth={"lg"}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="doctors" element={<DoctorsTest />} />
          <Route path="about" element={<AboutTest />} />
          <Route path="contact" element={<ContactTest />} />
          <Route path="register" element={<RegisterTest />} />
          <Route path="appointment" element={<Appointment />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
library.add(fab, fas, far);
