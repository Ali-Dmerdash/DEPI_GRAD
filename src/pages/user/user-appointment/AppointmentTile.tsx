import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

type Props = {
  doctorName: string;
  department: string;
  address: string;
  doctorImg: string;
  date: string;
};

const AppointmentTile = ({
  doctorName,
  doctorImg,
  department,
  address,
  date,
}: Props) => {
  return (
    <Card sx={{ marginBottom: 2, marginTop: 3 }}>
      <CardContent>
        <Box display="flex" alignItems="flex-start">
          <img
            src={doctorImg}
            alt="Doctor"
            style={{
              width: "140px",
              height: "170px",
              marginRight: "16px",
              backgroundColor: "#abe6f6",
            }}
          />
          <Box flexGrow={1}>
            <Typography variant="h6" fontSize="20px">
              {doctorName}
            </Typography>
            <Typography fontSize="14px" sx={{ marginBottom: "3%" }}>
              {department}
            </Typography>
            <Typography fontSize="14px" sx={{ marginBottom: "3.5%" }}>
              Address: <br /> {address}
            </Typography>
            <Typography fontSize="14px">Date & Time: {date}</Typography>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="flex-end">
            <Button variant="contained" sx={{ marginTop: 10 }}>
              Pay here
            </Button>
            <Button variant="outlined" sx={{ marginTop: 2 }}>
              Cancel appointment
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AppointmentTile;
