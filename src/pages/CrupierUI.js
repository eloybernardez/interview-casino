import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import { Container, Box } from "@mui/system";
import {
  Input,
  FormControl,
  InputLabel,
  Button,
  Typography,
} from "@mui/material";

const CrupierUI = () => {
  const { users, handleUsers } = useContext(AppContext);
  const [currentUser, setCurrentUser] = useState({});
  const [bet, setBet] = useState(0);

  const handleBet = (betValue) => {
    setBet(betValue);
  };

  const handleBetting = (user, betValue) => {
    const foundUser = users.find(
      (usr) => usr.user?.toLowerCase() === user.toLowerCase()
    );
    if (!foundUser) {
      handleUsers([...users, { user: user, points: 1000, bets: [betValue] }]);
    } else {
      const oldUsers = users.filter(
        (usr) => usr.user?.toLowerCase() !== user.toLowerCase()
      );
      const newUser = { ...foundUser, bets: [...foundUser.bets, betValue] };
      handleUsers([...oldUsers, newUser]);
    }
  };
  console.log(users);
  return (
    <Container>
      <Typography component="h2" variant="h3" sx={{ marginBottom: "10px" }}>
        Crupier
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <FormControl sx={{ marginBottom: "10px" }}>
          <InputLabel htmlFor="user-label">Usuario</InputLabel>
          <Input
            id="user-label"
            type="text"
            onChange={(e) => setCurrentUser(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "10px" }}>
          <InputLabel
            htmlFor="bet-label"
            onChange={(e) => handleBet(e.target.value)}
          >
            Apuesta
          </InputLabel>
          <Input
            id="bet-label"
            type="number"
            onChange={(e) => {
              if (Number(e.target.value) > 0) handleBet(e.target.value);
            }}
          />
        </FormControl>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            handleBetting(currentUser, bet);
          }}
        >
          Apostar
        </Button>
      </Box>
    </Container>
  );
};

export default CrupierUI;
