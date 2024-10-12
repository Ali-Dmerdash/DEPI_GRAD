import { Box, Grid2 } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Specialities({ speciality }: any) {
  return (
    <Grid2 size={{ sm: 6, md: 2 }}>
      <Link to={"/doctors"}>
        <Box
          sx={{
            margin: "0px 10px",
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": { transform: "translateY(-5%)" },
          }}
        >
          <img src={speciality.image} alt="" />
          <p>{speciality.name}</p>
        </Box>
      </Link>
    </Grid2>
  );
}
