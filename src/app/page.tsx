"use client";
import Link from "next/link";

// Components
import { Card } from "@atoms";

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      opacity=".4"
      d="M19.072 19.821c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c3.61-3.61 3.61-9.48 0-13.08a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 4.19 4.19 4.19 11.01 0 15.2-.15.15-.34.22-.53.22ZM4.93 19.821c-.19 0-.38-.07-.53-.22-4.19-4.19-4.19-11.01 0-15.2.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06-3.61 3.61-3.61 9.48 0 13.08.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM11.999 22.712c-1.25-.01-2.44-.21-3.55-.6a.754.754 0 0 1-.46-.96c.14-.39.56-.6.96-.46.96.33 1.98.51 3.06.51 1.07 0 2.1-.18 3.05-.51.39-.13.82.07.96.46s-.07.82-.46.96c-1.12.39-2.31.6-3.56.6ZM15.3 3.34c-.08 0-.17-.01-.25-.04a9.399 9.399 0 0 0-6.109 0 .763.763 0 0 1-.96-.46c-.14-.39.07-.82.46-.96 1.11-.39 2.31-.59 3.55-.59 1.24 0 2.44.2 3.55.59.39.14.6.57.46.96-.1.31-.39.5-.7.5Z"
      fill="#ffffff"
    ></path>
    <path
      d="M8.738 12v-1.67c0-2.08 1.47-2.93 3.27-1.89l1.45.84 1.45.84c1.8 1.04 1.8 2.74 0 3.78l-1.45.84-1.45.84c-1.8 1.04-3.27.19-3.27-1.89V12Z"
      fill="#ffffff"
    ></path>
  </svg>
);

export default function Home() {
  return (
    <main className="w-full">
      <div className="space-y-3">
        <p className="text-[10px] text-xs uppercase tracking-[3.5px]">
          a galaxy under imperial rule
        </p>
        <h1 className="font-jaapokki text-7xl  font-medium uppercase">
          Become a Jedi
        </h1>
        <p className="text-xs text-custom-gray">
          a new third-person action-adventure from Respawn Entertament
        </p>
        <div className="flex items-center space-x-2 pt-4">
          <p className="text-sm uppercase tracking-[2px]">
            Watch the new trailer
          </p>
          <a href="#">
            <PlayIcon />
          </a>
        </div>
      </div>
      <div className="mt-10 flex flex-col space-y-4">
        <div className="flex space-x-4">
          <Link href="/people" className="w-full" prefetch={false} scroll>
            <Card title="people" img="/images/storm_trooper_by_radiusss.png" />
          </Link>
          <Link href="/planets" className="w-full" prefetch={false} scroll>
            <Card title="planets" img="/images/death_star_by_radiusss.png" />
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/starships" className="w-full" prefetch={false} scroll>
            <Card title="starships" img="/images/tie_fighter_by_radiusss.png" />
          </Link>
          <Link href="#" className="w-full" prefetch={false} scroll>
            <Card title="vehicles" img="/images/speeder_by_radiusss.png" />
          </Link>
        </div>
      </div>
    </main>
  );
}
