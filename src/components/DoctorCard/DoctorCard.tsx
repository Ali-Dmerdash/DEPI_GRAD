import { Box, Card, Typography } from "@mui/material";
import React from "react";
import doc1 from "../../assets/img/doctors/file (2) 1.png";

export default function DoctorCard() {
  return (
    <Card
      sx={{ borderRadius: "10px", height: "300px", color: "var(--text-color)" }}
    >
      <Box
        sx={{
          width: "100%",
          height: "70%",
          backgroundColor: "var(--card-button-color)",
        }}
      >
        <img
          src={doc1}
          alt=""
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "30%",
          textAlign: "start",
          padding: "10px",
        }}
      >
        <Typography sx={{ fontSize: "10px", color: "#0FBF00" }}>
          ● Available
        </Typography>
        <Typography variant="h6">Dr. Richard James</Typography>
        <Typography sx={{ fontSize: "10px" }}>General physician</Typography>
      </Box>
    </Card>
  );
}
