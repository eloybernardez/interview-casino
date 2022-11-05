import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";

const PlayerUI = ({ user }) => {
  return (
    <Card
      sx={{
        width: "500px",
        marginY: "20px",
        backgroundColor: "dark.secondary",
        color: "white",
      }}
      variant="outlined"
    >
      <CardHeader title={user.user} />
      <CardContent>
        <Typography
          component="p"
          sx={{ fontWeight: "600", color: "primary.main" }}
        >
          Puntos:{" "}
          <Typography component="span" sx={{ color: "light.main" }}>
            {user.points}
          </Typography>
        </Typography>
        <List sx={{ display: "flex" }}>
          <Typography
            component="p"
            sx={{ fontWeight: "600", marginY: "10px", color: "primary.main" }}
          >
            Apuestas:
          </Typography>
          {user.bets.map((betObject, index) => (
            <ListItem key={`bet-${index + 1}`}>
              <ListItemText>${betObject.bet}</ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default PlayerUI;
