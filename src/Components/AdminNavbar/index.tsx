import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminNavbar = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: "white", boxShadow: 1, p: 1 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon
            icon={["fas", "staff-snake"]}
            size="3x"
            style={{ color: "var(--primary-color)" }}
          />
          <Typography
            color="textSecondary"
            style={{ color: "var(--secondary-color)", fontSize: "25px" }}
          >
            Oasis
          </Typography>
        </Box>

        {/* <Button
          variant="contained"
          sx={{
            bgcolor: "#07456F",
            color: "white",
            px: 3,
            py: 1.5,
            borderRadius: "8px",
            "&:hover": {
              bgcolor: "#07456F",
              opacity: 0.9,
            },
            transition: "opacity 0.3s",
          }}
        >
          Log Out
        </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
