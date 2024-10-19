import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAuth } from "../../lib/context/auth-context";

const AdminNavbar = () => {
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <AppBar position="fixed" sx={{ bgcolor: "white", boxShadow: 1, p: 1 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Link
            className="mainLogo"
            to="/home"
            style={{
              textDecoration: "none",
              color: " var(--primary-color)",
              fontSize: "45px",
            }}
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
              />
              Oasis
            </Typography>
          </Link>
        </Box>

        <Button
          variant="contained"
          onClick={handleLogout}
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
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
