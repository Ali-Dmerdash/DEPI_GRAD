import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

function Register() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "right",
            padding: 5,
            boxShadow: 3,
            borderRadius: 4,
          }}
        >
          {/* Form Heading */}
          <Typography component="h1" variant="h5" fontWeight={600}>
            Register
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Please register to book appointment
          </Typography>

          {/* Login Form */}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="fullname"
              label="Full name"
              type="fullname"
              id="fullname"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "var(--primary-color)",
              }}
            >
              Register
            </Button>

            {/* Registration Link */}
            <Typography>
              Already have an account?{" "}
              <Link to="/login" className="secondary-color">
                Login here
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Register;
