import Image from "next/image";

interface CardProps {
  title: string;
  img: string;
}

export default function Card({ title, img }: CardProps) {
  return (
    <div className="flex w-full flex-col items-center space-y-4 rounded-3xl bg-custom-card p-5">
      <p className="text-center text-sm font-bold uppercase tracking-[3px] text-custom-darkGray mb-2">
        {title}
      </p>
      <Image
        src={img}
        width={80}
        height={80}
        alt="logo"
        className="opacity-60"
      />
    </div>
  );
}
