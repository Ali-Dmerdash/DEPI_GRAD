import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

const MyAppointment: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto" }}>
      <Card sx={{ marginBottom: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="flex-start">
            <img
              src="https://via.placeholder.com/100"
              alt="Doctor"
              style={{ width: "80px", height: "1500px", marginRight: "16px" }}
            />
            <Box flexGrow={1}>
              <Typography variant="h6" fontSize="16px">
                Dr. Richard James
              </Typography>
              <Typography color="textSecondary" fontSize="14px">
                General Physician
              </Typography>
              <Typography color="textSecondary" fontSize="14px">
                Address: 57th Cross, Richmond Circle, Church Road, London
              </Typography>
              <Typography color="textSecondary" fontSize="14px">
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
              style={{ width: "80px", height: "80px", marginRight: "16px" }}
            />
            <Box flexGrow={1}>
              <Typography variant="h6" fontSize="16px">
                Dr. Richard James
              </Typography>
              <Typography color="textSecondary" fontSize="14px">
                General Physician
              </Typography>
              <Typography color="textSecondary" fontSize="14px">
                Address: 57th Cross, Richmond Circle, Church Road, London
              </Typography>
              <Typography color="textSecondary" fontSize="14px">
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
