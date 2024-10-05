import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";

// Styling for the sections
const AboutUsSection = styled(Box)({
  padding: "40px 20px",
  textAlign: "center",
  backgroundColor: "#f9f9f9",
});

const ChooseUsSection = styled(Box)({
  padding: "40px 20px",
  backgroundColor: "#ffffff",
});

const AboutUsImage = styled("img")({
  width: "100%",
  maxWidth: "400px",
  margin: "0 auto",
  borderRadius: "8px",
});

const WhyChooseCard = styled(Card)({
  textAlign: "center",
  boxShadow: "none",
  backgroundColor: "transparent",
});

const WhyChooseUs: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Why Choose Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <WhyChooseCard>
            <CardContent>
              <Typography variant="h6">Efficiency</Typography>
              <Typography>
                Streamlined Appointment Scheduling That Fits Into Your Busy
                Lifestyle.
              </Typography>
            </CardContent>
          </WhyChooseCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <WhyChooseCard>
            <CardContent>
              <Typography variant="h6">Convenience</Typography>
              <Typography>
                Access A Network Of Trusted Healthcare Professionals In Your
                Area.
              </Typography>
            </CardContent>
          </WhyChooseCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <WhyChooseCard>
            <CardContent>
              <Typography variant="h6">Personalization</Typography>
              <Typography>
                Tailored Recommendations And Reminders To Help You Stay On Top
                Of Your Health.
              </Typography>
            </CardContent>
          </WhyChooseCard>
        </Grid>
      </Grid>
    </Box>
  );
};

const AboutUs: React.FC = () => {
  return (
    <AboutUsSection>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <AboutUsImage
            src="https://via.placeholder.com/400" // Replace with the correct image path
            alt="Doctors"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            Welcome to Our Platform, Your Trusted Partner In Managing Your
            Healthcare Needs Conveniently and Efficiently. At [Platform], We
            Understand That One Important Task Is When It Comes To Scheduling
            Doctor Appointments And Managing Your Health Records.
          </Typography>
          <Typography variant="body1" paragraph>
            Powered by the Latest Healthcare Technology, We Continuously Strive
            To Enhance Our Platform, Integrating The Latest Advancements To
            Improve User Experience And Deliver Superior Service. Whether It's
            Easy Appointment Scheduling Or Managing Ongoing Care, [Platform] Is
            Here To Support You Every Step Of The Way.
          </Typography>
          <Typography variant="body1" paragraph>
            Our Vision: To Make It Easier for You to Access and Schedule
            Healthcare Services, No Matter Where You Are.
          </Typography>
        </Grid>
      </Grid>
    </AboutUsSection>
  );
};

const App: React.FC = () => {
  return (
    <Box>
      <AboutUs />
      <ChooseUsSection>
        <WhyChooseUs />
      </ChooseUsSection>
    </Box>
  );
};

export default App;
