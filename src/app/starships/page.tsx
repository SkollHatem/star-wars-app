"use client";
import { useCallback, useState } from "react";
import Link from "next/link";

// Components
import { ItemList, Loading } from "@atoms";
import { ListWithPagination } from "@molecules";

// Hooks
import { useStarships } from "@hooks";

export default function Starships() {
  const [page, setPage] = useState("1");
  const { data, isFetching } = useStarships.useGetStarships(page);
  const previousStarships = useStarships.useGetPreviousStarships(page);
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

  if (isFetching && !previousStarships) return <Loading />;

  return (
    <main className="h-full w-full overflow-hidden">
      <ListWithPagination
        title="starships"
        currentPage={page}
        totalPages={pages}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        showPrev={!!data?.previous?.length}
        showNext={!!data?.next?.length}
      >
        {data?.results.map((p, i) => (
          <Link href={`/starships/${p.url}`} key={i} scroll prefetch={false}>
            <ItemList
              title={p.name}
              labels={[
                {
                  title: "model",
                  value: p.model,
                },
                {
                  title: "pilots",
                  value: p.pilots.length.toString(),
                },
              ]}
            />
          </Link>
        ))}
      </ListWithPagination>
    </main>
  );
}
