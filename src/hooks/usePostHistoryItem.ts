import { queryClient } from "@lib/react-query";
import { postHistoryItem } from "@api";
import { useMutation } from "@tanstack/react-query";

export const usePostHistoryItem = () => {
  const mutation = useMutation({
    mutationFn: postHistoryItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["history"] });
    },
  });

  return mutation;
};
