import urls from "./urls";

// Utils
import { fetcher, parseUrl } from "@utils";

// Interfaces
import { starshipsModels } from "@interfaces";

export const formatData = (data: starshipsModels.StarshipssApi) => {
  const { next, previous, results } = data;
  const nextPageId = next?.split("page=")[1];
  const previousPageId = previous?.split("page=")[1];

  const formatedData: starshipsModels.StarshipssApi = {
    ...data,
    next: nextPageId,
    previous: previousPageId,
    results: results?.map((r) => {
      const starshipUrlId = r.url.split("starships/")[1].replace("/", "");

      return {
        ...r,
        url: starshipUrlId,
      };
    }),
  };

  return formatedData;
};

export const getStarships =
  (page = "") =>
  async () => {
    const { data } = await fetcher.get<starshipsModels.StarshipssApi>(
      parseUrl(urls.STARSHIPS.getAll, { page })
    );
    return formatData(data);
  };
