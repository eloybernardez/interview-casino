import React, { useContext } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import PlayerList from "./PlayerList";
import PlayerUI from "../pages/PlayerUI";
import AppContext from "../context/AppContext";

const Layout = () => {
  const { users } = useContext(AppContext);
  return (
    <Grid container spacing={2} sx={{ marginTop: "70px" }}>
      <Grid item xs={12} sm={12}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontFamily: "Archivo", fontWeight: "600" }}
        >
          Jugadores
        </Typography>
      </Grid>

      <Grid item sm={12}>
        <PlayerList>
          {users.map((user, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              key={`user-${index + 1}`}
            >
              <PlayerUI user={user} />
            </Grid>
          ))}
        </PlayerList>
      </Grid>
    </Grid>
  );
};

export default Layout;
