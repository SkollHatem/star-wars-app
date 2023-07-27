import { useQueries, useQuery, useQueryClient } from "@tanstack/react-query";

// Services
import { starshipsByIdService } from "src/services";

const KEY = "starshipsById";
export const useGetStarshipsById = (id: string) =>
  useQuery({
    queryKey: [KEY, id],
    queryFn: starshipsByIdService.getStarshipsById(id),
    keepPreviousData: true,
  });

export const useGetPreviousStarshipsById = (id: string) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData([KEY, id]);
};

export const useGetManyStarshipsById = (ids?: string[]) =>
  useQueries({
    queries: ids?.length
      ? ids.map((id) => ({
          queryKey: [KEY, id],
          queryFn: starshipsByIdService.getStarshipsById(id),
        }))
      : [],
  });
