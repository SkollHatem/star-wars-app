import { useQuery, useQueryClient } from "@tanstack/react-query";

// Services
import { peopleService } from "src/services";

const KEY = "people";
export const useGetPeople = (page?: string) =>
  useQuery({
    queryKey: [KEY, page],
    queryFn: peopleService.getPeople(page),
    keepPreviousData: true,
  });

export const useGetPreviousPeople = (page?: string) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData([KEY, page]);
};
