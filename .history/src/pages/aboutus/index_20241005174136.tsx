import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import image "../aboutus/about_image.png"
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
          </Grid>
          <Grid item xs={12} md={8} sx={{ backgroundColor: "green" }}>
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
