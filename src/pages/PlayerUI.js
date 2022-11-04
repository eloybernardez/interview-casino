import React from "react";
import { Container, Box } from "@mui/system";
import { List, ListItem, ListItemText } from "@mui/material";

const PlayerUI = ({ user }) => {
  return (
    <Container>
      <Box>
        <p>Nombre: {user.user}</p>
        <p>Puntos: {user.points}</p>
        <List>
          Apuestas:
          {user.bets.map((bet, index) => (
            <ListItem key={`bet-${index + 1}`}>
              <ListItemText>{bet}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default PlayerUI;
