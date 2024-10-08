import { Box, Card, Grid, Grid2 } from "@mui/material";
import React from "react";
import DoctorCard from "../DoctorCard/DoctorCard";

export default function DoctorCardsDisplay() {
  return (
    <Grid2 size={{ xs: 12, sm: 6, md: 2.4 }}>
      <DoctorCard />
    </Grid2>
  );
}
