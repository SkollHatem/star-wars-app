"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

// Components
import { CategoryHeader, ItemList, Loading } from "@atoms";
import { ListWithPagination } from "@molecules";

// Hooks
import { usePlanetsById, usePeopleById } from "@hooks";

export default function PlanetId() {
  const { id } = useParams();
  const { data, isFetching } = usePlanetsById.useGetPlanetById(id);
  const previousPlanet = usePlanetsById.useGetPreviousPlanetById(id);

  const residents = usePeopleById.useGetManyPeopleById(data?.residents);

  if (isFetching && !previousPlanet) return <Loading />;

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
                title: "climate",
                value: data?.climate,
              },
              {
                title: "diameter",
                value: data?.diameter,
              },
              {
                title: "population",
                value: data?.population,
              },
            ]}
          />
          {!!residents.length && (
            <CategoryHeader title="residents">
              {residents
                .map((r) => r.data)
                .map((p, i) => (
                  <Link
                    href={`/people/${p?.url}`}
                    key={i}
                    scroll
                    prefetch={false}
                  >
                    <ItemList
                      title={p?.name}
                      labels={[
                        {
                          title: "height",
                          value: p?.height,
                        },
                        {
                          title: "mass",
                          value: p?.mass,
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
