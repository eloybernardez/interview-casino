import React, { useContext } from "react";
import { Container, Box, Typography } from "@mui/material";
import PlayerList from "./PlayerList";
import PlayerUI from "../pages/PlayerUI";
import AppContext from "../context/AppContext";

const Layout = () => {
  const { users } = useContext(AppContext);
  return (
    <Container sx={{ marginTop: "30px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography variant="h3">Jugadores</Typography>
        <PlayerList>
          {users.map((user, index) => (
            <PlayerUI user={user} key={`user-${index}`} />
          ))}
        </PlayerList>
      </Box>
    </Container>
  );
};

export default Layout;
