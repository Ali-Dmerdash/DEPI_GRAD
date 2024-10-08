import React, { useState } from 'react';
import { FaClipboardList } from 'react-icons/fa';
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Avatar, Button, useMediaQuery, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';

// Define types for appointments
interface Appointment {
  id: number;
  patient: string;
  patientAvatar: string;
  doctor: string;
  doctorAvatar: string;
  age: number;
  dateTime: string;
  fees: string;
  status: string;
}

const Appointments: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [open, setOpen] = useState<boolean>(false);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  // Handle modal open
  const handleOpen = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setOpen(true);
  };

  // Handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  // Example appointment data
  const appointments: Appointment[] = [
    {
      id: 1,
      patient: 'John Doe',
      patientAvatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      doctor: 'Dr. Smith',
      doctorAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      age: 30,
      dateTime: '3 Nov 2024, 12:30',
      fees: '$50',
      status: 'Confirmed'
    },
    {
      id: 2,
      patient: 'Jane Doe',
      patientAvatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      doctor: 'Dr. Johnson',
      doctorAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      age: 28,
      dateTime: '4 Nov 2024, 14:00',
      fees: '$75',
      status: 'Confirmed'
    }
  ];

  return (
    <Box sx={{ p: 6 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
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
              <TableCell>Patient</TableCell>
              {!isSmallScreen && <TableCell>Age</TableCell>}
              <TableCell>Date & Time</TableCell>
              <TableCell>Doctor</TableCell>
              {!isSmallScreen && <TableCell>Fees</TableCell>}
              {!isSmallScreen && <TableCell>Action</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id} hover>
                {/* Patient */}
                <TableCell>
                  <Box display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} alignItems="center">
                    <Avatar
                      src={appointment.patientAvatar}
                      alt="Patient Avatar"
                      sx={{ mr: isSmallScreen ? 0 : 2, mb: isSmallScreen ? 1 : 0 }}
                    />
                    <Typography fontWeight="bold">{appointment.patient}</Typography>
                  </Box>
                </TableCell>

                {/* Age */}
                {!isSmallScreen && <TableCell>{appointment.age}</TableCell>}

                {/* Date & Time */}
                <TableCell>{appointment.dateTime}</TableCell>

                {/* Doctor */}
                <TableCell>
                  <Box display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} alignItems="center">
                    <Avatar
                      src={appointment.doctorAvatar}
                      alt="Doctor Avatar"
                      sx={{ mr: isSmallScreen ? 0 : 2, mb: isSmallScreen ? 1 : 0 }}
                    />
                    <Typography fontWeight="bold">{appointment.doctor}</Typography>
                  </Box>
                </TableCell>

                {/* Fees */}
                {!isSmallScreen && <TableCell>{appointment.fees}</TableCell>}

                {/* Action */}
                {!isSmallScreen && (
                  <TableCell>
                    <Button color="primary" onClick={() => handleOpen(appointment)}>View</Button>
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
              {/* Patient Info */}
              <Avatar src={selectedAppointment.patientAvatar} alt="Patient Avatar" sx={{ width: 80, height: 80, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold">{selectedAppointment.patient}</Typography>
              <Typography variant="body2" color="textSecondary">Age: {selectedAppointment.age}</Typography>

              {/* Date & Time */}
              <Typography variant="subtitle1" mt={2}>Date & Time</Typography>
              <Typography variant="body1">{selectedAppointment.dateTime}</Typography>

              {/* Doctor Info */}
              <Avatar src={selectedAppointment.doctorAvatar} alt="Doctor Avatar" sx={{ width: 80, height: 80, mt: 4, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold">{selectedAppointment.doctor}</Typography>

              {/* Fees */}
              <Typography variant="subtitle1" mt={2}>Fees</Typography>
              <Typography variant="body1">{selectedAppointment.fees}</Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Appointments;
