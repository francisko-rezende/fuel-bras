import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { ResultCard } from "@components";
import { useAverageConsumptionForm } from "@hooks";

export const Main = () => {
  const { avgConsumptionPerTon, currentLicensePlate, fields, formik } =
    useAverageConsumptionForm();

  return (
    <Container
      component="main"
      sx={{
        marginTop: "60px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
      maxWidth="sm"
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{ fontSize: "2rem", fontFamily: "Nunito Sans" }}
      >
        Novo cálculo
      </Typography>

      <ResultCard
        avgConsumptionPerTon={avgConsumptionPerTon}
        currentLicensePlate={currentLicensePlate}
      />

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} columns={1}>
          {fields.map(({ label, type, formikValue }) => (
            <Grid xs={8} key={label}>
              <TextField
                placeholder={label === "Placa" ? "AAA0A00" : ""}
                id={formikValue}
                name={formikValue}
                label={label}
                type={type}
                value={formik.values[formikValue]}
                onChange={formik.handleChange}
                error={
                  Boolean(formik.touched[formikValue]) &&
                  Boolean(formik.errors[formikValue])
                }
                helperText={
                  Boolean(formik.touched[formikValue]) &&
                  formik.errors[formikValue]
                }
                fullWidth
              />
            </Grid>
          ))}
        </Grid>
        <Stack
          sx={{ marginBlockStart: "16px" }}
          direction="row"
          justifyContent="end"
        >
          <Button variant="contained" type="submit">
            Calcular
          </Button>
        </Stack>
      </form>
    </Container>
  );
};
