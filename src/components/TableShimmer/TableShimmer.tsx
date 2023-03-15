import { Container, Skeleton } from "@mui/material";

export const TableShimmer = () => {
  const shimmerAmount = Array(8).fill("");

  return (
    <Container
      component="main"
      sx={{
        marginTop: "60px",
      }}
    >
      <Skeleton width={150} height={80} />
      {shimmerAmount.map((_, index) => (
        <Skeleton key={index} height={60} />
      ))}
    </Container>
  );
};
