import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";

interface Doctor {
  name: string;
  specialization: string;
  available: boolean;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
  {
    name: "Dr. Richard James",
    specialization: "General physician",
    available: true,
  },
];
const Doctors = () => {
  return (
    <>
      {" "}
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.05)", // Zoom effect on hover
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)", // Shadow effect on hover
            },
          }}
        >
          <CardContent>
            <Box
              component="img"
              src="https://s3-alpha-sig.figma.com/img/79fa/190b/53fd734e629d556696524e05913f5529?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O~VHP8-Osh~XWt9~giiOoMCvRz1C9XvHgjx1ot~W03SXK7ZYomyFqbXNRB1e6I-VFKK3aoa3iyISDCXPtNyOozf5-ryYRzKNdT9sav5wEZP~l3tCnrJ9ZaJ21EZWj7z1JRugG-mlmcPYoZvzeEqH7GK-pOrZmzd59WGjmydDigLpnDvtIubJVemWai2g~40br9Ph0hXCXYM8laCej7BzejxOUFmFNRBxYW0SDr4tHPYrvrQ7Bd3V3UHX9M-uxsJX3kglMHJzVmPdj3HJEUSDCmE1wiqsOCryQPqpQ-KmlHSg-CsZXUwlzDK3MW11~3Y868o3bt0kpetVmBvLh5uJdQ__"
              alt={doctor.name}
              sx={{
                width: "100%",
                height: "200px", // Set height to maintain uniformity
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            <Typography variant="h6" align="center" sx={{ mt: 2 }}>
              {doctor.name}
            </Typography>
            <Typography variant="body2" align="center" sx={{ mb: 1 }}>
              {doctor.specialization}
            </Typography>
            {doctor.available && (
              <Typography color="green" align="center">
                &bull; Available
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Doctors;
