import { type fuelConsumptionData } from "@types";

export interface FuelConsumptionHistoryItem extends fuelConsumptionData {
  formattedAverageFuelConsumptionByTonByKm: string;
}
