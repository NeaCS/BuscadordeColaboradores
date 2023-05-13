import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { BaseColaboradores } from "../database/data";



const SearchBar = ({onSearchChange}) => {
const [colaborador, setColaborador] = useState("");

const handleChange = (e) => {
    onSearchChange(e.target.value)
}



  return (
    <div
      flex-column
      sx={{ width: "75%", justifyContent: "center" }}
      style={{ marginTop: "5%" }}
    >
      <Typography variant="h4" color="initial">
        BUSCADOR DE COLABORADORES
      </Typography>
      <Box marginTop={3}>
        <TextField label="buscar" id="buscar" onChange={handleChange} />
        <Button sx={{marginTop: "0.5%", marginLeft: "2%"}} variant="contained">Buscar</Button>
      </Box>
    </div>
  );
};

export default SearchBar;
