"use client";
import { useCallback, useState } from "react";
import Link from "next/link";

// Components
import { ItemList, Loading } from "@atoms";
import { ListWithPagination } from "@molecules";

// Hooks
import { usePlanets } from "@hooks";

export default function Planets() {
  const [page, setPage] = useState("1");
  const { data, isFetching } = usePlanets.useGetPlanets(page);
  const previousPlanets = usePlanets.useGetPreviousPlanets(page);
  const pages = data?.count ? Math.ceil(data?.count / 10) : 1;

  const handleNextPage = useCallback(() => {
    if (data?.next) {
      setPage(data?.next);
    }
  }, [data?.next]);

  const handlePreviousPage = useCallback(() => {
    if (data?.previous) {
      setPage(data?.previous);
    }
  }, [data?.previous]);

  if (isFetching && !previousPlanets) return <Loading />;

  return (
    <main className="h-full w-full overflow-hidden">
      <ListWithPagination
        title="planets"
        currentPage={page}
        totalPages={pages}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        showPrev={!!data?.previous?.length}
        showNext={!!data?.next?.length}
      >
        {data?.results.map((p, i) => (
          <Link href={`/planets/${p.url}`} key={i} scroll prefetch={false}>
            <ItemList
              title={`${p.name} / ${p.climate}`}
              labels={[
                {
                  title: "diameter",
                  value: p.diameter,
                },
                {
                  title: "residents",
                  value: p.residents.length.toString(),
                },
              ]}
            />
          </Link>
        ))}
      </ListWithPagination>
    </main>
  );
}
