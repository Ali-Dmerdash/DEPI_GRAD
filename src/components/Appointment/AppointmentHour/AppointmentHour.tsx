import { Button, Stack } from "@mui/material";
import React from "react";

export default function AppointmentHour({ hour, setTime, time }: any) {
  return (
    <Button
      onClick={() => {
        setTime(hour);
      }}
      sx={
        hour == time
          ? {
              backgroundColor: "var(--primary-color)",
              padding: "10px",
              color: "var(--text-color)",
              borderRadius: "30px",
              marginRight: "30px",
              border: "1px var(--border-color) solid",
            }
          : {
              padding: "10px",
              color: "var(--text-color)",
              borderRadius: "30px",
              marginRight: "30px",
              border: "1px var(--border-color) solid",
            }
      }
    >
      {hour}
    </Button>
  );
}
