// AboutUs.tsx
import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <Box sx={{ padding: "40px", backgroundColor: "#f4f4f4" }}>
      {/* About Us Section */}
      <Grid container spacing={4}>
        {/* Image */}
        <Grid item xs={12} md={6}>
          <Image
            src="/about-us-image.jpg" // replace this with the correct path to the image
            alt="About Us"
            width={500}
            height={500}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            ABOUT US
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to HealthPro, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At HealthPro, we
            understand that exceptional service is vital when it comes to
            scheduling doctor appointments and navigating the healthcare field.
          </Typography>
          <Typography variant="body1" paragraph>
            From routine general practices to healthcare technology, we
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experiences and deliver superior
            services.
          </Typography>
          <Typography variant="body1" paragraph>
            Our vision is to make healthcare accessible for every user, ensuring
            that the care you need is always within reach.
          </Typography>
        </Grid>
      </Grid>

      {/* Why Choose Us Section */}
      <Box mt={8}>
        <Typography variant="h5" align="center" gutterBottom>
          WHY CHOOSE US
        </Typography>

        <Grid container spacing={4}>
          {/* Efficiency */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: "20px", textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                EFFICIENCY
              </Typography>
              <Typography variant="body2">
                Streamlined appointment scheduling that fits into your busy
                lifestyle.
              </Typography>
            </Paper>
          </Grid>

          {/* Convenience */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: "20px", textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                CONVENIENCE
              </Typography>
              <Typography variant="body2">
                Access a network of trusted healthcare professionals in your
                area.
              </Typography>
            </Paper>
          </Grid>

          {/* Personalization */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: "20px", textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                PERSONALIZATION
              </Typography>
              <Typography variant="body2">
                Tailored recommendations and reminders to keep you on top of
                your health.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutUs;
