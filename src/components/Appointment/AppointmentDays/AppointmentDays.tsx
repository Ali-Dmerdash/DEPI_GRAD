import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";

export default function AppointmentDays({ schedule, setDay, day }: any) {
  return (
    <Button
      onClick={() => {
        setDay(schedule);
      }}
      sx={
        day.day == schedule.day
          ? {
              backgroundColor: "var(--primary-color)",
              padding: "40px 10px",
              color: "var(--text-color)",
              borderRadius: "30px",
              marginRight: "30px",
              border: "1px var(--border-color) solid",
            }
          : {
              padding: "40px 10px",
              color: "var(--text-color)",
              borderRadius: "30px",
              marginRight: "30px",
              border: "1px var(--border-color) solid",
            }
      }
    >
      {schedule.day}
    </Button>
  );
}
