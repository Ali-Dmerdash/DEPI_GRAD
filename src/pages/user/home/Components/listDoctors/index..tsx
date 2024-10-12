import { Box, Container, Grid, Grid2 } from "@mui/material";
import React from "react";
import doctor1 from "../../assets/doctor1.png";
import DoctorCard from "./Components/DoctorData";
import { DoctorsData } from "./Components/DoctorData/DoctorsData";

const ListDoctors = () => {
  return (
    <Grid2
      paddingX={10}
      container
      spacing={3}
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        // gap: "20px",
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
    </Grid2>
  );
};

export default ListDoctors;
