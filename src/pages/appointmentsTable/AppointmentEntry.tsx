import { TableCell, TableRow } from "@mui/material";
import { RiUserLine } from "react-icons/ri";
import { GrUserFemale } from "react-icons/gr";

type Props = {
  isMalePatient: boolean;
  isMaleDoctor: boolean;
  patientName: string;
  department: string;
  age: number;
  date: string;
  doctorName: string;
  fees: number;
};

const AppointmentEntry = ({
  isMalePatient,
  isMaleDoctor,
  patientName,
  department,
  age,
  date,
  doctorName,
  fees,
}: Props) => {
  let patientIcon = isMalePatient ? (
    <RiUserLine size={30} />
  ) : (
    <GrUserFemale size={30} />
  );
  let doctorIcon = isMaleDoctor ? (
    <RiUserLine size={30} />
  ) : (
    <GrUserFemale size={30} />
  );
  return (
    <TableRow>
      <TableCell
        sx={{
          display: "flex",
          gap: "4px",
          justifyContent: "center",
          alignItems: "center",
        }}
        component="th"
        align="center"
        scope="row"
      >
        {patientIcon}
        {patientName}
      </TableCell>
      <TableCell align="center">{department}</TableCell>
      <TableCell align="center">{age}</TableCell>
      <TableCell align="center">{date}</TableCell>
      <TableCell
        sx={{
          display: "flex",
          gap: "4px",
          justifyContent: "center",
          alignItems: "center",
        }}
        align="center"
      >
        {doctorIcon}
        {doctorName}
      </TableCell>
      <TableCell align="center">{fees}$</TableCell>
    </TableRow>
  );
};

export default AppointmentEntry;
