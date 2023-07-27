import { useQuery, useQueryClient } from "@tanstack/react-query";

// Services
import { starshipsService } from "src/services";

const KEY = "starships";
export const useGetStarships = (page?: string) =>
  useQuery({
    queryKey: [KEY, page],
    queryFn: starshipsService.getStarships(page),
    keepPreviousData: true,
  });

export const useGetPreviousStarships = (page?: string) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData([KEY, page]);
};
