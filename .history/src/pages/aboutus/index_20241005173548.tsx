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
      <Container maxWidth="xl">
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
          <Grid item xs={12} md={4} sx={{ backgroundColor: "red" }}>
            sdj
          </Grid>
          <Grid item xs={12} md={8} sx={{ backgroundColor: "green" }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Prescripto, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.{" "}
            </Typography>
            <Typography variant="body1">
              <Typography sx={{ display: "block", mb: 3, fontWeight: "300" }}>
                54709 Willms Station <br />
                Suite 350, Washington, USA
              </Typography>
              <Typography sx={{ display: "block", mb: 3, fontWeight: "300" }}>
                Tel: (415) 555‑0132 <br />
                Email: greatstackdev@gmail.com
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} sx={{ backgroundColor: "green" }}>
            dsa
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AboutUs;
