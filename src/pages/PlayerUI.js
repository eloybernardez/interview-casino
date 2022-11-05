import React from "react";
import { Container, Box } from "@mui/system";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const PlayerUI = ({ user }) => {
  return (
    <Container sx={{ marginTop: "30px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "",
        }}
      >
        <Typography component="p" sx={{ fontWeight: "600" }}>
          Nombre: <Typography component="span">{user.user}</Typography>
        </Typography>

        <Typography component="p" sx={{ fontWeight: "600" }}>
          Puntos: <Typography component="span">{user.points}</Typography>
        </Typography>
        <List>
          <Typography component="p" sx={{ fontWeight: "600", marginY: "10px" }}>
            Apuestas:
          </Typography>
          {user.bets.map((bet, index) => (
            <ListItem key={`bet-${index + 1}`}>
              <ListItemText>${bet}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default PlayerUI;
