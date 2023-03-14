import { validators } from "./validators";
import * as yup from "yup";

export const schemas = {
  fuelConsumptionCalculatorForm: yup.object({
    licensePlate: validators.licensePlate,
    model: validators.requiredString,
    maxFuelCapacity: validators.requiredPositiveNumber,
    maxLoad: validators.requiredPositiveNumber,
    averageFuelConsumption: validators.requiredPositiveNumber,
    traveledDistance: validators.requiredPositiveNumber,
  }),
};
