import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { AppointmentsData } from "./AppointmentsData";
import AppointmentEntry from "./AppointmentEntry";
type Props = {};

const AppointmentsTable = (props: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Patient</TableCell>
            <TableCell align="center">Department</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Date & Time</TableCell>
            <TableCell align="center">Doctor</TableCell>
            <TableCell align="center">Fees</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {AppointmentsData.map((appointment) => (
            <AppointmentEntry
              isMalePatient={appointment.isMalePatient}
              isMaleDoctor={appointment.isMalePatient}
              patientName={appointment.patientName}
              doctorName={appointment.doctorName}
              age={appointment.age}
              department={appointment.department}
              date={appointment.date}
              fees={appointment.fees}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default AppointmentsTable;
