"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

// Components
import { CategoryHeader, ItemList, Loading } from "@atoms";
import { ListWithPagination } from "@molecules";

// Hooks
import { useStarshipsById, usePeopleById } from "@hooks";

export default function StarshipId() {
  const { id } = useParams();
  const { data, isFetching } = useStarshipsById.useGetStarshipsById(id);
  const previousStarship = useStarshipsById.useGetPreviousStarshipsById(id);

  const pilots = usePeopleById.useGetManyPeopleById(data?.pilots);

  if (isFetching && !previousStarship) return <Loading />;

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
                title: "model",
                value: data?.model,
              },
              {
                title: "class",
                value: data?.starship_class,
              },
            ]}
          />
          {!!pilots.length && (
            <CategoryHeader title="pilots">
              {pilots
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
