import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Grid2,
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  Button,
} from "@mui/material";

import DoctorImage from "../../../assets/doctor1.png";
import { supabase } from "../../../lib/supabase/clients";
import DoctorCardsDisplay from "../../../Components/DoctorsCardsDisplay";
import { func, object } from "joi";
import { useAuth } from "../../../lib/context/auth-context";

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  image: string;
  available?: boolean;
}

// const doctors: Doctor[] = [
//   {
//     id: 1,
//     name: "Dr. Emily Carter",
//     specialization: "Gynecologist",
//     image: DoctorImage,
//     available: true,
//   },
//   {
//     id: 2,
//     name: "Dr. James lee",
//     specialization: "Dermatologist",
//     image: DoctorImage,
//     available: true,
//   },
//   {
//     id: 3,
//     name: "Dr. Ava Johnson",
//     specialization: "Pediatrician",
//     image: DoctorImage,
//     available: true,
//   },
//   {
//     id: 4,
//     name: "Dr. Richard James",
//     specialization: "Neurologist",
//     image: DoctorImage,
//     available: true,
//   },
//   {
//     id: 5,
//     name: "Dr. Sarah Miller",
//     specialization: "Gastroenterologist",
//     image: DoctorImage,
//     available: true,
//   },
//   {
//     id: 6,
//     name: "Dr. Brian Smith",
//     specialization: "General Physician",
//     image: DoctorImage,
//     available: true,
//   },
//   {
//     id: 7,
//     name: "Dr. Amelia Hill",
//     specialization: "Gynecologist",
//     image: DoctorImage,
//     available: true,
//   },
//   {
//     id: 8,
//     name: "Dr. Patrick Harris",
//     specialization: "Dermatologist",
//     image: DoctorImage,
//     available: true,
//   },
//   {
//     id: 9,
//     name: "Dr. Zoe Kelly",
//     specialization: "Pediatrician",
//     image: DoctorImage,
//     available: true,
//   },
//   {
//     id: 10,
//     name: "Dr. Chloe Evans",
//     specialization: "General Physician",
//     image: DoctorImage,
//     available: true,
//   },
//   {
//     id: 11,
//     name: "Dr. Christopher Lee",
//     specialization: "Gynecologist",
//     image: DoctorImage,
//     available: true,
//   },
//   {
//     id: 12,
//     name: "Dr. Timothy White",
//     specialization: "Dermatologist",
//     image: DoctorImage,
//     available: true,
//   },
//   {
//     id: 13,
//     name: "Dr. Andrew Williams",
//     specialization: "Neurologist",
//     image: DoctorImage,
//     available: true,
//   },
//   {
//     id: 14,
//     name: "Dr. Christopher Davis",
//     specialization: "General Physician",
//     image: DoctorImage,
//     available: true,
//   },
//   {
//     id: 15,
//     name: "Dr. Catylin Jack",
//     specialization: "Neurologist",
//     image: DoctorImage,
//     available: true,
//   },
//   {
//     id: 16,
//     name: "Dr. John Mark",
//     specialization: "Pediatrician",
//     image: DoctorImage,
//     available: true,
//   },
//   {
//     id: 17,
//     name: "Dr. Jacklin Lee",
//     specialization: "Gastroenterologist",
//     image: DoctorImage,
//     available: true,
//   },
// ];

const specializations = [
  "General Physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatrician",
  "Neurologist",
  "Gastroenterologist",
];

const Doctors: React.FC = () => {
  const { doctor } = useAuth();

  const [selectedSpecialization, setSelectedSpecialization] = useState<
    string | null
  >(null);

  const handleSpecializationClick = (specialization: string) => {
    setSelectedSpecialization(
      selectedSpecialization === specialization ? null : specialization
    );
  };

  const filteredDoctors = selectedSpecialization
    ? doctor?.filter(
        (doctor: any) => doctor.specialty === selectedSpecialization
      )
    : doctor;

  return (
    <>
      <Container maxWidth="lg">
        <Grid2 size={{ xs: 12, md: 8 }} mb={3}>
          Browse through the doctors specialist.
        </Grid2>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 2 }}>
            <Box
              sx={{
                padding: 2,
                marginBottom: 2,
                width: "90%",
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
                    color: "black",
                    borderColor: "gray",
                    marginBottom: 2,
                    justifyContent: "flex-start",
                    textTransform: "none",
                  }}
                >
                  {specialization}
                </Button>
              ))}
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 10 }}>
            <Grid2 container spacing={2}>
              {filteredDoctors?.map((doctor: any) => (
                <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                  <DoctorCardsDisplay doctor={doctor} />
                </Grid2>

                // <Grid2 size={{ xs: 12, md: 3 }} key={doctor.id}>
                //   <Card
                //     sx={{
                //       transition: "transform 0.2s",
                //       "&:hover": {
                //         transform: "scale(1.05)",
                //         boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                //       },
                //     }}
                //   >
                //     <CardMedia
                //       component="img"
                //       image={doctor.image}
                //       alt={doctor.name}
                //       sx={{
                //         width: "100%",
                //         height: "220px",
                //         objectFit: "scale-down",
                //         borderRadius: "5px",
                //         backgroundColor: "#eaefff",
                //       }}
                //     />
                //     <CardContent>
                //       {doctor.available && (
                //         <Typography color="green" align="center">
                //           &bull; Available
                //         </Typography>
                //       )}
                //       <Typography variant="h6" align="center" sx={{ mt: 2 }}>
                //         {doctor.name}
                //       </Typography>
                //       <Typography variant="body2" align="center" sx={{ mb: 1 }}>
                //         {doctor.specialization}
                //       </Typography>
                //     </CardContent>
                //   </Card>
                // </Grid2>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};

export default Doctors;
