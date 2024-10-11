import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Grid2, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Stack maxWidth={"lg"} sx={{ margin: "0px auto" }}>
      <Stack
        sx={{
          marginTop: "50px",
          padding: "40px 10px",
          borderBottom: "1px var(--border-color) solid",
        }}
      >
        <Grid2 container rowSpacing={5}>
          <Grid2 size={{ md: 6, xs: 12 }}>
            <Box>
              <Link
                className="mainLogo"
                to=""
                style={{ textDecoration: "none" }}
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
                  />{" "}
                  Oasis
                </Typography>
              </Link>
              <Typography sx={{ marginTop: "20px" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores eum hic consectetur delectus repudiandae laborum sunt
                sit labore ipsa temporibus numquam atque consequatur
                necessitatibus eveniet inventore tempore asperiores, illum, qui
                laudantium iste porro? Quas tempora tenetur accusantium
                molestiae, itaque eligendi obcaecati repellendus atque maiores.
                Voluptatibus quod necessitatibus voluptate assumenda ea.
              </Typography>
            </Box>
          </Grid2>
          <Grid2 size={{ md: 2, xs: 0 }}></Grid2>
          <Grid2 size={{ md: 2, xs: 12 }}>
            <Box>
              <Typography variant="h6">COMPANY</Typography>
              <List
                sx={{
                  fontSize: "15px",
                }}
              >
                <ListItem>
                  <Link to="/home">Home</Link>
                </ListItem>
                <ListItem>
                  <Link to="/about">About us</Link>
                </ListItem>
                <ListItem>
                  <Link to="/contact">Contact us</Link>
                </ListItem>
              </List>
            </Box>
          </Grid2>
          <Grid2 size={{ md: 2, xs: 12 }}>
            <Box>
              <Typography variant="h6">GET IN TOUCH</Typography>
              <List
                sx={{
                  fontSize: "15px",
                }}
              >
                <ListItem>+999 999 9999</ListItem>
                <ListItem>oasis@gmail.com</ListItem>
              </List>
            </Box>
          </Grid2>
        </Grid2>
      </Stack>
      <Box>
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ margin: "20px 0px" }}>
            <Typography sx={{ textAlign: "center" }}>
              Copyright © 2024 GreatStack - All Right Reserved.
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </Stack>
  );
}
