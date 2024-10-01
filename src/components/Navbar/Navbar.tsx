import { Box, Button, Container, List, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks/NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  let navLinks = [
    { name: "HOME", path: "home", active: true },
    { name: "ALLDOCTORS", path: "doctors", active: false },
    { name: "ABOUT", path: "about", active: false },
    { name: "CONTACT", path: "contact", active: false },
  ];

  const [activeState, setActiveState] = useState("");
  let navigate = useNavigate();

  function activeLink() {
    navLinks.map((link) => {
      if (link.path == activeState) {
        link.active = true;
      } else {
        link.active = false;
      }
    });
  }

  useEffect(() => {
    activeLink();
  }, [activeState]);

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
          borderBottom: "1px #ADADAD solid",
        }}
      >
        <Box>
          <Link className="mainLogo" to="" style={{ textDecoration: "none" }}>
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
        <Box>
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {navLinks.map((link: object, i: number) => (
              <NavLinks key={i} link={link} setActiveState={setActiveState} />
            ))}
          </List>
        </Box>
        <Box>
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
        </Box>
      </Container>
    </Stack>
  );
}
