import { Container, TextField, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export const Main = () => {

  const fields = [
    { label: 'Placa', type: 'text' },
    { label: 'Modelo', type: 'text' },
    { label: 'Capacidade', type: 'number' },
    { label: 'Carga', type: 'number' },
    { label: 'Consumo', type: 'number' },
    { label: 'Distância', type: 'number' },
  ]

  return (
    <Container component='main' sx={{ marginTop: '60px', display: 'flex', flexDirection: 'column' }} maxWidth='sm'>
      <Typography variant="h2" component="h2" sx={{ fontSize: '2rem', fontFamily: 'Nunito Sans' }}>
        Novo cálculo
      </Typography>
      <form style={{ marginTop: '30px' }}>
        <Grid container spacing={2} columns={1}>
          {fields.map(({ label, type }) =>
            <Grid xs={8} key={label}>
              <TextField label={label} type={type} fullWidth />
            </Grid>)}
        </Grid>
      </form>
    </Container>
  )
}
