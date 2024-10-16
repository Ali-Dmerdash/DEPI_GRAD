import { Box, Card, Grid2, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import doc1 from "../../assets/img/doctors/file (5) 1.svg";

export default function DoctorCardsDisplay({ doctor }: any) {
  return (
    <Link to={`/appointment/${doctor.id}`}>
      <Card
        sx={{
          borderRadius: "10px",
          height: "300px",
          color: "var(--text-color)",
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": { transform: "translateY(-5%)" },
        }}
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
          <Typography variant="h6">{doctor.name}</Typography>
          <Typography sx={{ fontSize: "10px" }}>{doctor.specialty}</Typography>
        </Box>
      </Card>
    </Link>
  );
}
