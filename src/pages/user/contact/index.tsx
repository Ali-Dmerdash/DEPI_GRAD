import React from "react";
import { Container, Grid2, Typography, Box, Button } from "@mui/material";
import contactImg from "../../../assets/contact_image-IJu_19v_.png";

function Contact() {
  return (
    <>
      <Container maxWidth="md" style={{ padding: "2rem 1rem" }}>
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          sx={{ mb: 10, mt: 8 }}
        >
          <span style={{ fontWeight: "300", color: "gray" }}>CONTACT</span>
          <span style={{ fontWeight: "bold" }}> US</span>
        </Typography>

        <Grid2 container spacing={5}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 0, m: 0, overflow: "hidden" }}>
              <Box
                component="img"
                src={contactImg}
                alt="Doctor consultation"
                sx={{
                  clipPath: "inset(0 0 10% 0)",
                  width: "100%",
                  height: "415px",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
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
              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontWeight: "300" }}
              >
                Learn more about our teams and job openings.
              </Typography>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  mt: 2,
                  padding: "12px",
                  border: "2px solid black",
                  borderRadius: "0px",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                    borderColor: "black",
                  },
                }}
              >
                Explore Jobs
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
}

export default Contact;
