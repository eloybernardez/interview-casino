import React from "react";
import {
  TableRow,
  TableCell,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  Typography,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";

const PlayerUI = ({ user }) => {
  return (
    <Card
      sx={{
        width: "100%",
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
        <Typography
          component="p"
          sx={{
            fontWeight: "600",
            marginY: "10px",
            color: "primary.main",
            textAlign: "center",
          }}
        >
          Apuestas
        </Typography>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "primary.main" }}>Índice</TableCell>
                <TableCell sx={{ color: "primary.main" }} align="right">
                  Monto
                </TableCell>
                <TableCell sx={{ color: "primary.main" }} align="right">
                  Fecha
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.bets.map((bet, index) => (
                <TableRow key={`Bet-${index + 1}`}>
                  <TableCell sx={{ color: "light.main" }}>
                    {index + 1}
                  </TableCell>
                  <TableCell sx={{ color: "light.main" }} align="right">
                    ${bet.bet}
                  </TableCell>
                  <TableCell sx={{ color: "light.main" }} align="right">
                    {bet.date} {bet.hours}hr
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default PlayerUI;
