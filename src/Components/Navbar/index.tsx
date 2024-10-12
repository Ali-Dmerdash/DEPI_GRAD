import { useState } from "react";
import {
  Box,
  Button,
  Container,
  List,
  Stack,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "./Components/NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SegmentIcon from "@mui/icons-material/Segment";
import UserDropdownMenu from "../UserDropdownMenu";

export default function Navbar() {
  let navLinks = [
    { name: "HOME", path: "/home" },
    { name: "DOCTORS", path: "/doctors" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];
  let navigate = useNavigate();

  const [activePath, setActivePath] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isDrawerOpen, setDrawerOpen] = useState(false); // State for mobile drawer

  return (
    <Stack>
      <Container
        maxWidth={"lg"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center", // Changed from 'right' to 'center' to avoid misalignment
          flexDirection: "row",
          padding: "10px",
          borderBottom: "1px var(--border-color) solid",
        }}
      >
        {/* Logo */}
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

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {navLinks.map((link, i) => (
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
              navigate("/dashboard");
            }}
          >
            Admin Dashboard
          </Button>
        </Box>

        {/* User Dropdown / Create Account */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {!isLoggedIn ? (
            <Button
              sx={{
                borderRadius: "30px",
                padding: "15px 30px",
                backgroundColor: "var(--primary-color)",
                color: "white",
              }}
              onClick={() => {
                navigate("/register");
              }}
            >
              Create Account
            </Button>
          ) : (
            <UserDropdownMenu />
          )}

          {/* Mobile Menu Button */}
          <IconButton
            sx={{
              fontSize: "30px",
              fontWeight: "200",
              display: { xs: "flex", md: "none" },
            }}
            onClick={() => setDrawerOpen(true)} // Open drawer on click
          >
            <SegmentIcon sx={{ color: "var(--primary-color)" }} />
          </IconButton>
        </Box>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)} // Close drawer on outside click
      >
        <Box sx={{ width: 250, padding: "20px" }}>
          <List>
            {navLinks.map((link, i) => (
              <NavLinks key={i} link={link} setActivePath={setActivePath} />
            ))}
          </List>
          <Button
            sx={{
              border: "1px var(--border-color) solid",
              borderRadius: "30px",
              color: "var(--primary--color)",
              fontSize: "10px",
              marginTop: "20px",
            }}
            onClick={() => {
              navigate("/");
              setDrawerOpen(false); // Close drawer after clicking
            }}
          >
            Admin Dashboard
          </Button>
        </Box>
      </Drawer>
    </Stack>
  );
}
