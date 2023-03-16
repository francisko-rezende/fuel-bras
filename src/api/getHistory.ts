import { type FuelConsumptionHistoryItem } from "@types";
import { axiosInstance } from "@lib/axios";

export const getHistory = async () => {
  const { data } = await axiosInstance.get<FuelConsumptionHistoryItem[]>(
    "fuel-consumption",
  );
  return data;
};
