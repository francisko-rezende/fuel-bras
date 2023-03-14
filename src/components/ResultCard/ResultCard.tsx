
import { Card, Stack, CardContent, Typography } from '@mui/material';

export const ResultCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography fontSize='1.5rem' component='h3' color="text.secondary" gutterBottom>
          Consumo médio • BRA2L20
        </Typography>
        <Stack direction='row' alignItems='baseline' gap='1rem'>
          <Typography fontSize='3rem'>
            Teste
          </Typography>
          <Typography fontSize='1.5rem' color="text.secondary">
            l / t / km
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}
