const AllUrls = {
  PEOPLE: {
    getAll: "/people/?page={page}",
    get: "/people/{id}",
  },
  PLANETS: {
    getAll: "/planets/?page={page}",
    get: "/planets/{id}",
  },
  STARSHIPS: {
    getAll: "/starships/?page={page}",
    get: "/starships/{id}",
  },
} as const;

export type AllUrls = keyof typeof AllUrls;

export default AllUrls;
