import { useState } from "react";
import "./App.css";
import SearchAppBar from "./components/SearchBar";
import { BaseColaboradores } from "./database/data";
import MyTable from "./components/MyTable";
import { Grid } from "@mui/material";
import { Grid3x3 } from "@mui/icons-material";
import AddColab from "./components/AddColab";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [searchTerm, setSearchTerm] = useState("");
  const [nombre, setNombre] = useState();
  const [correo, setCorreo] = useState();

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const agregarColaborador = (nombre1, correo1) => {
   
    let nuevoColaborador = {
      nombre: nombre1,
      correo: correo1,
    };
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  return (
    <Grid className="App" container>
      <Grid item xs={6} justifyContent={"center"}>
        <SearchAppBar onSearchChange={handleSearchChange} />
        <MyTable colaboradores={colaboradores} searchTerm={searchTerm} />
      </Grid>
      <Grid item xs={6}>
        <AddColab agregarColaborador={agregarColaborador} />
      </Grid>
    </Grid>
  );
}

export default App;
