import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppointmentDays from "./AppointmentDays/AppointmentDays";
import AppointmentHour from "./AppointmentHour/AppointmentHour";
import DoctorDetails from "./DoctorDetails/DoctorDetails";

export default function Appointment() {
  let schedules = [
    {
      day: "Sun",
      hour: ["9:00", "9:30"],
    },
    {
      day: "Mon",
      hour: ["9:00", "9:30", "10:00", "10:30", "11:00"],
    },
    {
      day: "Tues",
      hour: ["9:00", "9:30", "10:00", "10:30", "1:00"],
    },
    {
      day: "Wed",
      hour: ["9:00", "12:30", "1:00"],
    },
    {
      day: "Thu",
      hour: [
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "1:00",
      ],
    },
    {
      day: "Fri",
      hour: [
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "1:00",
      ],
    },
  ];

  const [day, setDay] = useState(schedules[0]);
  const [time, setTime] = useState(schedules[0].hour[0]);

  useEffect(() => {
    setTime(day.hour[0]);
  }, [day]);

  return (
    <>
      <Box sx={{ marginTop: "30px", minHeight: "100vh" }}>
        <Stack>
          <DoctorDetails />
          <Grid2 container>
            <Grid2 size={{ md: 3, xs: 0 }}></Grid2>
            <Grid2 size={{ md: 9, xs: 12 }}>
              <Box sx={{ marginTop: "40px" }}>
                <Typography sx={{ marginBottom: "15px", color: "#565656" }}>
                  Booking slots
                </Typography>
                <Stack
                  sx={{
                    justifyContent: "start",
                    flexDirection: "row",
                    marginBottom: "20px",
                  }}
                >
                  {schedules.map((schedule: object, i: number) => (
                    <AppointmentDays
                      key={i}
                      schedule={schedule}
                      setDay={setDay}
                      day={day}
                    />
                  ))}
                </Stack>
                <Stack
                  sx={{
                    justifyContent: "start",
                    flexDirection: "row",
                    marginBottom: "30px",
                  }}
                >
                  {day.hour.map((hour, i) => (
                    <AppointmentHour
                      key={i}
                      hour={hour}
                      setTime={setTime}
                      time={time}
                    />
                  ))}
                </Stack>
              </Box>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "var(--primary-color)",
                  border: "1px var(--border-color) solid",
                  padding: "15px 50px",
                  borderRadius: "30px",
                }}
              >
                Book Appointment
              </Button>
            </Grid2>
          </Grid2>
        </Stack>
      </Box>
    </>
  );
}
