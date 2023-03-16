import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { type FuelConsumptionHistoryItem } from "@types";

const tableHeadings = [
  "Placa",
  "Consumo de Combustível (l / t)",
  "Modelo",
  "Carga Máxima (t)",
  "Consumo Médio (l / 100km)",
  "Distância (km)",
];

interface HistoryTableProps {
  rows: FuelConsumptionHistoryItem[];
}

export const HistoryTable = ({ rows }: HistoryTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Tabela das médias de consumo de combustível em litros por toneladas">
        <TableHead>
          <TableRow>
            {tableHeadings.map((heading) => (
              <TableCell sx={{ fontWeight: "bold" }} align="left" key={heading}>
                {heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(
            ({
              id,
              model,
              maxLoad,
              averageFuelConsumption,
              traveledDistance,
              licensePlate,
              formattedAverageFuelConsumptionByTonByKm,
            }) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {licensePlate}
                </TableCell>
                <TableCell align="left">
                  {formattedAverageFuelConsumptionByTonByKm}
                </TableCell>
                <TableCell align="left">{model}</TableCell>
                <TableCell align="left">{maxLoad}</TableCell>
                <TableCell align="left">{averageFuelConsumption}</TableCell>
                <TableCell align="left">{traveledDistance}</TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
