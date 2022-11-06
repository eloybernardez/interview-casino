import React from "react";
import { Grid } from "@mui/material";

const PlayerList = ({ children }) => {
  return (
    <Grid container sm={12} spacing={2} sx={{ placeItems: "center" }}>
      {children}
    </Grid>
  );
};

export default PlayerList;
