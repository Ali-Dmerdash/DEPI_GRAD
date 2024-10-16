import {
  Box,
  Button,
  Container,
  Grid2,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import "./AddDoctors.css";
import { IoPersonCircleSharp } from "react-icons/io5";
import { supabase } from "../../../lib/supabase/clients";
import { useState } from "react";
type Props = {};

const AddDoctor = (props: Props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [degree, setDegree] = useState("");
  const [experience, setExperience] = useState(0);
  const [fees, setFees] = useState(0);
  const [specialty, setSpecialty] = useState("");
  const [about, setAbout] = useState("");
  const [address_sec, setAddressSec] = useState("");

  const addDoctorData = async () => {
    const { data, error } = await supabase
      .from("doctor")
      .insert([
        {
          name: name,
          address: address,
          degree: degree,
          experience: experience,
          fees: fees,
          specialty: specialty,
          about: about,
          address_sec: address_sec,
        },
      ])
      .select();

    if (error) {
      console.error("cannot add doctor:", error);
    } else {
      alert("Doctor added successfully:");
    }

    setName("");
    setAddress("");
    setDegree("");
    setExperience(0);
    setFees(0);
    setSpecialty("");
    setAbout("");
    setAddressSec("");
  };
  return (
    <Container>
      <Box sx={{ boxShadow: 2, mb: 2 }} component="form">
        <Typography variant="h5">Add Doctor</Typography>
        <Box>
          <Box>
            <IoPersonCircleSharp style={{ fontSize: "7rem" }} />
          </Box>
          <Box>
            <Link href="#" underline="none" color="black">
              Upload Doctor Picture
            </Link>
          </Box>
        </Box>
        <Grid2
          sx={{
            marginTop: "10px",
          }}
          container
          spacing={7}
        >
          <Grid2 size={{ lg: 7, sm: 12 }}>
            <Box sx={{ marginTop: "3px" }}>
              <Typography component="label">Doctor Name</Typography>
              <TextField
                sx={{
                  marginTop: "10px",
                  width: "100%",
                }}
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Box>
            <Box sx={{ marginTop: "3px" }}>
              <Typography component="label">Doctor Email</Typography>
              <TextField
                sx={{
                  width: "100%",
                  marginTop: "10px",
                }}
                type="text"
                placeholder="Email"
              />
            </Box>
            <Box sx={{ marginTop: "3px" }}>
              <Typography component="label">Doctor Password</Typography>
              <TextField
                sx={{
                  width: "100%",
                  marginTop: "10px",
                }}
                type="text"
                placeholder="Password"
              />
            </Box>
            <Box sx={{ marginTop: "3px" }}>
              <Typography component="label">Experience (in years)</Typography>
              <TextField
                sx={{
                  width: "100%",
                  marginTop: "10px",
                }}
                type="number"
                placeholder="Number of years"
                onChange={(e) => {
                  setExperience(Number(e.target.value));
                }}
              />
            </Box>
            <Box sx={{ marginTop: "3px" }}>
              <Typography component="label">Fees</Typography>
              <TextField
                sx={{
                  width: "100%",
                  marginTop: "10px",
                }}
                type="number"
                placeholder="Fees"
                onChange={(e) => {
                  setFees(Number(e.target.value));
                }}
              />
            </Box>
            <Box sx={{ marginTop: "3px" }}>
              <Typography component="label">About</Typography>
              <TextField
                sx={{
                  width: "100%",
                  marginTop: "10px",
                }}
                type="text"
                placeholder="About"
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
              />
            </Box>
          </Grid2>
          <Grid2 size={{ lg: 5, sm: 12 }}>
            <Box>
              <Typography component="label">Specialty</Typography>
              <TextField
                sx={{
                  width: "100%",
                  marginTop: "10px",
                }}
                type="text"
                placeholder="Specialty"
                onChange={(e) => {
                  setSpecialty(e.target.value);
                }}
              />
            </Box>
            <Box sx={{ marginTop: "10px" }}>
              <Typography component="label">Education</Typography>
              <TextField
                sx={{
                  width: "100%",
                  marginTop: "10px",
                }}
                type="text"
                placeholder="Education"
                onChange={(e) => {
                  setDegree(e.target.value);
                }}
              />
            </Box>
            <Box sx={{ marginTop: "10px" }}>
              <Typography component="label">Address</Typography>
              <TextField
                sx={{
                  width: "100%",
                  marginTop: "10px",
                }}
                type="text"
                placeholder="Address 1"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              <TextField
                sx={{
                  width: "100%",
                  marginTop: "10px",
                }}
                type="text"
                placeholder="Address 2"
                onChange={(e) => {
                  setAddressSec(e.target.value);
                }}
              />
            </Box>
            <Box
              sx={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{ width: "100%", borderRadius: "20px" }}
                onClick={() => {
                  addDoctorData();
                }}
              >
                Add Doctor
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default AddDoctor;
