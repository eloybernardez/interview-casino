import React, { useContext } from "react";
import { Container, Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import AppContext from "../context/AppContext";
import PlayerList from "../containers/PlayerList";
import PlayerUI from "../pages/PlayerUI";

const ManagerUI = () => {
  const { users } = useContext(AppContext);
  const date = new Date();
  const day = date.getDate();
  const betsAccumulation = (user) => {
    const hours = date.getHours();
    const hoursDifference = (bet) => Math.abs(bet.hours - hours);

    // Filter the bets of the current day since 7am to 7am of the next day
    const sum = user.bets.reduce((acc, bet) => {
      if (
        bet.day - day === 0 &&
        bet.hours >= 7 &&
        hoursDifference(bet) <= 24 &&
        hoursDifference(bet) >= 0
      ) {
        return acc + bet.bet;
      }
    }, 0);
    return sum || 0;
  };

  const sumBets = (users) =>
    users.reduce((acc, user) => acc + betsAccumulation(user), 0);

  return (
    <Container sx={{ paddingTop: "70px" }}>
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Manager
        </Typography>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
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
          <Typography
            component="span"
            variant="h6"
            sx={{ textAlign: "center", color: "secondary.main" }}
          >
            Apuestas desde {day - 1}/{date.getMonth()} 7am a {day}/
            {date.getMonth()} 7am :
            <Typography variant="h6" sx={{ color: "dark.main" }}>
              ${sumBets(users)}
            </Typography>
          </Typography>
        </Container>

        <PlayerList>
          {users.map((user, index) => (
            <Grid item xs={12} md={6} key={`user-${index + 1}`}>
              <PlayerUI user={user} />
            </Grid>
          ))}
        </PlayerList>
      </Box>
    </Container>
  );
};

export default ManagerUI;
