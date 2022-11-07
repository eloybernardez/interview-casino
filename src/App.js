import { BrowserRouter, Route, Routes } from "react-router-dom";
import { yellow } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppContext from "./context/AppContext";
import Login from "./components/Login";
import Layout from "./containers/Layout";
import CrupierUI from "./pages/CrupierUI";
import ManagerUI from "./pages/ManagerUI";
import useInitialData from "./hooks/useInitialData";
import Header from "./components/Header";
import "@fontsource/archivo";

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: "#2b2f71",
    },
    dark: {
      main: "#000000",
      secondary: "#1c1c1c",
    },
    light: {
      main: "#ffffff",
      secondary: "#f5f5f5",
    },
  },
});

function App() {
  const { users, management, handleUsers, saveUsers } = useInitialData();

  return (
    <AppContext.Provider value={{ users, management, handleUsers, saveUsers }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
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
