import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

const MyAppointment: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto" }}>
      {/* First appointment */}
      <Card sx={{ marginBottom: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="center">
            <img
              src="https://via.placeholder.com/80"
              alt="Doctor"
              style={{ borderRadius: "50%", marginRight: "16px" }}
            />
            <Box>
              <Typography variant="h6">Dr. Richard James</Typography>
              <Typography color="textSecondary">General Physician</Typography>
              <Typography color="textSecondary">
                Address: 57th Cross, Richmond Circle, Church Road, London
              </Typography>
              <Typography color="textSecondary">
                Date & Time: 25, July, 2024 | 8:30 PM
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="flex-end" marginTop={2}>
            <Button variant="outlined" color="primary">
              Cancel appointment
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Second appointment */}
      <Card>
        <CardContent>
          <Box display="flex" alignItems="center">
            <img
              src="https://via.placeholder.com/80"
              alt="Doctor"
              style={{ borderRadius: "50%", marginRight: "16px" }}
            />
            <Box>
              <Typography variant="h6">Dr. Richard James</Typography>
              <Typography color="textSecondary">General Physician</Typography>
              <Typography color="textSecondary">
                Address: 57th Cross, Richmond Circle, Church Road, London
              </Typography>
              <Typography color="textSecondary">
                Date & Time: 25, July, 2024 | 8:30 PM
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" marginTop={2}>
            <Button variant="contained" color="primary">
              Pay here
            </Button>
            <Button variant="outlined" color="primary">
              Cancel appointment
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MyAppointment;
