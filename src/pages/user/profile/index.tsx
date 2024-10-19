import React from "react";
import "./profile.css";
import { Grid2, Typography, Button, Avatar, Box, Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../../lib/context/auth-context";
import { supabase } from "../../../lib/supabase/clients";

function Profile() {
  let { patient, session } = useAuth();

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
          <Grid2>
            <Avatar
              alt="Edward Vincent"
              src="https://i.pravatar.cc/150?img=3" // Replace with real image
              sx={{ width: 100, height: 100 }}
            />
          </Grid2>
          <Grid2>
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
          </Grid2>
        </Grid2>

        {/* Name */}
        <Typography variant="h5" sx={{ marginTop: 2, fontWeight: "medium" }}>
          {patient?.full_name}
        </Typography>

        <Divider
          sx={{
            borderBottomWidth: 2,
            backgroundColor: "#000",
          }}
        />

        {/*Information Section*/}
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
            {/* Label Column */}
            <Grid2 size={{ xs: 3, sm: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: "600" }}>
                Email:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "600" }}>
                Phone:
              </Typography>
            </Grid2>

            {/* Information Column */}
            <Grid2 size={8}>
              <Typography variant="body1" sx={{ color: "var(--info-primary)" }}>
                {session?.user.email}
              </Typography>
              <Typography variant="body1" sx={{ color: "var(--info-primary)" }}>
                {patient?.phone}
              </Typography>
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
            {/* Label Column */}
            <Grid2 size={{ xs: 3, sm: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: "600" }}>
                Gender:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "600" }}>
                Birthday:
              </Typography>
            </Grid2>

            {/* Information Column */}
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
          <ButtonProfile>Edit</ButtonProfile>
          <ButtonProfile>Save information</ButtonProfile>
        </Box>
      </Grid2>
    </>
  );
}

export default Profile;
