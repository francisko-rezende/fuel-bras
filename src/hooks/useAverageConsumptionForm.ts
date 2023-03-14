import { schemas } from "@/lib/yup";
import { useFormik } from "formik";
import { useState } from "react";

export const useAverageConsumptionForm = () => {
  const [avgConsumptionPerTon, setAvgConsumptionPerTon] = useState("");
  const [currentLicensePlate, setcurrentLicensePlate] = useState("");

  const fields = [
    { label: "Placa", type: "text", formikValue: "licensePlate" },
    { label: "Modelo", type: "text", formikValue: "model" },
    {
      label: "Capacidade do tanque (litros)",
      type: "number",
      formikValue: "maxFuelCapacity",
    },
    {
      label: "Carga máxima (toneladas)",
      type: "number",
      formikValue: "maxLoad",
    },
    {
      label: "Consumo médio (litros por 100 quilômetros)",
      type: "number",
      formikValue: "averageFuelConsumption",
    },
    {
      label: "Distância percorrida (quilômetros)",
      type: "number",
      formikValue: "traveledDistance",
    },
  ] as const;

  const initialValues = {
    licensePlate: "",
    model: "",
    maxFuelCapacity: 0,
    maxLoad: 0,
    averageFuelConsumption: 0,
    traveledDistance: 0,
  };

  const handleSubmit = (values: typeof initialValues) => {
    const { licensePlate, maxLoad, averageFuelConsumption, traveledDistance } =
      values;

    const averageLoadByKm = maxLoad / (traveledDistance * 0.001);
    const averageFuelConsumptionByTonByKm =
      ((averageFuelConsumption / 100) * 1000) / (averageLoadByKm * 1000);
    const formattedAverageFuelConsumptionByTonByKm = new Intl.NumberFormat(
      "pt-BR",
    ).format(averageFuelConsumptionByTonByKm);
    setAvgConsumptionPerTon(formattedAverageFuelConsumptionByTonByKm);
    setcurrentLicensePlate(licensePlate);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: schemas.fuelConsumptionCalculatorForm,
  });

  return {
    avgConsumptionPerTon,
    currentLicensePlate,
    fields,
    formik,
  };
};
