import { useQueries, useQuery, useQueryClient } from "@tanstack/react-query";

// Services
import { planetByIdService } from "src/services";

const KEY = "planetById";
export const useGetPlanetById = (id: string) =>
  useQuery({
    queryKey: [KEY, id],
    queryFn: planetByIdService.getPlanetById(id),
    keepPreviousData: true,
  });

export const useGetPreviousPlanetById = (id: string) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData([KEY, id]);
};

export const useGetManyPlanetById = (ids?: string[]) =>
  useQueries({
    queries: ids?.length
      ? ids.map((id) => ({
          queryKey: [KEY, id],
          queryFn: planetByIdService.getPlanetById(id),
        }))
      : [],
  });
