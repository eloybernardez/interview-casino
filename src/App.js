import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Button, Typography, Container, Box } from "@mui/material";
import AppContext from "./context/AppContext";
import Login from "./components/Login";
import Layout from "./containers/Layout";
import CrupierUI from "./pages/CrupierUI";
import ManagerUI from "./pages/ManagerUI";
import useInitialData from "./hooks/useInitialData";
import "./styles/App.css";

function App() {
  const { users, management, handleUsers } = useInitialData();

  return (
    <AppContext.Provider value={{ users, management, handleUsers }}>
      <BrowserRouter>
        <Typography component="h1" variant="h1" sx={{ textAlign: "center" }}>
          New Vegas Casino
        </Typography>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button component={Link} to="/">
              Inicio
            </Button>
            <Button component={Link} to="/login">
              Login de trabajadores
            </Button>
          </Box>
        </Container>

        <Routes>
          <Route path="/" element={<Layout />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/crupier" element={<CrupierUI />} />
          <Route exact path="/manager" element={<ManagerUI />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
