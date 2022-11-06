import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";

const Header = () => {
  return (
    <AppBar color="dark">
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "50px", height: "30px" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/7399/7399022.png"
            alt="New Vegas Casino logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Typography
          color="primary"
          component="span"
          variant="h6"
          sx={{ marginLeft: "10px", width: "100%" }}
        >
          N.V. Casino
        </Typography>
        <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Button component={Link} to="/" variant="text">
              Inicio
            </Button>
            <Button component={Link} to="/login" variant="text">
              Login de trabajadores
            </Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
