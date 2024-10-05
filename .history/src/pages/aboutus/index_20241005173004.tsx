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
        <Grid container spacing={3}>
          <Grid item m={12} md={3} sx={{ backgroundColor: "red" }}>
            sdj
          </Grid>
          <Grid item m={12} md={9} sx={{ backgroundColor: "green" }}>
            dsa
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AboutUs;
