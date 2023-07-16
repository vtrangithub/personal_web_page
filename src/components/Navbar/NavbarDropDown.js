import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

function NavbarDropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            VHT
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/Education & Work Experiences">
            Education & Work Experiences
          </Button>
          <Button color="inherit" component={Link} to="/My Resume">
            My Resume
          </Button>
          <Button color="inherit" component={Link} to="/My Projects">
            Projects Info.
          </Button>

          <Button
            color="inherit"
            onClick={handleMenuOpen}
            aria-controls="contact-menu"
            aria-haspopup="true"
          >
            My Projects
          </Button>

          <Menu
            id="contact-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose} component={Link} to="/Crypto Page">
              Crypto Tracker
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/Weather App">
              Weather App
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/ToDo List">
              Todo List
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/Password Validation">
              Password Validation
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/Emoji Generator">
              Emoji Generator
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/Text Separator">
              Text Seperator
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/ChatGPT Clone">
              ChatGPT Clone
            </MenuItem>
          </Menu>
        </Toolbar>

      </Container>

    </AppBar>
  );
}

export default NavbarDropDown;
// --------------------------------------------
