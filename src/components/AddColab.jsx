import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AddColab = ({ agregarColaborador }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const agregarColaboradorAdd = (e) => {
    e.preventDefault();
    agregarColaborador(nombre, correo);
     setNombre("");
    setCorreo(""); 
  };
  return (
    <div
      flex-column
      sx={{ width: "75%", justifyContent: "center" }}
      style={{ paddingTop: "5%" }}
    >
      <Typography variant="h4" color="initial">
        AGREGAR UN COLABORADOR
      </Typography>
      <Box marginTop={3}>
        {" "}
        <TextField
          InputProps={{ inputProps: { style: { background: "white" } } }}
          id="outlined-basic"
          variant="outlined"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
        />
        <TextField
        style={{marginLeft:"3%"}}
          InputProps={{ inputProps: { style: { background: "white" } } }}
          id="outlined-basic"
          variant="outlined"
          value={correo}
          placeholder="Correo"
          onChange={(e) => setCorreo(e.target.value)}
        />
        <Button
          onClick={agregarColaboradorAdd}
          sx={{ marginTop: "0.7%", marginLeft: "2%" }}
          variant="contained"
        >
          Agregar
        </Button>
      </Box>
    </div>
  );
};

export default AddColab;
