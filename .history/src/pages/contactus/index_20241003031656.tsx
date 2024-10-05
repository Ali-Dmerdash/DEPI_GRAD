import React from "react";

const ContactUs = () => {
  return (
    <>
      {" "}
      <Container maxWidth="md" style={{ padding: "2rem 0" }}>
        <Typography variant="h4" gutterBottom align="center">
          CONTACT US
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <img
                  src="https://your-image-link.com" // Replace with the actual image URL
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
            <Typography variant="body1">
              12345 Medical Office,
              <br />
              2nd Street, Healthcare Blvd,
              <br />
              San Francisco, CA
              <br />
              +1 (555) 123-4567
              <br />
              Email: info@prescripto.com
            </Typography>

            <Box mt={4}>
              <Typography variant="h6" gutterBottom>
                CAREERS AT PRESCRIPTO
              </Typography>
              <Typography variant="body2" gutterBottom>
                We’re always on the lookout for talented people. Explore our
                openings.
              </Typography>
              <Button variant="contained" color="primary">
                Explore Jobs
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box mt={5}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Prescripto</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                non risus nec lorem suscipit viverra ut ut neque.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Company</Typography>
              <Typography variant="body2">
                Home
                <br />
                About Us
                <br />
                Careers
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Get In Touch</Typography>
              <Typography variant="body2">
                +1 (555) 987-6543
                <br />
                prescripto-support@email.com
              </Typography>
            </Grid>
          </Grid>
          <Box mt={3} textAlign="center">
            <Typography variant="body2">
              © 2024 Prescripto - All Rights Reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ContactUs;
