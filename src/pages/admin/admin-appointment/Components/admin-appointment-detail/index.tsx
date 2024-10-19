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
import { supabase } from "../../../../../lib/supabase/clients";

interface Appointment {
  id: string;
  patient_id: string;
  doctor_id: string;
  created_at: string;
  fees: number;
}

const Appointments: React.FC = () => {
  const { isLoading, appointment, session } = useAuth();
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState<boolean>(false);
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [patientNames, setPatientNames] = useState<{ [key: string]: string }>(
    {}
  );
  const [doctorNames, setDoctorNames] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchNames = async () => {
      const patientNamePromises =
        appointment?.map(async (appo: Appointment) => {
          const patientName = await getPatientName(appo.patient_id);
          return { [appo.patient_id]: patientName };
        }) || [];

      const doctorNamePromises =
        appointment?.map(async (appo: Appointment) => {
          const doctorName = await getDoctorName(appo.doctor_id);
          return { [appo.doctor_id]: doctorName };
        }) || [];

      const patientResults = await Promise.all(patientNamePromises);
      const doctorResults = await Promise.all(doctorNamePromises);

      setPatientNames((prev) => ({
        ...prev,
        ...Object.assign({}, ...patientResults),
      }));
      setDoctorNames((prev) => ({
        ...prev,
        ...Object.assign({}, ...doctorResults),
      }));
    };

    if (appointment) fetchNames();
  }, [appointment]);

  const handleOpen = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function getPatientName(patientId: string) {
    let { data, error } = await supabase
      .from("patient")
      .select("full_name")
      .eq("id", patientId);
    if (error || !data || data.length === 0) {
      console.log("Error fetching patient name");
      return "N/A";
    }
    return data[0].full_name;
  }

  async function getDoctorName(doctorId: string) {
    let { data, error } = await supabase
      .from("doctor")
      .select("name")
      .eq("id", doctorId);
    if (error || !data || data.length === 0) {
      console.log("Error fetching doctor name");
      return "N/A";
    }
    return data[0].name;
  }

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
                <TableCell>Patient Name</TableCell>
                <TableCell>Date & Time</TableCell>
                <TableCell>Doctor Name</TableCell>
                {!isSmallScreen && <TableCell>Fees</TableCell>}
                {!isSmallScreen && <TableCell>Action</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {appointment?.map((m) => (
                <TableRow key={m.id} hover>
                  {/* Appointment ID */}
                  <TableCell>{m.id}</TableCell>

                  {/* Patient Name */}
                  <TableCell>
                    {patientNames[m.patient_id] || "Loading..."}
                  </TableCell>

                  {/* Date & Time */}
                  <TableCell>
                    {new Date(m.created_at).toLocaleString()}
                  </TableCell>

                  {/* Doctor Name */}
                  <TableCell>
                    {doctorNames[m.doctor_id] || "Loading..."}
                  </TableCell>

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
                  Patient Name:{" "}
                  {patientNames[selectedAppointment.patient_id] || "Loading..."}
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
                  Doctor Name:{" "}
                  {doctorNames[selectedAppointment.doctor_id] || "Loading..."}
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
