import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { TextFieldElement } from "react-hook-form-mui";
import { joiResolver } from "@hookform/resolvers/joi";
import { supabase } from "../../lib/supabase/clients";
import Joi from "joi";

const formSchema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().required(),
});

function Register() {
  const form = useForm<{ fullname: string; email: string; password: string }>({
    resolver: joiResolver(formSchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    const userRes = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (!userRes.data.user?.id) throw Error("failed to register user");

    try {
      await supabase
        .from("profile")
        .insert({ fullname: data.fullname, id: userRes.data.user.id })
        .returns();

      // todo: redirect to the page
    } catch {}
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
            Register
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Please register to book appointment
          </Typography>

          {/* Login Form */}
          <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
            <TextFieldElement
              control={form.control}
              margin="normal"
              required
              fullWidth
              name="fullname"
              label="Full name"
              type="fullname"
              id="fullname"
              autoFocus
            />
            <TextFieldElement
              control={form.control}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
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
