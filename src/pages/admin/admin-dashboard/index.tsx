import {
  Grid2,
  Paper,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material";
import {
  FaUserMd,
  FaCalendarAlt,
  FaUserInjured,
  FaCalendarCheck,
} from "react-icons/fa";
import { useAuth } from "../../../lib/context/auth-context";

const Dashboard = () => {
  const { doctor, appointment, patients } = useAuth();
  return (
    <>
      <Box sx={{ py: 6, px: 2 }}>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={3}
              sx={{ p: 2, display: "flex", alignItems: "center" }}
            >
              <FaUserMd size={40} color="#007BFF" />
              <Box sx={{ ml: 2 }}>
                <Typography variant="h4" fontWeight="bold">
                  {doctor?.length}
                </Typography>
                <Typography color="textSecondary">Doctors</Typography>
              </Box>
            </Paper>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={3}
              sx={{ p: 2, display: "flex", alignItems: "center" }}
            >
              <FaCalendarAlt size={40} color="#28A745" />
              <Box sx={{ ml: 2 }}>
                <Typography variant="h4" fontWeight="bold">
                  {appointment?.length}
                </Typography>
                <Typography color="textSecondary">Appointments</Typography>
              </Box>
            </Paper>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={3}
              sx={{ p: 2, display: "flex", alignItems: "center" }}
            >
              <FaUserInjured size={40} color="#007BFF" />
              <Box sx={{ ml: 2 }}>
                <Typography variant="h4" fontWeight="bold">
                  {patients?.length}
                </Typography>
                <Typography color="textSecondary">Patients</Typography>
              </Box>
            </Paper>
          </Grid2>
        </Grid2>

        <Box sx={{ mt: 6 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <FaCalendarCheck size={30} color="#007BFF" />
            <Typography variant="h6" fontWeight="bold" sx={{ ml: 1 }}>
              Latest Bookings
            </Typography>
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Doctor</TableCell>
                  <TableCell>Booking Date</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Avatar
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="Doctor Avatar"
                        sx={{ mr: 2 }}
                      />
                      <Box>
                        <Typography fontWeight="bold">
                          Dr. John Smith
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Booking on 2 Nov 2024
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>2 Nov 2024</TableCell>
                  <TableCell>
                    <Typography color="error" fontWeight="bold">
                      Cancelled
                    </Typography>
                  </TableCell>
                </TableRow>

                <TableRow hover>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Avatar
                        src="https://randomuser.me/api/portraits/women/1.jpg"
                        alt="Doctor Avatar"
                        sx={{ mr: 2 }}
                      />
                      <Box>
                        <Typography fontWeight="bold">Dr. Jane Doe</Typography>
                        <Typography variant="body2" color="textSecondary">
                          Booking on 5 Nov 2024
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>5 Nov 2024</TableCell>
                  <TableCell>
                    <Typography color="success.main" fontWeight="bold">
                      Confirmed
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
