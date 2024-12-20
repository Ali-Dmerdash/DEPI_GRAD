import React from "react";
import { Box, Typography, Grid2, Container } from "@mui/material";
import aboutUsImage from "../../../assets/about_image.png";

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
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, md: 4 }} sx={{ backgroundColor: "" }}>
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
          </Grid2>
          <Grid2 size={{ xs: 12, md: 8 }}>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ display: "block", mb: 3, fontWeight: "300" }}
            >
              Welcome to Oasis, your trusted partner in managing your healthcare
              needs conveniently and efficiently. At Oasis, we understand the
              challenges individuals face when it comes to scheduling doctor
              appointments and managing their health records.{" "}
            </Typography>
            <Typography variant="body1">
              <Typography sx={{ display: "block", mb: 3, fontWeight: "300" }}>
                Oasis is committed to excellence in healthcare technology. We
                continuously strive to enhance our platform, integrating the
                latest advancements to improve user experience and deliver
                superior service. Whether you're booking your first appointment
                or managing ongoing care, Oasis is here to support you every
                step of the way.
              </Typography>
              <Typography sx={{ display: "block", mb: 3, fontWeight: "bold" }}>
                Our Vision
              </Typography>
              <Typography sx={{ display: "block", mb: 3, fontWeight: "300" }}>
                Our vision at Oasis is to create a seamless healthcare
                experience for every user. We aim to bridge the gap between
                patients and healthcare providers, making it easier for you to
                access the care you need, when you need it.
              </Typography>
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <Typography variant="h6" color="initial">
              WHY <span style={{ fontWeight: "bold" }}> CHOOSE US</span>
            </Typography>
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 4 }}
            mt={2}
            sx={{
              border: "0.5px ridge gray",
              "&:hover": {
                backgroundColor: "#5f6fff",
                "& .MuiTypography-root": {
                  color: "white",
                },
              },
            }}
          >
            <Typography variant="body1" color="initial" padding={7}>
              <span style={{ fontWeight: "bold" }}>EFFICIENCY:</span>
              <Typography
                variant="body2"
                color="initial"
                mt={2.5}
                sx={{ fontWeight: "300" }}
              >
                Streamlined appointment scheduling that fits into your busy
                lifestyle.
              </Typography>
            </Typography>
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 4 }}
            mt={2}
            sx={{
              border: "0.5px ridge gray",
              "&:hover": {
                backgroundColor: "#5f6fff",
                "& .MuiTypography-root": {
                  color: "white",
                },
              },
            }}
          >
            <Typography variant="body1" color="initial" padding={7}>
              <span style={{ fontWeight: "bold" }}>CONVENIENCE:</span>
              <Typography
                variant="body2"
                color="initial"
                mt={2.5}
                sx={{ fontWeight: "300" }}
              >
                Access to a network of trusted healthcare professionals in your
                area.
              </Typography>
            </Typography>
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 4 }}
            mt={2}
            sx={{
              border: "0.5px ridge gray",
              "&:hover": {
                backgroundColor: "#5f6fff",
                "& .MuiTypography-root": {
                  color: "white",
                },
              },
            }}
          >
            <Typography variant="body1" color="initial" padding={7}>
              <span style={{ fontWeight: "bold" }}>PERSONALIZATION:</span>
              <Typography
                variant="body2"
                color="initial"
                mt={2.5}
                sx={{ fontWeight: "300" }}
              >
                Tailored recommendations and reminders to help you stay on top
                of your health.
              </Typography>
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
}

export default AboutUs;
