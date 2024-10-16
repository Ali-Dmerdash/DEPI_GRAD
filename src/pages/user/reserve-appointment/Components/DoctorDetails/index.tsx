import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import InfoIcon from "@mui/icons-material/Info";
import docImage from "../../../../../assets/img/doctors/file (5) 1.svg";

export default function DoctorDetails({ doctor }: any) {
  console.log(doctor);
  return (
    <Grid2 container>
      <Grid2
        size={{ sm: 12, md: 2.5 }}
        sx={{
          backgroundColor: "var(--primary-color)",
          borderRadius: "10px",
        }}
      >
        <Box>
          <img
            src={docImage}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Grid2>
      <Grid2 size={{ md: 0.5 }}></Grid2>
      <Grid2 size={{ sm: 12, md: 9 }}>
        <Box
          sx={{
            border: "1px var(--border-color) solid",
            borderRadius: "10px",
            padding: "30px",
          }}
        >
          <Typography variant="h4" sx={{ marginBottom: "10px" }}>
            {doctor.name} <VerifiedIcon sx={{ color: "#0016E1" }} />
          </Typography>
          <Typography sx={{ marginBottom: "10px" }}>
            {doctor.specialty}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            About
            <InfoIcon
              sx={{ color: "black", fontSize: "20px", marginLeft: "5px" }}
            />
          </Typography>
          <Typography sx={{ marginBottom: "10px" }}>{doctor.about}</Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
            Appointment fees: {doctor.fees}
          </Typography>
        </Box>
      </Grid2>
    </Grid2>
  );
}
