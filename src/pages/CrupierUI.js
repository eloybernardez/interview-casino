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
    // Search for the user in the users array
    const foundUser = users.find(
      (usr) => usr.user?.toLowerCase() === user.toLowerCase()
    );
    // If found, add the user's bet
    if (!foundUser) {
      handleUsers([...users, { user: user, points: 1000, bets: [betValue] }]);
    } else {
      // If not found, filter old users
      const oldUsers = users.filter(
        (usr) => usr.user?.toLowerCase() !== user.toLowerCase()
      );
      // Add the new user with the bet
      const newUser = { ...foundUser, bets: [...foundUser.bets, betValue] };
      // Update the users array
      handleUsers([...oldUsers, newUser]);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "30px",
        justifyContent: "space-evenly",
        height: "500px",
      }}
    >
      <Typography
        component="h2"
        variant="h3"
        sx={{ marginBottom: "10px", fontWeight: "600" }}
      >
        Crupier
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "space-evenly",
        }}
      >
        <FormControl sx={{ marginBottom: "20px" }} color="secondary">
          <InputLabel htmlFor="user-label" color="secondary">
            Usuario
          </InputLabel>
          <Input
            id="user-label"
            type="text"
            onChange={(e) => setCurrentUser(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "20px" }} color="secondary">
          <InputLabel
            htmlFor="bet-label"
            color="secondary"
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
          color="primary"
          sx={{ marginTop: "20px" }}
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
