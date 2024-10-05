import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
} from "@mui/material";

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  image: string;
  available?: boolean;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Emily Carter",
    specialization: "Gynecologist",
    image: "/images/doctor1.png",
    available: true,
  },
  {
    id: 2,
    name: "Dr. James Lee",
    specialization: "Dermatologist",
    image: "/images/doctor2.png",
  },
  {
    id: 3,
    name: "Dr. Ava Johnson",
    specialization: "Pediatrician",
    image: "/images/doctor3.png",
    available: true,
  },
  {
    id: 4,
    name: "Dr. Richard James",
    specialization: "Neurologist",
    image: "/images/doctor4.png",
  },
  {
    id: 5,
    name: "Dr. Sarah Miller",
    specialization: "Gastroenterologist",
    image: "/images/doctor5.png",
  },
  {
    id: 6,
    name: "Dr. Brian Smith",
    specialization: "General Physician",
    image: "/images/doctor6.png",
    available: true,
  },
];

const Doctors: React.FC = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {doctors.map((doctor) => (
        <Grid item xs={12} sm={6} md={4} key={doctor.id}>
          <Card
            sx={{
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={doctor.image}
              alt={doctor.name}
              sx={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "5px 5px 0 0",
              }}
            />
            <CardContent>
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
