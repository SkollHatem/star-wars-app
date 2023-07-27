"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

// Components
import { CategoryHeader, ItemList, Loading } from "@atoms";
import { ListWithPagination } from "@molecules";

// Hooks
import { usePeopleById, usePlanetsById, useStarshipsById } from "@hooks";

export default function PeopleId() {
  const { id } = useParams();
  const { data, isFetching } = usePeopleById.useGetPeopleById(id);
  const previousPeople = usePeopleById.useGetPreviousPeopleById(id);

  const planets = usePlanetsById.useGetManyPlanetById([data?.homeworld || ""]);
  const starships = useStarshipsById.useGetManyStarshipsById(data?.starships);

  if (isFetching && !previousPeople) return <Loading />;

  return (
    <main className="h-full w-full overflow-hidden">
      <ListWithPagination
        title={data?.name}
        showPrev={false}
        showNext={false}
        showPagination={false}
      >
        <div className="space-y-4">
          <ItemList
            arrow={false}
            labels={[
              {
                title: "gender",
                value: data?.gender,
              },
              {
                title: "height",
                value: data?.height,
              },
              {
                title: "mass",
                value: data?.mass,
              },
            ]}
          />
          {!!planets.length && (
            <CategoryHeader title="Planet">
              {planets
                .map((r) => r.data)
                .map((p, i) => (
                  <Link
                    href={`/planets/${p?.url}`}
                    key={i}
                    scroll
                    prefetch={false}
                  >
                    <ItemList
                      title={p?.name + " / " + p?.climate}
                      labels={[
                        {
                          title: "diameter",
                          value: p?.diameter,
                        },
                        {
                          title: "residents",
                          value: p?.residents.length.toString(),
                        },
                      ]}
                    />
                  </Link>
                ))}
            </CategoryHeader>
          )}
          {!!starships.length && (
            <CategoryHeader title="starships">
              {starships
                .map((r) => r.data)
                .map((p, i) => (
                  <Link
                    href={`/starships/${p?.url}`}
                    key={i}
                    scroll
                    prefetch={false}
                  >
                    <ItemList
                      title={p?.name}
                      labels={[
                        {
                          title: "model",
                          value: p?.model,
                        },
                        {
                          title: "pilots",
                          value: p?.pilots.length.toString(),
                        },
                      ]}
                    />
                  </Link>
                ))}
            </CategoryHeader>
          )}
        </div>
      </ListWithPagination>
    </main>
  );
}
