import { Box, Button, Container, Grid2, Link, Typography } from "@mui/material";
import { IoPersonCircleSharp } from "react-icons/io5";
import { supabase } from "../../../lib/supabase/clients";
import {
  PasswordElement,
  TextFieldElement,
  useForm,
} from "react-hook-form-mui";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useState, useRef } from "react";

// Joi schema for form validation
const addDoctorSchema = Joi.object({
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
  image: Joi.any().required(), // Make image required
});

function AddDoctor() {
  // Initializing the form with react-hook-form-mui and Joi validation
  const addDoctorform = useForm<{
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
    image: File | null;
  }>({
    resolver: joiResolver(addDoctorSchema),
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle image selection
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file)); // Show image preview
      addDoctorform.setValue("image", file); // Set image in form data
    }
  };

  // Trigger file input click
  const handleImageUploadClick = () => {
    fileInputRef.current?.click(); // Trigger file input click
  };

  // Upload image to Supabase Storage
  const uploadImageToSupabase = async (file: File, doctorId: string) => {
    const fileName = `doctor-images/${doctorId}.${file.name.split(".").pop()}`; // Use the doctorId as the filename, preserve file extension
    const { data, error } = await supabase.storage
      .from("image") // Ensure you have a "doctor-pictures" bucket in Supabase
      .upload(fileName, file);

    if (error) {
      console.error("Error uploading image:", error.message);
      throw new Error("Image upload failed");
    }

    // Return the path of the uploaded file
    return data?.path;
  };

  // Handle form submission
  const onSubmit = addDoctorform.handleSubmit(async (data) => {
    console.log("Form Submitted:", data); // Debug log to verify submission

    // Step 1: Sign up the user in Supabase
    const userRes = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (!userRes.data.user?.id) throw Error("Failed to register user");
    const ID: string = userRes.data.user.id;

    try {
      if (imageFile) {
        // Step 2: Insert into the profile table
        await supabase.from("profile").insert({
          id: ID,
          fullname: data.fullname,
        });

        // Step 4: Upload the image using the doctor's ID

        const imagePath = await uploadImageToSupabase(imageFile, ID);
        console.log("Image uploaded to path:", imagePath);

        // Step 3: Insert into the doctor table along with the image path
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
            image: imagePath, // Store the image URL in the doctor table
          })
          .returns();

        console.log("Doctor added successfully.");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "row", minHeight: "100vh" }}>
      <Container
        sx={{
          marginTop: "20px",
          padding: "20px",
          boxShadow: 2,
          flex: "1", // Takes up available space
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          Add Doctor
        </Typography>

        <Box>
          {/* If imagePreview exists, display the uploaded image, else show the icon */}
          {imagePreview ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <img
                src={imagePreview}
                alt="Doctor preview"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "50%", // Rounded style for the image
                }}
              />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <IoPersonCircleSharp
                style={{ fontSize: "7rem", cursor: "pointer" }}
                onClick={handleImageUploadClick}
              />
            </Box>
          )}

          <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
            <Link
              href="#"
              underline="none"
              color="black"
              onClick={handleImageUploadClick}
            >
              Upload Doctor Picture
            </Link>
          </Box>
        </Box>

        {/* Hidden file input for image upload */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleImageChange}
        />

        <Box component="form" onSubmit={onSubmit}>
          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextFieldElement
                size="small"
                control={addDoctorform.control}
                name="fullname"
                label="Doctor Name"
                required
                fullWidth
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextFieldElement
                size="small"
                control={addDoctorform.control}
                name="degree"
                label="Degree"
                required
                fullWidth
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextFieldElement
                size="small"
                control={addDoctorform.control}
                name="email"
                label="Doctor Email"
                type="email"
                required
                fullWidth
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextFieldElement
                size="small"
                control={addDoctorform.control}
                name="specialty"
                label="Specialty"
                required
                fullWidth
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>
              <PasswordElement
                size="small"
                control={addDoctorform.control}
                name="password"
                label="Doctor Password"
                required
                fullWidth
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextFieldElement
                size="small"
                control={addDoctorform.control}
                name="address"
                label="Address 1"
                required
                fullWidth
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextFieldElement
                size="small"
                control={addDoctorform.control}
                name="experience"
                label="Experience (in years)"
                type="number"
                required
                fullWidth
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextFieldElement
                size="small"
                control={addDoctorform.control}
                name="address_sec"
                label="Address 2"
                fullWidth
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextFieldElement
                size="small"
                control={addDoctorform.control}
                name="fees"
                label="Fees"
                type="number"
                required
                fullWidth
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextFieldElement
                size="small"
                control={addDoctorform.control}
                name="about"
                label="About"
                required
                fullWidth
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ borderRadius: "20px", backgroundColor: "#1565C0" }}
              >
                Add Doctor
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
}

export default AddDoctor;
