import {
  Container,
  Box,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  RadioButtonGroup,
  TextFieldElement,
  PasswordElement,
  PasswordRepeatElement,
} from "react-hook-form-mui";
import { DatePickerElement } from "react-hook-form-mui/date-pickers";
import { DateFnsProvider } from "react-hook-form-mui/date-fns";

import { joiResolver } from "@hookform/resolvers/joi";
import { supabase } from "../../lib/supabase/clients";
import Joi, { ref } from "joi";

const formSchema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().required(),
  repeatpassword: Joi.valid(ref("password")).messages({
    "any.only": "The two passwords do not match",
  }),
  phone: Joi.string().required(),
  gender: Joi.string().required(),
  birthday: Joi.date().required(),
});

function Register() {
  const form = useForm<{
    phone: string;
    gender: string;
    birthday: string;
    fullname: string;
    email: string;
    password: string;
    repeatpassword: string;
  }>({
    resolver: joiResolver(formSchema),
  });

  const navigate = useNavigate();
  const onSubmit = form.handleSubmit(async (data) => {
    const userRes = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (!userRes.data.user?.id) throw Error("failed to register user");
    const ID: string = userRes.data.user.id;

    try {
      await supabase
        .from("profile")
        .insert({ fullname: data.fullname, id: ID })
        .returns();

      await supabase
        .from("patient")
        .insert({
          id: ID,
          full_name: data.fullname,
          phone: data.phone,
          gender: data.gender,
          birthday: data.birthday,
          user_id: ID,
        })
        .returns();

      navigate("/login");
    } catch (error) {
      console.error("Unexpected error:", error);
    }
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
              size="small"
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
              size="small"
              control={form.control}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
            />
            <PasswordElement
              size="small"
              control={form.control}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <PasswordRepeatElement
              size="small"
              control={form.control}
              passwordFieldName="password"
              margin="normal"
              required
              fullWidth
              name="repeatpassword"
              label="Repeat Password"
              type="password"
              id="repeatpassword"
            />
            <TextFieldElement
              size="small"
              control={form.control}
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Phone"
              id="phone"
              helperText="(+20) 1123456789"
              slotProps={{
                htmlInput: {
                  maxLength: 10,
                  inputMode: "numeric", // Brings up numeric keypad on mobile devices
                  pattern: "[0-9]*",
                },
                input: {
                  startAdornment: (
                    <InputAdornment position="start">(+20)</InputAdornment>
                  ),
                },
              }}
            />
            <RadioButtonGroup
              control={form.control}
              name="gender"
              required
              row
              options={[
                { id: "1", label: "Male", value: "Male" },
                { id: "2", label: "Female", value: "Female" },
              ]}
              label="Gender"
              labelProps={{
                sx: { margin: "normal" },
                id: "gender",
              }}
            />

            <DateFnsProvider>
              <DatePickerElement
                control={form.control}
                name="birthday"
                required
                label="Birthday"
                inputProps={{
                  fullWidth: true,
                  margin: "normal",
                  id: "birthday",
                  size: "small",
                }}
              />
            </DateFnsProvider>

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
