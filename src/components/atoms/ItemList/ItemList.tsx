import Image from "next/image";

interface ItemListProps {
  title?: string;
  arrow?: boolean;
  labels: {
    title: string;
    value?: string;
  }[];
}

export default function ItemList({
  title,
  labels,
  arrow = true,
}: ItemListProps) {
  return (
    <div className="flex w-full items-center justify-between py-5">
      <div className="min-w-0 flex-auto">
        {title?.length && (
          <p className="text-sm font-semibold leading-6">{title}</p>
        )}
        <div className="flex space-x-2">
          {labels.map((l, i) => (
            <p
              key={i}
              className="mt-1 text-xs capitalize leading-5 text-gray-500"
            >
              {l.title}:{" "}
              <span className="text-white">{l.value || "indexando"}</span>
            </p>
          ))}
        </div>
      </div>
      {arrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM8.5 12h6"
          ></path>
          <path
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12.5 15l3-3-3-3"
          ></path>
        </svg>
      )}
    </div>
  );
}
