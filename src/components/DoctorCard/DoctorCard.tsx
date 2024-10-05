import { Box, Card, Typography } from "@mui/material";
import React from "react";
import doc1 from "../../assets/img/doctors/file (5) 1.svg";
import { Link } from "react-router-dom";

export default function DoctorCard() {
  return (
    <Link to={"/appointment"}>
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
          <Typography variant="h6">Dr. Richard James</Typography>
          <Typography sx={{ fontSize: "10px" }}>General physician</Typography>
        </Box>
      </Card>
    </Link>
  );
}
