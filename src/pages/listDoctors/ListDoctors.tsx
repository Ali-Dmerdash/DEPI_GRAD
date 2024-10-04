import { Box, Container, Grid, Grid2 } from "@mui/material";
import React from "react";
import doctor1 from "../../assets/doctor1.png";
import DoctorCard from "./DoctorCard";
import { DoctorsData } from "./DoctorsData";

const ListDoctors = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {DoctorsData.map((doctor) => (
        <DoctorCard
          status={doctor.status}
          name={doctor.name}
          specialty={doctor.specialty}
          imageUrl={doctor.imageUrl}
        />
      ))}
    </Box>
  );
};

export default ListDoctors;
