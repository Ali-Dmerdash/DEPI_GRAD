import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  containerClasses,
  Container,
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
    image: "/src/pages/doctors/DEPI-React/file (2) 1.png",
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
  },
  {
    id: 7,
    name: "Dr. Emma Clark",
    specialization: "Gynecologist",
    image: "/images/doctor7.png",
  },
  {
    id: 8,
    name: "Dr. Lucas Martinez",
    specialization: "Dermatologist",
    image: "/images/doctor8.png",
  },
  {
    id: 9,
    name: "Dr. Natalie Brown",
    specialization: "Pediatrician",
    image: "/images/doctor9.png",
  },
  {
    id: 10,
    name: "Dr. Oliver Wilson",
    specialization: "Neurologist",
    image: "/images/doctor10.png",
  },
  {
    id: 11,
    name: "Dr. Sophia Martinez",
    specialization: "Gastroenterologist",
    image: "/images/doctor11.png",
  },
  {
    id: 12,
    name: "Dr. Matthew Garcia",
    specialization: "General Physician",
    image: "/images/doctor12.png",
  },
];

const Doctors: React.FC = () => {
  return (
    <Container>
      <Grid item xs={12} md={2}>
        General physician Gynecologist Dermatologist Pediatricians Neurologist
        Gastroenterologist
      </Grid>
      <Grid item xs={12} md={2}>
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
      </Grid>
    </Container>
  );
};

export default Doctors;
