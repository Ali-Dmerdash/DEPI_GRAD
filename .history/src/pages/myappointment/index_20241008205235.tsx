import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

const MyAppointment: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 700, margin: "0 auto" }}>
      <Card sx={{ marginBottom: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="flex-start">
            <img
              src="https://via.placeholder.com/100"
              alt="Doctor"
              style={{ width: "100px", height: "130px", marginRight: "16px" }}
            />
            <Box flexGrow={1}>
              <Typography
                variant="h6"
                fontSize="16px"
                sx={{ marginBottom: "2px" }}
              >
                Dr. Richard James
              </Typography>
              <Typography color="#0F0A3C" fontSize="14px">
                General Physician
              </Typography>
              <Typography
                color="#0F0A3C"
                fontSize="14px"
                sx={{ marginBottom: "2px" }}
              >
                Address: 57th Cross, Richmond Circle, Church Road, London
              </Typography>
              <Typography color="#0F0A3C" fontSize="14px">
                Date & Time: 25, July, 2024 | 8:30 PM
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
            >
              <Button variant="contained" color="primary">
                Pay here
              </Button>
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginTop: 1.5 }}
              >
                Cancel appointment
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Box display="flex" alignItems="flex-start">
            <img
              src="https://via.placeholder.com/100"
              alt="Doctor"
              style={{ width: "100px", height: "130px", marginRight: "16px" }}
            />
            <Box flexGrow={1}>
              <Typography variant="h6" fontSize="16px">
                Dr. Richard James
              </Typography>
              <Typography color="#0F0A3C" fontSize="14px">
                General Physician
              </Typography>
              <Typography color="#0F0A3C" fontSize="14px">
                Address: 57th Cross, Richmond Circle, Church Road, London
              </Typography>
              <Typography color="#0F0A3C" fontSize="14px">
                Date & Time: 25, July, 2024 | 8:30 PM
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
            >
              <Button variant="contained" color="primary">
                Pay here
              </Button>

              <Button
                variant="outlined"
                color="primary"
                sx={{ marginTop: 1.5 }}
              >
                Cancel appointment
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MyAppointment;
