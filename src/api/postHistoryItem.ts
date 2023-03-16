import { type FuelConsumptionHistoryItem } from "@types";
import { axiosInstance } from "@lib/axios";

export const postHistoryItem = (
  historyItem: Omit<FuelConsumptionHistoryItem, "id">,
) => {
  return axiosInstance.post("fuel-consumption", historyItem);
};
