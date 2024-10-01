import { ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./navLinks.css";

export default function NavLinks({ link, setActiveState }: any) {
  return (
    <ListItem sx={{ fontSize: "15px" }}>
      <Link
        className={link.active ? "active" : ""}
        to={link.path}
        onClick={() => {
          setActiveState(link.path);
        }}
      >
        {link.name}
      </Link>
    </ListItem>
  );
}
