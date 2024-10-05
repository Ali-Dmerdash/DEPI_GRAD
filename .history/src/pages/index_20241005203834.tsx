import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CardActionArea,
  Container,
  Box,
  Button,
} from "@mui/material";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "#f0f0f0", // Change background on hover
    },
  },
  media: {
    height: 140,
  },
  button: {
    marginBottom: "10px",
  },
});

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  image: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Emily Carter",
    specialization: "Gynecologist",
    image: "/images/doctor1.png",
  },
  {
    id: 2,
    name: "Dr. James Lee",
    specialization: "Dermatologist",
    image: "/images/doctor2.png",
  },
  {
    id: 3,
    name: "Dr. Ava Johnson",
    specialization: "Pediatrician",
    image: "/images/doctor3.png",
  },
  {
    id: 4,
    name: "Dr. Richard James",
    specialization: "Neurologist",
    image: "/images/doctor4.png",
  },
  {
    id: 5,
    name: "Dr. Sarah Miller",
    specialization: "Gastroenterologist",
    image: "/images/doctor5.png",
  },
  {
    id: 6,
    name: "Dr. Brian Smith",
    specialization: "General Physician",
    image: "/images/doctor6.png",
  },
  {
    id: 7,
    name: "Dr. Emma Clark",
    specialization: "Gynecologist",
    image: "/images/doctor7.png",
  },
  {
    id: 8,
    name: "Dr. Lucas Martinez",
    specialization: "Dermatologist",
    image: "/images/doctor8.png",
  },
  {
    id: 9,
    name: "Dr. Natalie Brown",
    specialization: "Pediatrician",
    image: "/images/doctor9.png",
  },
  {
    id: 10,
    name: "Dr. Oliver Wilson",
    specialization: "Neurologist",
    image: "/images/doctor10.png",
  },
  {
    id: 11,
    name: "Dr. Sophia Martinez",
    specialization: "Gastroenterologist",
    image: "/images/doctor11.png",
  },
  {
    id: 12,
    name: "Dr. Matthew Garcia",
    specialization: "General Physician",
    image: "/images/doctor12.png",
  },
];

const DoctorCard: React.FC = () => {
  const classes = useStyles();
  const [selectedSpecialization, setSelectedSpecialization] = React.useState<
    string | null
  >(null);

  const handleFilter = (specialization: string) => {
    setSelectedSpecialization(specialization);
  };

  const handleReset = () => {
    setSelectedSpecialization(null);
  };

  const filteredDoctors = selectedSpecialization
    ? doctors.filter((doc) => doc.specialization === selectedSpecialization)
    : doctors;

  return (
    <Container>
      <Box mb={2}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleReset}
        >
          All Specializations
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={() => handleFilter("Gynecologist")}
        >
          Gynecologist
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={() => handleFilter("Dermatologist")}
        >
          Dermatologist
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={() => handleFilter("Pediatrician")}
        >
          Pediatrician
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={() => handleFilter("Neurologist")}
        >
          Neurologist
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={() => handleFilter("Gastroenterologist")}
        >
          Gastroenterologist
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={() => handleFilter("General Physician")}
        >
          General Physician
        </Button>
      </Box>
      <Grid container spacing={3}>
        {filteredDoctors.map((doctor) => (
          <Grid item xs={12} sm={6} md={4} key={doctor.id}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={doctor.image}
                  title={doctor.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {doctor.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {doctor.specialization}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Doctors;
