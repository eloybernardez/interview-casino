import React, { useState } from "react";
import { Container } from "@mui/system";
import {
  Input,
  FormControl,
  InputLabel,
  Button,
  Typography,
} from "@mui/material";
import useCrupierLogic from "../hooks/useCrupierLogic";

const CrupierUI = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [bet, setBet] = useState(0);
  const { handleBetting } = useCrupierLogic();

  const handleBet = (betValue) => {
    setBet(betValue);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginTop: "35px",
        height: "500px",
      }}
    >
      <Typography
        component="h2"
        variant="h3"
        sx={{ fontWeight: "600", fontFamily: "Archivo" }}
      >
        Crupier
      </Typography>

      <FormControl color="secondary">
        <InputLabel htmlFor="user-label" color="secondary">
          Usuario
        </InputLabel>
        <Input
          id="user-label"
          type="text"
          onChange={(e) => setCurrentUser(e.target.value)}
        />
      </FormControl>
      <FormControl sx={{ marginY: "20px" }} color="secondary">
        <InputLabel htmlFor="bet-label" color="secondary">
          Apuesta
        </InputLabel>
        <Input
          id="bet-label"
          type="number"
          onChange={(e) => {
            if (Number(e.target.value) > 0) handleBet(Number(e.target.value));
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
    </Container>
  );
};

export default CrupierUI;
