import { Box, Container, Grid, Grid2 } from "@mui/material";
import React from "react";
import doctor1 from "../../assets/doctor1.png";
import DoctorCard from "./Components/DoctorData";
import { DoctorsData } from "./Components/DoctorData/DoctorsData";
import { useAuth } from "../../../../../lib/context/auth-context";
import DoctorCardsDisplay from "../../../../../Components/DoctorsCardsDisplay";

const ListDoctors = () => {
  const { doctor } = useAuth();
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
      <Grid2 container spacing={2} sx={{ marginTop: "20px" }}>
        {doctor?.map((doctor, i) => (
          <Grid2 size={{ xs: 12, sm: 6, lg: 4, md: 2.4 }}>
            <DoctorCardsDisplay doctor={doctor} />
          </Grid2>
        ))}
      </Grid2>
    </Grid2>
  );
};

export default ListDoctors;
