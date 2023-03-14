
import { Card, Stack, CardContent, Typography } from '@mui/material';

interface ResultCardProps {
  avgConsumptionPerTon: string
  currentLicensePlate: string
}

export const ResultCard = ({ avgConsumptionPerTon, currentLicensePlate }: ResultCardProps) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography fontSize='1.5rem' component='h3' color="text.secondary" gutterBottom>
          Consumo médio {Boolean(currentLicensePlate) && `• ${currentLicensePlate}`}
        </Typography>
        <Stack direction='row' alignItems='baseline' gap='1rem'>
          <Typography fontSize='3rem'>
            {avgConsumptionPerTon}
          </Typography>
          <Typography fontSize='1.5rem' color="text.secondary">
            litros / toneladas
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}
