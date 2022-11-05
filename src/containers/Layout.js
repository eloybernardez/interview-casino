import React, { useContext } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import PlayerList from "./PlayerList";
import PlayerUI from "../pages/PlayerUI";
import AppContext from "../context/AppContext";

const Layout = () => {
  const { users } = useContext(AppContext);
  return (
    <Container sx={{ paddingTop: "70px" }}>
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Jugadores
        </Typography>
        <PlayerList>
          {users.map((user, index) => (
            <Grid item key={`user-${index + 1}`}>
              <PlayerUI user={user} />
            </Grid>
          ))}
        </PlayerList>
      </Box>
    </Container>
  );
};

export default Layout;
