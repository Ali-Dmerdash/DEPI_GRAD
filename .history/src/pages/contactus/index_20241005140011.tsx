import React from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";

const ContactUs = () => {
  return (
    <>
      <Container maxWidth="md" style={{ padding: "2rem 1rem" }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 10 }}>
          <span style={{ fontWeight: "300" }}>CONTACT</span>
          <span style={{ fontWeight: "bold" }}> US</span>
        </Typography>

        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 0, m: 0, overflow: "hidden" }}>
              <Box
                component="img"
                src="../ContactUs/contact_image.png"
                alt="Doctor consultation"
                sx={{
                  width: "100%",
                  height: "415px",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              OUR OFFICE
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

            <Box mt={6}>
              <Typography variant="h6" gutterBottom>
                CAREERS AT OASIS
              </Typography>
              <Typography variant="body2" gutterBottom>
                Learn more about our teams and job openings.
              </Typography>
              <Button
                variant="outlined"
                color="black"
                size="large"
                sx={{ mt: 2, padding: "12px" }}
              >
                Explore Jobs
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ContactUs;
