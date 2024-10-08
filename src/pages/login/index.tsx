import { Link } from "react-router-dom";
import "./login.css";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";

function Login() {
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
            Login
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Please login to book appointment
          </Typography>

          {/* Login Form */}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
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
              Login
            </Button>

            {/* Registration Link */}
            <Typography>
              Don't have an account?{" "}
              <Link to="/register" className="secondary-color">
                Register here
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Login;
