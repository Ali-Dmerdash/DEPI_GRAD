import { ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./navLinks.css";

export default function NavLinks({ link }: any) {
  return (
    <ListItem sx={{ fontSize: "15px" }}>
      <Link
        className={window.location.pathname == link.path ? "active" : ""}
        to={link.path}
      >
        {link.name}
      </Link>
    </ListItem>
  );
}
