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
        <Box
          sx={{
            width: "70px",
            height: "50px",
            "@media (max-width: 600px)": { width: "40px", height: "40px" },
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/7399/7399022.png"
            alt="New Vegas Casino logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Typography
          color="primary"
          component="span"
          sx={{
            marginLeft: "10px",
            width: "100%",
            fontFamily: "Archivo",
            fontWeight: "300",
            "@media (max-width: 600px)": { display: "none" },
          }}
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
            <Button
              component={Link}
              to="/"
              variant="outlined"
              sx={{ marginRight: "10px", marginY: "5px" }}
            >
              Inicio
            </Button>
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              sx={{ marginY: "5px" }}
            >
              Trabajadores
            </Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
