import { getHistory } from "@api";
import { useQuery } from "@tanstack/react-query";

export const useHistory = () => {
  const historyQuery = useQuery({
    queryKey: ["history"],
    queryFn: getHistory,
    staleTime: Infinity,
  });

  return historyQuery;
};
