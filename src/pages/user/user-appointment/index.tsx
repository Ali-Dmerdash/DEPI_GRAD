import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import doctorImg from "../../../assets/doctor1.png";
import AppointmentTile from "./AppointmentTile";
const MyAppointment: React.FC = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography variant="body1" color="initial">
          My Appointments
        </Typography>

        <AppointmentTile
          doctorImg={doctorImg}
          doctorName="Dr. Richard James"
          department="General Physician"
          address="57th Cross, Richmond Circle, Church Road,
                  London"
          date="25, July, 2024 | 8:30 PM"
        />
        <AppointmentTile
          doctorImg={doctorImg}
          doctorName="Dr. Richard James"
          department="General Physician"
          address="57th Cross, Richmond Circle, Church Road,
                  London"
          date="25, July, 2024 | 8:30 PM"
        />
        <AppointmentTile
          doctorImg={doctorImg}
          doctorName="Dr. Richard James"
          department="General Physician"
          address="57th Cross, Richmond Circle, Church Road,
                  London"
          date="25, July, 2024 | 8:30 PM"
        />
      </Box>
    </>
  );
};

export default MyAppointment;
