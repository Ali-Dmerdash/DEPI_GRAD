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
          <span style={{ fontWeight: "300", color: "gray" }}>CONTACT</span>
          <span style={{ fontWeight: "bold" }}> US</span>
        </Typography>
      </Container>
    </>
  );
}

export default AboutUs;
