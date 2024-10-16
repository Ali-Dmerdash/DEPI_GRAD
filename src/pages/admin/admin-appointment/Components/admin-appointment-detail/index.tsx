import React, { useState, useEffect } from "react";
import { FaClipboardList } from "react-icons/fa";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useAuth } from "../../../../../lib/context/auth-context";

interface Appointment {
  id: string;
  patient_id: string;
  doctor_id: string;
  created_at: string;
  fees: number;
}

const Appointments: React.FC = () => {
  const { isLoading, appointment, session } = useAuth();
  console.log(appointment);
  console.log("Appointment from useAuth:", appointment);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  // const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);

  useEffect(() => {
    console.log(isLoading);
    if (!isLoading) {
      if (!appointment || !session) {
        console.log("no appointment of session");
      }
    }
  }, [isLoading, appointment, session]);

  const handleOpen = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ p: 6 }}>
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          <FaClipboardList size={24} color="#007BFF" />
          <Typography variant="h6" fontWeight="bold" sx={{ ml: 1 }}>
            All Appointments
          </Typography>
        </Box>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Appointment ID</TableCell>
                <TableCell>Patient ID</TableCell>
                <TableCell>Date & Time</TableCell>
                <TableCell>Doctor ID</TableCell>
                {!isSmallScreen && <TableCell>Fees</TableCell>}
                {!isSmallScreen && <TableCell>Action</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {appointment?.map((m) => (
                <TableRow key={m.id} hover>
                  {/* Appointment ID */}
                  <TableCell>{m.id}</TableCell>

                  {/* Patient ID */}
                  <TableCell>{m.patient_id}</TableCell>

                  {/* Date & Time */}
                  <TableCell>
                    {new Date(m.created_at).toLocaleString()}
                  </TableCell>

                  {/* Doctor ID */}
                  <TableCell>{m.doctor_id}</TableCell>

                  {/* Fees */}
                  {!isSmallScreen && <TableCell>{m.fees}</TableCell>}

                  {/* Action */}
                  {!isSmallScreen && (
                    <TableCell>
                      <Button color="primary" onClick={() => handleOpen(m)}>
                        View
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Dialog (Modal) */}
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
          <DialogTitle>Appointment Details</DialogTitle>
          <DialogContent>
            {selectedAppointment && (
              <Box display="flex" flexDirection="column" alignItems="center">
                {/* Appointment ID */}
                <Typography variant="h6" fontWeight="bold">
                  Appointment ID: {selectedAppointment.id}
                </Typography>

                {/* Patient Info */}
                <Typography variant="h6" fontWeight="bold">
                  Patient ID: {selectedAppointment.patient_id}
                </Typography>

                {/* Date & Time */}
                <Typography variant="subtitle1" mt={2}>
                  Date & Time
                </Typography>
                <Typography variant="body1">
                  {new Date(selectedAppointment.created_at).toLocaleString()}
                </Typography>

                {/* Doctor Info */}
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  Doctor ID: {selectedAppointment.doctor_id}
                </Typography>

                {/* Fees */}
                <Typography variant="subtitle1" mt={2}>
                  Fees
                </Typography>
                <Typography variant="body1">
                  {selectedAppointment.fees}
                </Typography>
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};

export default Appointments;
