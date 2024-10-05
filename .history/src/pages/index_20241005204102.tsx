import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

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
    name: "Dr. Sarah Johnson",
    specialization: "Pediatrician",
    available: true,
  },
];

const Doctors = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {doctors.map((doctor, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              },
            }}
          >
            <CardContent>
              <Box
                component="img"
                src="https://via.placeholder.com/150" // Replace with actual image URL
                alt={doctor.name}
                sx={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
              <Typography variant="h6" align="center" sx={{ mt: 2 }}>
                {doctor.name}
              </Typography>
              <Typography variant="body2" align="center" sx={{ mb: 1 }}>
                {doctor.specialization}
              </Typography>
              {doctor.available && (
                <Typography color="green" align="center">
                  &bull; Available
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Doctors;
