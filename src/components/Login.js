import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import { Container } from "@mui/system";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { Input } from "@mui/material";
import { Link } from "react-router-dom";
import { InputLabel, FormControl } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import CasinoIcon from "@mui/icons-material/Casino";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const Login = () => {
  const { management } = useContext(AppContext);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const [currentManagement, setCurrentManagement] = useState("");

  function validateLogin(USERS, user, pass) {
    const userFound = USERS.find(
      (usr) => usr.user === user && usr.pass === pass
    );
    setError(false);
    if (userFound?.user === "crupier") {
      setCurrentManagement("crupier");
    } else if (userFound?.user === "manager") {
      setCurrentManagement("manager");
    } else {
      setCurrentManagement("");
      setError(true);
    }
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "35px",
        justifyContent: "space-evenly",
        height: "500px",
      }}
    >
      <Typography
        component="h2"
        variant="h3"
        sx={{
          fontFamily: "Archivo",
          fontWeight: "600",
        }}
      >
        Acceso trabajadores
      </Typography>
      <FormControl error={error} color="secondary">
        <InputLabel htmlFor="user" color="secondary">
          Usuario
        </InputLabel>
        <Input
          id="user"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </FormControl>
      <FormControl error={error} color="secondary">
        <InputLabel htmlFor="pass" color="secondary">
          Contraseña
        </InputLabel>
        <Input
          id="pass"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </FormControl>

      {!currentManagement && (
        <Button
          color="primary"
          endIcon={<LoginIcon />}
          variant="contained"
          sx={{ marginTop: "10px", marginRight: "10px" }}
          type="button"
          onClick={(e) => {
            if (!currentManagement) e.preventDefault();
            validateLogin(management, user, pass);
          }}
        >
          Acceso al sistema
        </Button>
      )}
      {currentManagement === "crupier" && (
        <Button
          component={Link}
          color="info"
          endIcon={<CasinoIcon />}
          variant="contained"
          sx={{ marginTop: "10px" }}
          type="button"
          to="/crupier"
        >
          Acceso Crupier
        </Button>
      )}
      {currentManagement === "manager" && (
        <Button
          component={Link}
          color="warning"
          endIcon={<AdminPanelSettingsIcon />}
          variant="contained"
          sx={{ marginTop: "10px" }}
          type="button"
          to="/manager"
        >
          Acceso Manager
        </Button>
      )}
    </Container>
  );
};

export default Login;
