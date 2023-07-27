import { useQuery, useQueryClient } from "@tanstack/react-query";

// Services
import { planetsService } from "src/services";

const KEY = "planets";
export const useGetPlanets = (page?: string) =>
  useQuery({
    queryKey: [KEY, page],
    queryFn: planetsService.getPlanets(page),
    keepPreviousData: true,
  });

export const useGetPreviousPlanets = (page?: string) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData([KEY, page]);
};
