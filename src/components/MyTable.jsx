import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import * as React from 'react';



export default function MyTable(props) {
    const {searchTerm, colaboradores} = props
    const colaboradoresFiltrados = colaboradores.filter(colab=>colab.nombre === searchTerm)

    console.log(colaboradoresFiltrados)

    
  return (
    <TableContainer component={Paper} style={{width: "50%"}}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="right">Nombre</TableCell>
          <TableCell align="right">Correo</TableCell>
           </TableRow>
      </TableHead>
      <TableBody>
        {colaboradoresFiltrados.map((e, i) => (
          <TableRow
            key={i}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {e.id}
            </TableCell>
            <TableCell align="right">{e.nombre}</TableCell>
            <TableCell align="right">{e.correo}</TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
}