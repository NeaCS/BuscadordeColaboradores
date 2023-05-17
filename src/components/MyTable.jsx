import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as React from "react";

export default function MyTable(props) {
  const { searchTerm, colaboradores } = props;

  const colaboradoresFiltrados = colaboradores.filter((colab) => {
    const searchValue = searchTerm.toLowerCase();
    return (
      colab.nombre.toLowerCase().includes(searchValue) ||
      colab.correo.toLowerCase().includes(searchValue) 
    );
  });

  return (
      <TableContainer component={Paper} style={{marginTop:"10%"}}>
        <Table aria-label="simple table">
          <TableHead back>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Correo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {colaboradoresFiltrados.map((e, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {e.id}
                </TableCell>
                <TableCell align="center">{e.nombre}</TableCell>
                <TableCell align="center">{e.correo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}
