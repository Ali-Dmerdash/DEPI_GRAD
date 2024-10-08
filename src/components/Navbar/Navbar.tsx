// missing the dropdown menu of the navbar

import { Box, Button, Container, List, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks/NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SegmentIcon from "@mui/icons-material/Segment";

export default function Navbar() {
  let navLinks = [
    { name: "HOME", path: "/home" },
    { name: "DOCTORS", path: "/doctors" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];
  let navigate = useNavigate();

  const [activePath, setActivePath] = useState(null);

  return (
    <Stack>
      <Container
        maxWidth={"lg"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          padding: "10px",
          borderBottom: "1px var(--border-color) solid",
        }}
      >
        <Box>
          <Link
            className="mainLogo"
            to="home"
            style={{
              textDecoration: "none",
              color: " var(--primary-color)",
              fontSize: "45px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: "var(--secondary-color)",
                fontSize: "25px",
                fontWeight: "550",
              }}
            >
              <FontAwesomeIcon
                icon={["fas", "staff-snake"]}
                style={{ color: "var(--primary-color)", fontSize: "45px" }}
              />
              Oasis
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {navLinks.map((link: object, i: number) => (
              <NavLinks key={i} link={link} setActivePath={setActivePath} />
            ))}
          </List>
          <Button
            sx={{
              border: "1px var(--border-color) solid",
              borderRadius: "30px",
              color: "var(--primary--color)",
              fontSize: "10px",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Admin Dashboard
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              borderRadius: "30px",
              padding: "15px 30px",
              backgroundColor: "var(--primary-color)",
              color: "white",
            }}
            onClick={() => {
              navigate("./register");
            }}
          >
            Create Account
          </Button>
          <Button
            sx={{
              fontSize: "30px",
              fontWeight: "200",
              display: { xs: "flex", md: "none" },
            }}
          >
            <SegmentIcon sx={{ color: "var(--primary-color)" }} />
          </Button>
        </Box>
      </Container>
    </Stack>
  );
}
