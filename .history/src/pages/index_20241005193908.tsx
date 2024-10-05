import React from "react";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";

interface Doctor {
  name: string;
  specialization: string;
  available: boolean;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
];

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.05)", // Zoom effect on hover
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)", // Shadow effect on hover
          },
        }}
      >
        <CardContent>
          <Box
            component="img"
            src=""
  );
};

export default Doctors;
