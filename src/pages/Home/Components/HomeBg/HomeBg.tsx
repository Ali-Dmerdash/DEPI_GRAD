import { Box, Button, Grid, Grid2, Typography } from "@mui/material";
import React from "react";
import groupProfiles from "../../../../assets/img/group_profiles.svg";
import homeImage from "../../../../assets/img/doc-header-img.svg";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function HomeBg() {
  let navigate = useNavigate();

  return (
    <Grid2
      spacing={2}
      container
      sx={{
        minHeight: "70vh",
        padding: "30px",
        margin: "20px 0px",
        borderRadius: "10px",
        color: "white",
        alignItems: "center",
        backgroundColor: "var(--primary-color)",
      }}
    >
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Box sx={{ margin: "50px" }}>
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
              transition: "0.3s",
              "&:hover": {
                scale: "1.1",
              },
            }}
            onClick={() => {
              navigate("/doctors");
            }}
          >
            Book appointment
            <ArrowForwardIcon />
          </Button>
        </Box>
      </Grid2>
      <Grid2 size={{ sm: 6 }}>
        <Box sx={{ width: "100%" }}>
          <img src={homeImage} alt="" style={{ width: "110%" }} />
        </Box>
      </Grid2>
    </Grid2>
  );
}
