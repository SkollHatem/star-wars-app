import urls from "./urls";

// Utils
import { fetcher, parseUrl } from "@utils";

// Interfaces
import { starshipsModels } from "@interfaces";

export const formatData = (data: starshipsModels.Starship) => {
  const { url, pilots } = data;
  const starshipUrlId = url?.split("starships/")[1].replace("/", "");

  const formatedData: starshipsModels.Starship = {
    ...data,
    url: starshipUrlId,
    pilots: pilots?.map((r) => {
      const peopleUrlId = r?.split("people/")[1].replace("/", "");
      return peopleUrlId;
    }),
  };

  return formatedData;
};

export const getStarshipsById =
  (id = "") =>
  async () => {
    const { data } = await fetcher.get<starshipsModels.Starship>(
      parseUrl(urls.STARSHIPS.get, { id })
    );
    return formatData(data);
  };
