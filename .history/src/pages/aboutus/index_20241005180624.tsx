import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import aboutUsImage from "./about_image.png";
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
          <Grid item xs={12} md={4} sx={{ backgroundColor: "" }}>
            <Box sx={{ p: 0, m: 0, overflow: "hidden" }}>
              <Box
                component="img"
                src={aboutUsImage}
                alt="Doctor consultation"
                sx={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8} sx={{ marginTop: "70px" }}>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ display: "block", mb: 3, fontWeight: "300" }}
            >
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Prescripto, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.{" "}
            </Typography>
            <Typography variant="body1">
              <Typography sx={{ display: "block", mb: 3, fontWeight: "300" }}>
                Prescripto is committed to excellence in healthcare technology.
                We continuously strive to enhance our platform, integrating the
                latest advancements to improve user experience and deliver
                superior service. Whether you're booking your first appointment
                or managing ongoing care, Prescripto is here to support you
                every step of the way.
              </Typography>
              <Typography sx={{ display: "block", mb: 3, fontWeight: "bold" }}>
                Our Vision
              </Typography>
              <Typography sx={{ display: "block", mb: 3, fontWeight: "300" }}>
                Our vision at Prescripto is to create a seamless healthcare
                experience for every user. We aim to bridge the gap between
                patients and healthcare providers, making it easier for you to
                access the care you need, when you need it.
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} sx={{}}>
            <Typography variant="h6" color="initial">
              WHY <span style={{ fontWeight: "bold" }}> CHOOSE US</span>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} mt={3} sx={{ backgroundColor: "red" }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ marginLeft: "15%" }}
            >
              last
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AboutUs;
