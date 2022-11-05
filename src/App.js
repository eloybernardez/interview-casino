import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {
  Button,
  Typography,
  Container,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";
import { yellow } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppContext from "./context/AppContext";
import Login from "./components/Login";
import Layout from "./containers/Layout";
import CrupierUI from "./pages/CrupierUI";
import ManagerUI from "./pages/ManagerUI";
import useInitialData from "./hooks/useInitialData";
import "./styles/App.css";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: yellow[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#2b2f71",
    },
    dark: {
      main: "#000000",
    },
  },
});

function App() {
  const { users, management, handleUsers } = useInitialData();

  return (
    <AppContext.Provider value={{ users, management, handleUsers }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AppBar color="dark">
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "30px", height: "30px" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7399/7399022.png"
                  alt="nv-icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Typography
                component="span"
                variant="h6"
                sx={{ textAlign: "center" }}
                color="primary"
              >
                NV Casino
              </Typography>

              <Container>
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

          <Routes>
            <Route path="/" element={<Layout />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/crupier" element={<CrupierUI />} />
            <Route exact path="/manager" element={<ManagerUI />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
