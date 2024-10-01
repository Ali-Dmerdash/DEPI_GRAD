import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import appointmentDocImage from "../../../../assets/img/appointment-doc-img.png";

export default function BookingBg() {
  let navigate = useNavigate();

  return (
    <Grid
      container
      sx={{
        margin: "30px 0px",
        borderRadius: "10px",
        padding: "10px 50px",
        color: "white",
        alignItems: "center",
        minHeight: "50vh",
        backgroundColor: "var(--primary-color)",
        overflow: "hidden",
      }}
    >
      <Grid item xs={12} md={8}>
        <Typography variant="h3" sx={{ fontWeight: "500" }}>
          Book Appointment <br /> With 100+ Trusted Doctors
        </Typography>
        <Button
          sx={{
            marginTop: "20px",
            backgroundColor: "white",
            padding: "15px 20px",
            borderRadius: "30px",
            color: "#595959",
          }}
          onClick={() => {
            navigate("/register");
          }}
        >
          Create Account
        </Button>
      </Grid>
      <Grid item xs={12} md={4}>
        <img
          src={appointmentDocImage}
          alt=""
          style={{ width: "100%", scale: "1.3" }}
        />
      </Grid>
    </Grid>
  );
}
