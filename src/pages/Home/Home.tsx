import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import HomeBg from "./Components/HomeBg/HomeBg";
import general from "../../assets/img/specialities/General_physician.jpg";
import gynecologist from "../../assets/img/specialities/Gynecologist.jpg";
import dermatologist from "../../assets/img/specialities/Dermatologist.jpg";
import pediatricians from "../../assets/img/specialities/Pediatricians.jpg";
import neurologist from "../../assets/img/specialities/Neurologist.jpg";
import gastroenterologist from "../../assets/img/specialities/Gastroenterologist.jpg";
import Specialities from "./Components/Specialities/Specialities";
import DoctorCardsDisplay from "../../components/DoctorsCardsDisplay/DoctorCardsDisplay";
import BookingBg from "./Components/BookingBg/BookingBg";

export default function Home() {
  let specialities = [
    { name: "General Physician", image: general },
    { name: "Gynecologist", image: gynecologist },
    { name: "Dermatologist", image: dermatologist },
    { name: "Pediatricians", image: pediatricians },
    { name: "Neurologist", image: neurologist },
    { name: "Gastroenterologist", image: gastroenterologist },
  ];

  return (
    <Stack>
      <HomeBg />
      <Box sx={{ margin: "40px auto", textAlign: "center" }}>
        <Typography variant="h4">Find by Speciality</Typography>
        <Typography
          sx={{ fontSize: "18px", width: "70%", margin: "10px auto" }}
        >
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </Typography>
        <Grid
          container
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            margin: "50px auto",
          }}
        >
          {specialities.map((speciality, i) => (
            <Specialities key={i} speciality={speciality} />
          ))}
        </Grid>
      </Box>
      <Stack>
        <Box sx={{ margin: "20px auto", textAlign: "center" }}>
          <Typography variant="h4">Top Doctors to Book</Typography>
          <Typography sx={{ fontSize: "18px", marginTop: "10px" }}>
            Simply browse through our extensive list of trusted doctors.
          </Typography>
        </Box>
        <Stack>
          <Grid container spacing={2} sx={{ marginTop: "20px" }}>
            <DoctorCardsDisplay />
            <DoctorCardsDisplay />
            <DoctorCardsDisplay />
            <DoctorCardsDisplay />
            <DoctorCardsDisplay />
            <DoctorCardsDisplay />
            <DoctorCardsDisplay />
          </Grid>
        </Stack>
        <Stack sx={{ justifyContent: "center" }}>
          <Button
            sx={{
              backgroundColor: "var(--card-button-color)",
              borderRadius: "30px",
              margin: "30px auto",
              padding: "10px 50px",
              color: "var(--text-color)",
            }}
          >
            More
          </Button>
        </Stack>
      </Stack>

      <Stack sx={{ marginTop: "20px" }}>
        <BookingBg />
      </Stack>
    </Stack>
  );
}
