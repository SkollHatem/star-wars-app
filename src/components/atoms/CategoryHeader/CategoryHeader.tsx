import Image from "next/image";

interface CategoryHeaderProps {
  title: string;
  children: React.ReactNode;
}

export default function CategoryHeader({
  title,
  children,
}: CategoryHeaderProps) {
  return (
    <div className="flex flex-col divide-y divide-gray-100">
      <p className="text-2xl font-bold capitalize">{title}</p>
      {children}
    </div>
  );
}
