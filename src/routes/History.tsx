import { Container, Typography } from "@mui/material";
import { HistoryTable, TableShimmer } from "@components";
import { useHistory } from "@hooks";

export const History = () => {
  const { data, isError, isLoading } = useHistory();

  if (isLoading) return <TableShimmer />;

  if (isError) return <p>Houve um erro, tente novamente mais tarde.</p>;

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
      {history.length !== 0 && <HistoryTable rows={data} />}
    </Container>
  );
};
