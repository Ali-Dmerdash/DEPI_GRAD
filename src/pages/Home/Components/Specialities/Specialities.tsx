import { Box, Grid } from "@mui/material";
import React from "react";

export default function Specialities({ speciality }: any) {
  return (
    <Grid item sm={6} md={2}>
      <Box sx={{ margin: "0px 10px" }}>
        <img src={speciality.image} alt="" />
        <p>{speciality.name}</p>
      </Box>
    </Grid>
  );
}
