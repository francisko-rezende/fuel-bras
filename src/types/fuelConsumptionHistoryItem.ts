import { type fuelConsumptionData } from "@types";

export interface FuelConsumptionHistoryItem extends fuelConsumptionData {
  id: number;
  formattedAverageFuelConsumptionByTonByKm: string;
}
