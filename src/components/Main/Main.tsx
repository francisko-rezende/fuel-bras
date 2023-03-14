import { Button, Container, TextField, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { ResultCard } from "@components";
import { useFormik } from "formik";
import { useState } from "react";

export const Main = () => {

  const [avgConsumptionPerTon, setAvgConsumptionPerTon] = useState('')
  const [currentLicensePlate, setcurrentLicensePlate] = useState('')

  const fields = [
    { label: 'Placa', type: 'text', formikValue: 'licensePlate' },
    { label: 'Modelo', type: 'text', formikValue: 'model' },
    { label: 'Capacidade do tanque (litros)', type: 'number', formikValue: 'maxFuelCapacity' },
    { label: 'Carga máxima (toneladas)', type: 'number', formikValue: 'maxLoad' },
    { label: 'Consumo médio (litros por 100 quilômetros)', type: 'number', formikValue: 'averageFuelConsumption' },
    { label: 'Distância percorrida (quilômetros)', type: 'number', formikValue: 'traveledDistance' },
  ] as const

  const initialValues = {
    licensePlate: '',
    model: '',
    maxFuelCapacity: 0,
    maxLoad: 0,
    averageFuelConsumption: 0,
    traveledDistance: 0
  }

  const handleSubmit = (values: typeof initialValues) => {
    const { licensePlate,
      maxLoad,
      averageFuelConsumption,
      traveledDistance } = values

    const averageLoadByKm = maxLoad / (traveledDistance * 0.001)
    const averageFuelConsumptionByTonByKm = ((averageFuelConsumption / 100) * 1000) / (averageLoadByKm * 1000)
    const formattedAverageFuelConsumptionByTonByKm = new Intl.NumberFormat('pt-BR').format(averageFuelConsumptionByTonByKm)
    setAvgConsumptionPerTon(formattedAverageFuelConsumptionByTonByKm)
    setcurrentLicensePlate(licensePlate)
  }

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit
  })

  return (
    <Container component='main' sx={{ marginTop: '60px', display: 'flex', flexDirection: 'column', gap: '30px' }} maxWidth='sm'>
      <Typography variant="h2" component="h2" sx={{ fontSize: '2rem', fontFamily: 'Nunito Sans' }}>
        Novo cálculo
      </Typography>
      <ResultCard avgConsumptionPerTon={avgConsumptionPerTon} currentLicensePlate={currentLicensePlate} />
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} columns={1}>
          {fields.map(({ label, type, formikValue }) =>
            <Grid xs={8} key={label}>
              <TextField id={formikValue} name={formikValue} label={label} type={type} value={formik.values[formikValue]} onChange={formik.handleChange} fullWidth />
            </Grid>)}
        </Grid>
        <Button type="submit">Calcular</Button>
      </form>
    </Container>
  )
}
