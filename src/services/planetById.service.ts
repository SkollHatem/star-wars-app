import urls from "./urls";

// Utils
import { fetcher, parseUrl } from "@utils";

// Interfaces
import { planetsModels } from "@interfaces";

export const formatData = (data: planetsModels.Planet) => {
  const { url, residents } = data;
  const planetUrlId = url?.split("planets/")[1].replace("/", "");

  const formatedData: planetsModels.Planet = {
    ...data,
    url: planetUrlId,
    residents: residents?.map((r) => {
      const peopleUrlId = r?.split("people/")[1].replace("/", "");
      return peopleUrlId;
    }),
  };

  return formatedData;
};

export const getPlanetById =
  (id = "") =>
  async () => {
    const { data } = await fetcher.get<planetsModels.Planet>(
      parseUrl(urls.PLANETS.get, { id })
    );
    return formatData(data);
  };
