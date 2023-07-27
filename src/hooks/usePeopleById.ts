import { useQueries, useQuery, useQueryClient } from "@tanstack/react-query";

// Services
import { peopleByIdService } from "src/services";

const KEY = "peopleById";
export const useGetPeopleById = (id: string) =>
  useQuery({
    queryKey: [KEY, id],
    queryFn: peopleByIdService.getPeopleById(id),
    keepPreviousData: true,
  });

export const useGetPreviousPeopleById = (id: string) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData([KEY, id]);
};

export const useGetManyPeopleById = (ids?: string[]) =>
  useQueries({
    queries: ids?.length
      ? ids.map((id) => ({
          queryKey: [KEY, id],
          queryFn: peopleByIdService.getPeopleById(id),
        }))
      : [],
  });
