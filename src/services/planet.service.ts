import urls from "./urls";

// Utils
import { fetcher, parseUrl } from "@utils";

// Interfaces
import { planetsModels } from "@interfaces";

export const formatData = (data: planetsModels.PlanetsApi) => {
  const { next, previous, results } = data;
  const nextPageId = next?.split("page=")[1];
  const previousPageId = previous?.split("page=")[1];

  const formatedData: planetsModels.PlanetsApi = {
    ...data,
    next: nextPageId,
    previous: previousPageId,
    results: results?.map((r) => {
      const planetUrlId = r.url.split("planets/")[1].replace("/", "");

      return {
        ...r,
        url: planetUrlId,
      };
    }),
  };

  return formatedData;
};

export const getPlanets =
  (page = "") =>
  async () => {
    const { data } = await fetcher.get<planetsModels.PlanetsApi>(
      parseUrl(urls.PLANETS.getAll, { page })
    );
    return formatData(data);
  };
