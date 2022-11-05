import React from "react";
import { Grid } from "@mui/material";

const PlayerList = ({ children }) => {
  return (
    <Grid container spacing={2} sx={{ justifyContent: "center" }}>
      {children}
    </Grid>
  );
};

export default PlayerList;
