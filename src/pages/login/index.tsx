import { Link } from "react-router-dom";
import "./login.css";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { TextFieldElement } from "react-hook-form-mui";
import Joi from "joi";
import { supabase } from "../../lib/supabase/clients";
import { useEffect } from "react";
import { useAuth } from "../../lib/context/auth-context";

const formSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().required(),
});

function Login() {
  const form = useForm<{ email: string; password: string }>({
    resolver: joiResolver(formSchema),
  });
  const { session } = useAuth();

  useEffect(() => {
    console.log(session);
  }, [session]);
  const onSubmit = form.handleSubmit(async (data) => {
    console.log(data);
    await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
  });

  return (
    <>
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
          <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
            <TextFieldElement
              control={form.control}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextFieldElement
              control={form.control}
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
