import { Box, Card, Container, Grid2 } from "@mui/material";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

type Props = {
  status: boolean;
  name: string;
  specialty: string;
  imageUrl: string;
};

const DoctorCard = ({ status, name, specialty, imageUrl }: Props) => {
  return (
    <Grid2 size={{ sm: 12, md: 4, lg: 3 }}>
      <Link to={`/dashboard/displayDoctor/${name}`}>
        <Card
          sx={{
            bgcolor: "white",
            borderRadius: "5px",
            color: "black",
            height: "300px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#ACE6F6",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                bgcolor: "transparent",
              }}
            >
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
                fontSize: "16px",
              }}
            >
              {name}
            </Box>
            <Box sx={{ fontSize: "14px" }}>{specialty}</Box>
          </Container>
        </Card>
      </Link>
    </Grid2>
  );
};

export default DoctorCard;
