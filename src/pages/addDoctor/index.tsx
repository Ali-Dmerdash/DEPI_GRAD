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
type Props = {};

const AddDoctor = (props: Props) => {
  return (
    <Container>
      <Box component="form">
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
              />
              <TextField
                sx={{
                  width: "100%",
                  marginTop: "10px",
                }}
                type="text"
                placeholder="Address 2"
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
