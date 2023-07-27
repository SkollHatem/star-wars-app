"use client";
import { useCallback, useState } from "react";
import Link from "next/link";

// Components
import { ItemList, Loading } from "@atoms";
import { ListWithPagination } from "@molecules";

// Hooks
import { usePeople } from "@hooks";

export default function People() {
  const [page, setPage] = useState("1");
  const { data, isFetching } = usePeople.useGetPeople(page);
  const previousPeople = usePeople.useGetPreviousPeople(page);
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

  if (isFetching && !previousPeople) return <Loading />;

  return (
    <main className="h-full w-full overflow-hidden">
      <ListWithPagination
        title="people"
        currentPage={page}
        totalPages={pages}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        showPrev={!!data?.previous?.length}
        showNext={!!data?.next?.length}
      >
        {data?.results.map((p, i) => (
          <Link
            href={`/people/${p.url}`}
            key={i}
            scroll
            prefetch={false}
            id={`people-${i}`}
          >
            <ItemList
              title={p.name}
              labels={[
                {
                  title: "height",
                  value: p.height,
                },
                {
                  title: "mass",
                  value: p.mass,
                },
              ]}
            />
          </Link>
        ))}
      </ListWithPagination>
    </main>
  );
}
