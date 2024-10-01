import { Box, Card, Grid } from "@mui/material";
import React from "react";
import DoctorCard from "../DoctorCard/DoctorCard";

export default function DoctorCardsDisplay() {
  return (
    <Grid item xs={12} sm={6} md={2.4}>
      <DoctorCard />
    </Grid>
  );
}
