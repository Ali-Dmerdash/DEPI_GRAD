import { Box, Card, Container } from "@mui/material";
import React from "react";
import { GoDotFill } from "react-icons/go";

type Props = {
  status: boolean;
  name: string;
  specialty: string;
  imageUrl: string;
};

const DoctorCard = ({ status, name, specialty, imageUrl }: Props) => {
  return (
    <>
      <Card
        sx={{
          bgcolor: "white",
          borderRadius: "5px",
          color: "black",
          width: "18%",
          height: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container sx={{ padding: "0px", bgcolor: "#41a667" }}>
          <Box sx={{ width: "100% !important", bgcolor: "transparent" }}>
            <img
              style={{ width: "150px", height: "200px", objectFit: "cover" }}
              src={imageUrl}
            />
          </Box>
        </Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: status ? "green" : "grey",
            marginBottom: "5px",
            marginLeft: "3px",
          }}
        >
          <GoDotFill />
          {status ? "Active Now" : "Offline"}
        </Box>
        <Container>
          <Box
            sx={{
              fontSize: "18px",
            }}
          >
            {name}
          </Box>
          <Box>{specialty}</Box>
        </Container>
      </Card>
    </>
  );
};

export default DoctorCard;
