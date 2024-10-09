import React from "react";
import { Container, Grid2, Typography, Box, Button } from "@mui/material";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

function ContactUs() {
  return (
    <>
      <Navbar />
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
                src="https://s3-alpha-sig.figma.com/img/79fa/190b/53fd734e629d556696524e05913f5529?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O~VHP8-Osh~XWt9~giiOoMCvRz1C9XvHgjx1ot~W03SXK7ZYomyFqbXNRB1e6I-VFKK3aoa3iyISDCXPtNyOozf5-ryYRzKNdT9sav5wEZP~l3tCnrJ9ZaJ21EZWj7z1JRugG-mlmcPYoZvzeEqH7GK-pOrZmzd59WGjmydDigLpnDvtIubJVemWai2g~40br9Ph0hXCXYM8laCej7BzejxOUFmFNRBxYW0SDr4tHPYrvrQ7Bd3V3UHX9M-uxsJX3kglMHJzVmPdj3HJEUSDCmE1wiqsOCryQPqpQ-KmlHSg-CsZXUwlzDK3MW11~3Y868o3bt0kpetVmBvLh5uJdQ__"
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
      <Footer />
    </>
  );
}

export default ContactUs;
