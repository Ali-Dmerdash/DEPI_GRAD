import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import groupProfiles from "../../../../assets/img/group_profiles.png";
import homeImage from "../../../../assets/img/doc-header-img.png";
import { useNavigate } from "react-router-dom";
export default function HomeBg() {
  let navigate = useNavigate();

  return (
    <Grid
      container
      sx={{
        margin: "20px 0px",
        borderRadius: "10px",
        padding: "10px 50px",
        color: "white",
        alignItems: "center",
        minHeight: "70vh",
        backgroundColor: "var(--primary-color)",
      }}
    >
      <Grid item xs={12} md={6}>
        <Box>
          <Typography
            variant="h3"
            sx={{ fontWeight: "500", marginBottom: "15px" }}
          >
            Book Appointment <br /> With Trusted Doctors
          </Typography>
          <Typography
            sx={{ marginBottom: "15px", display: "flex", fontSize: "15px" }}
          >
            <img src={groupProfiles} alt="" style={{ marginRight: "5px" }} />
            <p>
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </Typography>
          <Button
            sx={{
              backgroundColor: "white",
              padding: "15px 20px",
              borderRadius: "30px",
              color: "#595959",
            }}
            onClick={() => {
              navigate("/doctors");
            }}
          >
            Book appointment
          </Button>
        </Box>
      </Grid>
      <Grid item sm={6}>
        <Box>
          <img src={homeImage} alt="" style={{ width: "110%" }} />
        </Box>
      </Grid>
    </Grid>
  );
}
