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

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
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
            src="https://s3-alpha-sig.figma.com/img/c859/f673/238ace75794ff75c3a5f5e25fc255663?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8qd5f4bzYp0hP~Z2zQvgXMk16GBGxMm-LykDbI3KmJQGUI2sUl2wmiqhP7kKegXa8ZaUQzlRXRBUKF3McT7wNyfZEH02obm-2382TRmSP~EaADnQh3LKd2ZROcbmxkbx95AfoxdgckPtfryV7zrQ9fDipxivwtG~CDRQNW8G51~jeJcPYpjwqxgbW8Hk92-LgCAwvi9rbOgYBPe6kuWCYKQbVsLUDDTLiF2e70VAIepLHxuK8X00URDPt-uU7CGz4wrFHsW6KQUt~qIumsCiBcVje0AMPIgjMNKIqTQlD-~uvFphHLLgThaaxar9PTzN5JwStYy23LMqmFcnZYEIg__"
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
  );
};

const DoctorList: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} doctor={doctor} />
      ))}
    </Grid>
  );
};

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Browse through the doctors' specialties.
      </Typography>
      <DoctorList />
    </div>
  );
};

export default Doctors;
