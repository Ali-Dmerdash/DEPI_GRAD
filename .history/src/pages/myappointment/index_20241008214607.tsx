import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

const MyAppointment: React.FC = () => {
  return (
    <>
      <Box sx={{ maxWidth: 1200, margin: "0 auto", maxHeight: "320px" }}>
        <Typography variant="body" color="initial">
          My Appointments
        </Typography>
        <Card sx={{ marginBottom: 2, marginTop: 3 }}>
          <CardContent>
            <Box display="flex" alignItems="flex-start">
              <img
                src="https://via.placeholder.com/100"
                alt="Doctor"
                style={{ width: "140px", height: "170px", marginRight: "16px" }}
              />
              <Box flexGrow={1}>
                <Typography variant="h6" fontSize="20px">
                  Dr. Richard James
                </Typography>
                <Typography
                  color="primary"
                  fontSize="14px"
                  sx={{ marginBottom: "6%" }}
                >
                  General Physician
                </Typography>
                <Typography
                  color="primary"
                  fontSize="14px"
                  // sx={{ marginBottom: "10%" }}
                >
                  Address: <br /> 57th Cross, Richmond Circle, Church Road,
                  London
                </Typography>
                <Typography color="primary" fontSize="14px">
                  Date & Time: 25, July, 2024 | 8:30 PM
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 10 }}
                >
                  Pay here
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ marginTop: 2 }}
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
                style={{ width: "140px", height: "170px", marginRight: "16px" }}
              />
              <Box flexGrow={1}>
                <Typography variant="h6" fontSize="20px">
                  Dr. Richard James
                </Typography>
                <Typography
                  color="primary"
                  fontSize="14px"
                  sx={{ marginBottom: "6%" }}
                >
                  General Physician
                </Typography>
                <Typography
                  color="primary"
                  fontSize="14px"
                  sx={{ marginBottom: "10%" }}
                >
                  Address: <br /> 57th Cross, Richmond Circle, Church Road,
                  London
                </Typography>
                <Typography color="primary" fontSize="14px">
                  Date & Time: 25, July, 2024 | 8:30 PM
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 10 }}
                >
                  Pay here
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ marginTop: 2 }}
                >
                  Cancel appointment
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default MyAppointment;
