import { type FuelConsumptionHistoryItem } from "@types";
import { Container, Typography } from "@mui/material";
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
      <Typography
        variant="h2"
        component="h2"
        sx={{ fontSize: "2rem", fontFamily: "Nunito Sans" }}
      >
        Histórico
      </Typography>

      {history.length !== 0 && <HistoryTable rows={history} />}
    </Container>
  );
};
