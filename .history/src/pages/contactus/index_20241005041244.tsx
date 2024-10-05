import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
} from "@mui/material";

const ContactUs = () => {
  return (
    <>
      <Container maxWidth="md" style={{ padding: "2rem 1rem" }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 10 }}>
          CONTACT US
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 0, m: 0 }}>
              <CardContent sx={{ p: 0, m: 0 }}>
                <Box
                  component="img"
                  src="https://s3-alpha-sig.figma.com/img/79fa/190b/53fd734e629d556696524e05913f5529?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O~VHP8-Osh~XWt9~giiOoMCvRz1C9XvHgjx1ot~W03SXK7ZYomyFqbXNRB1e6I-VFKK3aoa3iyISDCXPtNyOozf5-ryYRzKNdT9sav5wEZP~l3tCnrJ9ZaJ21EZWj7z1JRugG-mlmcPYoZvzeEqH7GK-pOrZmzd59WGjmydDigLpnDvtIubJVemWai2g~40br9Ph0hXCXYM8laCej7BzejxOUFmFNRBxYW0SDr4tHPYrvrQ7Bd3V3UHX9M-uxsJX3kglMHJzVmPdj3HJEUSDCmE1wiqsOCryQPqpQ-KmlHSg-CsZXUwlzDK3MW11~3Y868o3bt0kpetVmBvLh5uJdQ__"
                  alt="Doctor consultation"
                  sx={{
                    width: "100%",
                    height: "450px", // Set the height explicitly to control size
                    objectPosition: "top", // Aligns to the top part of the image
                  }}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              OUR OFFICE
            </Typography>
            <Typography variant="body1">
              <Typography sx={{ display: "block", mb: 3 }}>
                54709 Willms Station <br />
                Suite 350, Washington, USA
              </Typography>
              <Typography sx={{ display: "block", mb: 3 }}>
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
                color="primary"
                size="large"
                sx={{ mt: 2 }}
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
