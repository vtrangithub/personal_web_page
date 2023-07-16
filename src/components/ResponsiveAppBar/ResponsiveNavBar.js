import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Hidden from "@mui/material/Hidden";

const pages = [
  "Home",
  "Education & Work Experiences",
  "My Resume",
  "My Projects",
  "Crypto Page",
  "Weather App",
  "ToDo List",
  "Password Validation",
  "Emoji Generator",
  "Text Separator",
  "ChatGPT Clone"
];

function ResponsiveNavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile Menu */}
          <Hidden mdUp>
            <Box sx={{ flexGrow: 1 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography fontWeight="bold">
                        <Link
                          style={{ textDecoration: "none", color: "firebrick" }}
                          to={`/${page}`}
                        >
                          {page}
                        </Link>
                      </Typography>
                    </MenuItem>
                  ))}
                </Box>
              </Menu>
            </Box>
          </Hidden>

          {/* Desktop Menu */}
          <Hidden smDown>
            <Box sx={{ flexGrow: 1 }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "firebrick" }}
                    to={`/${page}`}
                  >
                    {page}
                  </Link>
                </Button>
              ))}
            </Box>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveNavBar;
