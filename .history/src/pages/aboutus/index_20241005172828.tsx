import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";

function AboutUs() {
  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          sx={{ mb: 10, mt: 8 }}
        >
          <span style={{ fontWeight: "300", color: "gray" }}>ABOUT</span>
          <span style={{ fontWeight: "bold" }}> US</span>
        </Typography>
        <Grid container spacing={0}>
          <Grid item>sdj</Grid>
          <Grid item>dsa</Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AboutUs;
