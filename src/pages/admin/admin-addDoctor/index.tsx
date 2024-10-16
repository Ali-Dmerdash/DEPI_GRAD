import { Box, Button, Container, Grid2, Link, Typography } from "@mui/material";
import "./AddDoctors.css";
import { IoPersonCircleSharp } from "react-icons/io5";
import { supabase } from "../../../lib/supabase/clients";

import {
  PasswordElement,
  TextFieldElement,
  useForm,
} from "react-hook-form-mui";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi, { ref } from "joi";

const formSchema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().required(),
  experience: Joi.number().required(),
  fees: Joi.number().required(),
  specialty: Joi.string().required(),
  about: Joi.string().required(),
  address: Joi.string().required(),
  degree: Joi.string().required(),
  address_sec: Joi.string(),
});

function AddDoctor() {
  const form = useForm<{
    email: string;
    password: string;
    fullname: string;
    address: string;
    degree: string;
    experience: number;
    fees: number;
    specialty: string;
    about: string;
    address_sec: string;
  }>({
    resolver: joiResolver(formSchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    console.log("first");
    const userRes = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (!userRes.data.user?.id) throw Error("failed to register user");
    const ID: string = userRes.data.user.id;

    try {
      await supabase
        .from("doctor")
        .insert({
          id: ID,
          user_id: ID,
          name: data.fullname,
          address: data.address,
          degree: data.degree,
          experience: data.experience,
          fees: data.fees,
          specialty: data.specialty,
          about: data.about,
          address_sec: data.address_sec,
        })
        .returns();
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  });

  return (
    <Container>
      <Box sx={{ boxShadow: 2, mb: 2 }}>
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

        <Box component="form" onSubmit={onSubmit}>
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
                <TextFieldElement
                  control={form.control}
                  sx={{ marginTop: "10px", width: "100%" }}
                  name="fullname"
                  label="Doctor Name"
                  required
                />
              </Box>

              <Box sx={{ marginTop: "3px" }}>
                <Typography component="label">Doctor Email</Typography>
                <TextFieldElement
                  control={form.control}
                  sx={{ marginTop: "10px", width: "100%" }}
                  name="email"
                  label="Doctor Email"
                  type="email"
                  required
                />
              </Box>

              <Box sx={{ marginTop: "3px" }}>
                <Typography component="label">Doctor Password</Typography>
                <PasswordElement
                  control={form.control}
                  sx={{ marginTop: "10px", width: "100%" }}
                  name="password"
                  label="Doctor Password"
                  type="password"
                  required
                />
              </Box>

              <Box sx={{ marginTop: "3px" }}>
                <Typography component="label">Experience (in years)</Typography>
                <TextFieldElement
                  control={form.control}
                  sx={{ marginTop: "10px", width: "100%" }}
                  name="experience"
                  label="Experience (in years)"
                  type="number"
                  required
                />
              </Box>

              <Box sx={{ marginTop: "3px" }}>
                <Typography component="label">Fees</Typography>
                <TextFieldElement
                  control={form.control}
                  sx={{ marginTop: "10px", width: "100%" }}
                  name="fees"
                  label="Fees"
                  type="number"
                  required
                />
              </Box>

              <Box sx={{ marginTop: "3px" }}>
                <Typography component="label">About</Typography>
                <TextFieldElement
                  control={form.control}
                  sx={{ marginTop: "10px", width: "100%" }}
                  name="about"
                  label="About"
                  required
                />
              </Box>
            </Grid2>

            <Grid2 size={{ lg: 5, sm: 12 }}>
              <Box>
                <Typography component="label">Specialty</Typography>
                <TextFieldElement
                  control={form.control}
                  sx={{ marginTop: "10px", width: "100%" }}
                  name="specialty"
                  label="Specialty"
                  required
                />
              </Box>

              <Box sx={{ marginTop: "10px" }}>
                <Typography component="label">Address</Typography>
                <TextFieldElement
                  control={form.control}
                  sx={{ marginTop: "10px", width: "100%" }}
                  name="address"
                  label="Address 1"
                  required
                />
                <TextFieldElement
                  control={form.control}
                  sx={{ marginTop: "10px", width: "100%" }}
                  name="address_sec"
                  label="Address 2"
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
                  type="submit"
                  variant="contained"
                  sx={{ width: "100%", borderRadius: "20px" }}
                >
                  Add Doctor
                </Button>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Container>
  );
}

export default AddDoctor;
