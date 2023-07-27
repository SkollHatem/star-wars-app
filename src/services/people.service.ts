import urls from "./urls";

// Utils
import { fetcher, parseUrl } from "@utils";

// Interfaces
import { peopleModels } from "@interfaces";

export const formatData = (data: peopleModels.PeopleApi) => {
  const { next, previous, results } = data;
  const nextPageId = next?.split("page=")[1];
  const previousPageId = previous?.split("page=")[1];

  const formatedData: peopleModels.PeopleApi = {
    ...data,
    next: nextPageId,
    previous: previousPageId,
    results: results?.map((r) => {
      const peopleUrlId = r.url.split("people/")[1].replace("/", "");

      return {
        ...r,
        url: peopleUrlId,
      };
    }),
  };

  return formatedData;
};

export const getPeople =
  (page = "") =>
  async () => {
    const { data } = await fetcher.get<peopleModels.PeopleApi>(
      parseUrl(urls.PEOPLE.getAll, { page })
    );
    return formatData(data);
  };
