import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { BaseColaboradores } from "../database/data";

const SearchBar = ({ onSearchChange }) => {
  const [colaborador, setColaborador] = useState("");

  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div
      flex-column
      sx={{ width: "75%", justifyContent: "center" }}
      style={{ paddingTop: "5%" }}
    >
      <Typography variant="h4" color="white" >
        BUSCADOR DE COLABORADORES
      </Typography>

      <Box marginTop={3}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={handleChange}
          InputProps={{ inputProps: { style: { background: "white" } } }}
          placeholder="Nombre del colaborador"
        />
      </Box>
    </div>
  );
};

export default SearchBar;
