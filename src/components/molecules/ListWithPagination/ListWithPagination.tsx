interface ListWithPaginationProps {
  title?: string;
  showPagination?: boolean;
  showPrev?: boolean;
  showNext?: boolean;
  currentPage?: string;
  totalPages?: number;
  handlePreviousPage?: () => void;
  handleNextPage?: () => void;
  children: React.ReactNode;
}

export default function ListWithPagination({
  title,
  showPagination = true,
  showPrev,
  showNext,
  currentPage,
  totalPages,
  handlePreviousPage,
  handleNextPage,
  children,
}: ListWithPaginationProps) {
  return (
    <div className="h-full w-full">
      <h1 className="font-jaapokki text-5xl  font-medium uppercase">{title}</h1>
      <div className="flex flex-col divide-y divide-gray-100">{children}</div>
      {showPagination && (
        <div className="flex flex-1 items-center justify-between pt-8">
          <div className="w-1/3 text-center">
            {showPrev ? (
              <button
                id="prev"
                className="w-full max-w-xs rounded-md border border-gray-300 px-4 py-2 text-sm"
                onClick={handlePreviousPage}
              >
                Previous
              </button>
            ) : null}
          </div>
          <div className="w-1/3 text-center">
            <div className="flex items-center justify-center space-x-1">
              <p className="">{currentPage}</p>
              <div className="h-[1.5px] w-4 bg-custom-darkGray/40" />
              <p className="text-sm text-custom-darkGray/40">{totalPages}</p>
            </div>
          </div>
          <div className="w-1/3 text-center">
            {showNext ? (
              <button
                id="next"
                className="w-full max-w-xs rounded-md border border-gray-300 px-4 py-2 text-sm"
                onClick={handleNextPage}
              >
                Next
              </button>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
