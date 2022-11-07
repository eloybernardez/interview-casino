import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import AppContext from "../context/AppContext";
import PlayerList from "../containers/PlayerList";
import PlayerUI from "../pages/PlayerUI";
import useManagerLogic from "../hooks/useManagerLogic";

const ManagerUI = () => {
  const { users } = useContext(AppContext);
  const { sumBets } = useManagerLogic();

  const sum = sumBets(users);

  return (
    <Grid container spacing={2} sx={{ marginTop: "70px" }}>
      <Grid item xs={12} sm={12}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontFamily: "Archivo", fontWeight: "600" }}
        >
          Manager
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          <Typography
            component="span"
            variant="h4"
            sx={{ color: "secondary.main" }}
          >
            {users.length}
          </Typography>{" "}
          jugadores
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", color: "secondary.main" }}
        >
          Apuestas desde ayer 7am hasta hoy a las 7am
          <Typography variant="h6" sx={{ color: "dark.main" }}>
            ${sum}
          </Typography>
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

export default ManagerUI;
