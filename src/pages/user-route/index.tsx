import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "../home";
import Appointment from "../../Components/Appointment";
import AboutUs from "../about";
import ContactUs from "../contact";
import Doctors from "../doctors";
import Login from "../login";
import Register from "../register";
import Profile from "../profile";
import MyAppointment from "../user-appointment";

function UserRoute() {
  return (
    <>
      <Navbar />

      <Footer />
    </>
  );
}

export default UserRoute;
