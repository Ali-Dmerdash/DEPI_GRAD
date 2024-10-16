import { Box, Button, Grid2, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import DoctorDetails from "../../pages/user/reserve-appointment/Components/DoctorDetails";
import { supabase } from "../../lib/supabase/clients";
import { useParams } from "react-router-dom";

export default function DisplayDoctor() {
  let { id }: any = useParams();
  const [doctor, setDoctor] = useState({});

  useEffect(() => {
    getDoctor();
  }, [id]);

  async function getDoctor() {
    let { data: doctor, error }: any = await supabase
      .from("doctor")
      .select("*")
      .eq("id", id);
    if (error) {
      console.log("doctor not found");
    } else {
      setDoctor(doctor);
    }
  }

  async function deleteDoctor() {
    const { error } = await supabase.from("doctor").delete().eq("id", id);
    if (error) {
      alert("Failed to delete doctor");
    } else {
      alert("doctor deleted successfully");
    }
  }

  return (
    <Box sx={{ marginTop: "30px", minHeight: "100vh" }}>
      <Stack>
        <DoctorDetails doctor={doctor} />
      </Stack>
      <Grid2 container spacing={3} sx={{ marginTop: "30px" }}>
        <Grid2 size={{ xs: 6 }}>
          <Button
            sx={{
              color: "white",
              backgroundColor: "var(--primary-color)",
              border: "1px var(--border-color) solid",
              padding: "15px 50px",
              borderRadius: "30px",
            }}
            onClick={() => {
              deleteDoctor();
            }}
          >
            Delete Doctor
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
}
