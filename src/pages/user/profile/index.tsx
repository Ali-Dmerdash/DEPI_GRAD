import React, { useState, useRef, useEffect } from "react";
import {
  Grid2,
  Typography,
  Button,
  Avatar,
  Box,
  Divider,
  Link,
  TextField,
  InputAdornment,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { supabase } from "../../../lib/supabase/clients";
import { useAuth } from "../../../lib/context/auth-context";

function Profile() {
  let { patient, session } = useAuth();
  const [isEditing, setIsEditing] = useState(false); // Track edit mode
  const [fullName, setFullName] = useState(patient?.full_name || ""); // Track full name
  const [fullNameError, setFullNameError] = useState(""); // Track full name validation error
  const [phone, setPhone] = useState(patient?.phone || ""); // Track phone
  const [phoneError, setPhoneError] = useState(""); // Track phone validation error
  const [originalFullName, setOriginalFullName] = useState(fullName); // Save original values for cancel
  const [originalPhone, setOriginalPhone] = useState(phone); // Save original values for cancel
  const [imagePreview, setImagePreview] = useState<string | null>(null); // For image preview
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Function to handle image change
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file)); // Show preview of the uploaded image
    }
  };

  const handleImageUploadClick = () => {
    fileInputRef.current?.click(); // Trigger file input click
  };

  // Fetch patient image from Supabase storage
  const fetchPatientImage = async () => {
    if (patient?.image) {
      // Generate public URL for the image using Supabase
      const { data } = supabase.storage
        .from("image") // Your bucket name
        .getPublicUrl(patient.image);

      if (data.publicUrl) {
        // Add a timestamp to the URL to prevent caching issues
        const timestampedUrl = `${data.publicUrl}?t=${new Date().getTime()}`;
        setImagePreview(timestampedUrl); // Set the image preview with the updated public URL
      }
    }
  };

  // Upload image to Supabase Storage and return the file path
  const uploadImageToSupabase = async (
    file: File,
    patientId: string,
    existingImagePath?: string | null
  ) => {
    const fileExtension = file.name.split(".").pop();
    const fileName = `patient-images/${patientId}.${fileExtension}`;

    // Step 1: Delete the existing image if it exists
    if (existingImagePath) {
      const { error: deleteError } = await supabase.storage
        .from("image") // Ensure the bucket name is correct
        .remove([existingImagePath]);

      if (deleteError) {
        console.error("Error deleting existing image:", deleteError.message);
        throw new Error("Failed to delete existing image");
      }
    }

    // Step 2: Upload the new image
    const { data, error: uploadError } = await supabase.storage
      .from("image") // Ensure the bucket exists
      .upload(fileName, file);

    if (uploadError) {
      console.error("Error uploading image:", uploadError.message);
      throw new Error("Image upload failed");
    }

    // Step 3: Return the path of the newly uploaded file
    return data?.path;
  };

  // Handle the "Save information" button click
  const handleSaveInformation = async () => {
    if (patient?.id) {
      try {
        // Check if there's already an existing image
        const existingImagePath = patient?.image;
        let imagePath = patient?.image || "";

        // Step 1: Upload the new image if the user updated it
        if (imageFile) {
          imagePath = await uploadImageToSupabase(
            imageFile,
            patient.id,
            existingImagePath
          );
        }

        // Step 2: Update the patient's profile image, name, and phone in the database
        const { data, error } = await supabase
          .from("patient")
          .update({ image: imagePath, full_name: fullName, phone: phone })
          .eq("id", patient.id)
          .select(); // Use `.select()` to get the updated record immediately

        if (error) {
          console.error("Error updating patient profile:", error.message);
        } else {
          console.log("Patient profile updated successfully.");
          setIsEditing(false); // Exit edit mode after saving

          // Update the `patient` data with the new values to reflect changes immediately
          patient.full_name = data[0]?.full_name;
          patient.phone = data[0]?.phone;
          patient.image = data[0]?.image;

          fetchPatientImage(); // Fetch and display the updated image
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      }
    }
  };

  // Cancel editing and restore original values
  const handleCancelEdit = () => {
    setFullName(originalFullName); // Restore original full name
    setPhone(originalPhone); // Restore original phone
    setPhoneError(""); // Reset phone error
    setFullNameError(""); // Reset full name error
    setIsEditing(false); // Exit edit mode
  };

  // Fetch the patient's image from the database when the component loads
  useEffect(() => {
    if (patient?.image) {
      fetchPatientImage(); // Fetch and update the image preview
    }
  }, [patient?.image]); // Re-fetch if the profile_image field changes

  // Phone number validation - ensure it's exactly 10 digits
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow digits and ensure it's 10 digits
    if (/^\d{0,10}$/.test(value)) {
      setPhone(value);
      if (value.length === 10) {
        setPhoneError(""); // Clear error if the phone number is exactly 10 digits
      } else {
        setPhoneError("Phone number must be exactly 10 digits");
      }
    }
  };

  // Full name validation - ensure it's at least 10 characters
  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFullName(value);
    if (value.length >= 10) {
      setFullNameError(""); // Clear error if full name has at least 10 characters
    } else {
      setFullNameError("Full name must be at least 10 characters");
    }
  };

  function ButtonProfile(props: any) {
    return (
      <Button
        variant="outlined"
        sx={{
          textTransform: "none",
          borderRadius: "24px",
          color: "var(--text-color)",
          borderColor: "var(--primary-color)",
        }}
        onClick={props.onClick}
        disabled={props.disabled || false} // Disable button if needed
      >
        {props.children}
      </Button>
    );
  }

  return (
    <>
      <Grid2
        container
        sx={{
          padding: { sm: 0, md: 4 },
          maxWidth: { sm: "100%", md: "70%" },
          flexDirection: "column",
          margin: "auto",
        }}
      >
        <Grid2 container spacing={2}>
          {/* Profile Picture and Icon */}
          <Grid2
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {imagePreview ? (
              <Avatar
                alt="Patient Profile"
                src={imagePreview}
                sx={{ width: 100, height: 100 }}
              />
            ) : (
              <Avatar
                alt="User PFP"
                sx={{
                  width: 100,
                  height: 100,
                  backgroundColor: "var(--secondary-color)",
                }}
              >
                <FontAwesomeIcon
                  icon={["fas", "user"]}
                  size="3x"
                  style={{ color: "#ffffff" }}
                />
              </Avatar>
            )}

            {isEditing && (
              <Link
                href="#"
                underline="none"
                color="black"
                onClick={handleImageUploadClick}
                sx={{ marginTop: "10px" }} // Adds space between the picture and the link
              >
                Change Profile Picture
              </Link>
            )}
          </Grid2>
        </Grid2>

        {/* Hidden file input for image upload */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleImageChange}
        />

        {/* Full Name */}
        {isEditing ? (
          <TextField
            size="small"
            value={fullName}
            onChange={handleFullNameChange}
            label="Full Name"
            fullWidth
            helperText={fullNameError || "Enter at least 10 characters"}
            error={!!fullNameError}
            sx={{ marginTop: 2 }} // Add margin between fields
          />
        ) : (
          <Typography variant="h5" sx={{ marginTop: 2, fontWeight: "medium" }}>
            {patient?.full_name}
          </Typography>
        )}

        <Divider
          sx={{
            borderBottomWidth: 2,
            backgroundColor: "#000",
            marginY: 3, // Add vertical margin around the divider
          }}
        />

        {/* Information Section */}
        <Box component={"section"} sx={{ marginTop: "0.5rem" }}>
          {/* Contact Information */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "600",
              marginBottom: 2,
              color: "var(--info-secondary)",
              textDecoration: "underline",
            }}
          >
            CONTACT INFORMATION
          </Typography>

          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 3, sm: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: "600" }}>
                Email:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "600" }}>
                Phone:
              </Typography>
            </Grid2>
            <Grid2 size={8}>
              <Typography variant="body1" sx={{ color: "var(--info-primary)" }}>
                {session?.user.email}
              </Typography>
              {isEditing ? (
                <TextField
                  size="small"
                  value={phone}
                  onChange={handlePhoneChange}
                  label="Phone"
                  fullWidth
                  helperText={phoneError || "Enter 10 digits"}
                  error={!!phoneError}
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
                  sx={{ marginTop: 2 }} // Add margin between fields
                />
              ) : (
                <Typography
                  variant="body1"
                  sx={{ color: "var(--info-primary)" }}
                >
                  (+20) {patient?.phone}
                </Typography>
              )}
            </Grid2>
          </Grid2>

          {/* Basic Information */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "600",
              marginBottom: 2,
              marginTop: 4,
              color: "var(--info-secondary)",
              textDecoration: "underline",
            }}
          >
            BASIC INFORMATION
          </Typography>

          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 3, sm: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: "600" }}>
                Gender:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "600" }}>
                Birthday:
              </Typography>
            </Grid2>
            <Grid2 size={8}>
              <Typography
                variant="body1"
                sx={{ color: "var(--info-secondary)" }}
              >
                {patient?.gender}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "var(--info-secondary)" }}
              >
                {patient?.birthday}
              </Typography>
            </Grid2>
          </Grid2>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ marginTop: 3, display: "flex", gap: 2 }}>
          {isEditing ? (
            <>
              <ButtonProfile
                onClick={handleSaveInformation}
                disabled={
                  !!phoneError ||
                  phone.length !== 10 ||
                  !!fullNameError ||
                  fullName.length <= 10
                } // Disable if phone or full name are not valid
              >
                Save information
              </ButtonProfile>
              <ButtonProfile onClick={handleCancelEdit}>Cancel</ButtonProfile>
            </>
          ) : (
            <ButtonProfile
              onClick={() => {
                setOriginalFullName(fullName); // Save original values before editing
                setOriginalPhone(phone); // Save original values before editing
                setIsEditing(true); // Enable edit mode
              }}
            >
              Edit
            </ButtonProfile>
          )}
        </Box>
      </Grid2>
    </>
  );
}

export default Profile;
