import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const MyAppointment: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ maxWidth: 1100, margin: "0 auto", maxHeight: "320px" }}>
        <Typography variant="body1" color="initial">
          My Appointments
        </Typography>
        <Card sx={{ marginBottom: 2, marginTop: 3 }}>
          <CardContent>
            <Box display="flex" alignItems="flex-start">
              <img
                src=""
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
                  Dr. Richard James
                </Typography>
                <Typography
                  color="primary"
                  fontSize="14px"
                  sx={{ marginBottom: "3%" }}
                >
                  General Physician
                </Typography>
                <Typography
                  color="primary"
                  fontSize="14px"
                  sx={{ marginBottom: "3.5%" }}
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
        <Card sx={{ marginBottom: 2, marginTop: 3 }}>
          <CardContent>
            <Box display="flex" alignItems="flex-start">
              <img
                src=""
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
                  Dr. Richard James
                </Typography>
                <Typography
                  color="primary"
                  fontSize="14px"
                  sx={{ marginBottom: "3%" }}
                >
                  General Physician
                </Typography>
                <Typography
                  color="primary"
                  fontSize="14px"
                  sx={{ marginBottom: "3.5%" }}
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
                src=""
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
                  Dr. Richard James
                </Typography>
                <Typography
                  color="primary"
                  fontSize="14px"
                  sx={{ marginBottom: "3%" }}
                >
                  General Physician
                </Typography>
                <Typography
                  color="primary"
                  fontSize="14px"
                  sx={{ marginBottom: "3.5%" }}
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
      <Footer />
    </>
  );
};

export default MyAppointment;