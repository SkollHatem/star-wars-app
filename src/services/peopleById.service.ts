import urls from "./urls";

// Utils
import { fetcher, parseUrl } from "@utils";

// Interfaces
import { peopleModels } from "@interfaces";

export const formatData = (data: peopleModels.People) => {
  const { url, homeworld, starships } = data;
  const peopleUrlId = url?.split("people/")[1].replace("/", "");
  const planetUrlId = homeworld?.split("planets/")[1].replace("/", "");

  const formatedData: peopleModels.People = {
    ...data,
    url: peopleUrlId,
    homeworld: planetUrlId,
    starships: starships?.map((r) => {
      const peopleUrlId = r?.split("starships/")[1].replace("/", "");
      return peopleUrlId;
    }),
  };

  return formatedData;
};

export const getPeopleById =
  (id = "") =>
  async () => {
    const { data } = await fetcher.get<peopleModels.People>(
      parseUrl(urls.PEOPLE.get, { id })
    );
    return formatData(data);
  };
