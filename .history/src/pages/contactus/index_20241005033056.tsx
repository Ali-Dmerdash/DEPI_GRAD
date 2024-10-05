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
      <Container maxWidth="md" style={{ padding: "2rem 0" }}>
        <Typography variant="h4" gutterBottom align="center">
          CONTACT US
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <img
                  src="."
                  alt="Doctor consultation"
                  style={{ width: "100%", height: "auto" }}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              OUR OFFICE
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 6 }}>
              <Typography sx={{ display: "block", mb: 1 }}>
                54709 Willms Station
              </Typography>
              <Typography sx={{ display: "block", mb: 1 }}>
                Suite 350, Washington, USA
              </Typography>
              <Typography sx={{ display: "block", mb: 1 }}>
                San Francisco, CA
              </Typography>
              <Typography sx={{ display: "block", mb: 1 }}>
                +1 (555) 123-4567
              </Typography>
              <Typography sx={{ display: "block", mb: 1 }}>
                Email: info@prescripto.com
              </Typography>
            </Typography>

            <Box mt={4}>
              <Typography variant="h6" gutterBottom>
                CAREERS AT OASIS
              </Typography>
              <Typography variant="body2" gutterBottom>
                Learn more about our teams and job openings.
              </Typography>
              <Button variant="outlined" color="primary">
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
