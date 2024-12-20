import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoIosArrowDown } from "react-icons/io";
import profile_img from "../../assets/profile_img.svg";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../lib/context/auth-context";
function UserDropdownMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const { logout } = useAuth();

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Function to handle logout
  const handleLogout = async () => {
    handleClose(); // First, close the menu
    await logout(); // Then, perform logout
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
      <Button
        id="demo-positioned-menu"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <IoIosArrowDown />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={() => {
            navigate("/profile");
          }}
        >
          My profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/userappointment");
          }}
        >
          My appointments
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      <Button
        id="demo-positioned-menu"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img onClick={handleClick} src={profile_img} />
      </Button>
    </Box>
  );
}
export default UserDropdownMenu;
