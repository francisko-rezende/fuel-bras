import { type FuelConsumptionHistoryItem } from "@types";
import { Button, Container, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { HistoryTable } from "@components";

export const History = () => {
  const [history, setHistory] = useState<FuelConsumptionHistoryItem[]>([]);
  useEffect(() => {
    const localStorageHistory = localStorage.getItem("history");
    if (localStorageHistory != null) {
      const history: FuelConsumptionHistoryItem[] =
        JSON.parse(localStorageHistory);
      setHistory(history);
    }
  }, []);

  const handleResetHistory = () => {
    localStorage.clear();
    setHistory([]);
  };

  const isHistoryEmpty = history.length === 0;

  return (
    <Container
      component="main"
      sx={{
        marginTop: "60px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        overflow: "auto",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontSize: "2rem", fontFamily: "Nunito Sans" }}
        >
          Histórico
        </Typography>
        <Button
          variant="contained"
          disabled={isHistoryEmpty}
          onClick={handleResetHistory}
        >
          Limpar histórico
        </Button>
      </Stack>

      {history.length !== 0 && <HistoryTable rows={history} />}
    </Container>
  );
};
