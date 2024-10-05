import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  Button,
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
    name: "Dr. James lee",
    specialization: "Dermatologist",
    image: "/images/doctor2.png",
    available: true,
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
    available: true,
  },
  {
    id: 5,
    name: "Dr. Sarah Miller",
    specialization: "Gastroenterologist",
    image: "/images/doctor5.png",
    available: true,
  },
  {
    id: 6,
    name: "Dr. Brian Smith",
    specialization: "General Physician",
    image: "/images/doctor6.png",
    available: true,
  },
  {
    id: 7,
    name: "Dr. Brian Smith",
    specialization: "General Physician",
    image: "/images/doctor6.png",
    available: true,
  },
  {
    id: 8,
    name: "Dr. Brian Smith",
    specialization: "General Physician",
    image: "/images/doctor6.png",
    available: true,
  },
  {
    id: 9,
    name: "Dr. Brian Smith",
    specialization: "General Physician",
    image: "/images/doctor6.png",
    available: true,
  },
  {
    id: 10,
    name: "Dr. Brian Smith",
    specialization: "General Physician",
    image: "/images/doctor6.png",
    available: true,
  },
  {
    id: 11,
    name: "Dr. Brian Smith",
    specialization: "General Physician",
    image: "/images/doctor6.png",
    available: true,
  },
  {
    id: 12,
    name: "Dr. Brian Smith",
    specialization: "General Physician",
    image: "/images/doctor6.png",
    available: true,
  },
  {
    id: 13,
    name: "Dr. Brian Smith",
    specialization: "General Physician",
    image: "/images/doctor6.png",
    available: true,
  },
  {
    id: 14,
    name: "Dr. Brian Smith",
    specialization: "General Physician",
    image: "/images/doctor6.png",
    available: true,
  },
  {
    id: 15,
    name: "Dr. Brian Smith",
    specialization: "General Physician",
    image: "/images/doctor6.png",
    available: true,
  },
  {
    id: 16,
    name: "Dr. Bria Smith",
    specialization: "General Physician",
    image: "/images/doctor6.png",
    available: true,
  },
  {
    id: 17,
    name: "Dr. James Lee",
    specialization: "Gastroenterologist",
    image: "/DEPI-React/file (2) 3.png",
    available: true,
  },
];

const specializations = [
  "General Physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatrician",
  "Neurologist",
  "Gastroenterologist",
];

const Doctors: React.FC = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState<
    string | null
  >(null);

  const handleSpecializationClick = (specialization: string) => {
    setSelectedSpecialization(
      selectedSpecialization === specialization ? null : specialization
    );
  };

  const filteredDoctors = selectedSpecialization
    ? doctors.filter(
        (doctor) => doctor.specialization === selectedSpecialization
      )
    : doctors;

  return (
    <Container maxWidth="lg">
      <Grid item xs={12} md={12} mb={3}>
        Browse through the doctors specialist.
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <Box
            sx={{
              padding: 2,
              marginBottom: 2,
            }}
          >
            {specializations.map((specialization) => (
              <Button
                key={specialization}
                onClick={() => handleSpecializationClick(specialization)}
                variant={
                  selectedSpecialization === specialization
                    ? "contained"
                    : "outlined"
                }
                fullWidth
                sx={{
                  marginBottom: 1,
                  justifyContent: "flex-start",
                  textTransform: "none",
                }}
              >
                {specialization}
              </Button>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={10}>
          <Grid container spacing={2} justifyContent="flex-start">
            {filteredDoctors.map((doctor) => (
              <Grid item xs={12} sm={6} md={2.4} key={doctor.id}>
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
      </Grid>
    </Container>
  );
};

export default Doctors;
