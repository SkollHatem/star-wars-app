import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

// Utils
import { Provider } from "@utils";

// Styles
import "./globals.css";

const geomanist = localFont({
  src: [
    {
      path: "../../public/fonts/geomanist-regular-webfont.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-geomanist",
});

const jaapokki = localFont({
  src: [
    {
      path: "../../public/fonts/jaapokki-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/jaapokkienchance-regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/jaapokkisubtract-regular.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-jaapokki",
});

export const metadata = {
  title: "Star Wars App",
  description:
    "Star Wars App - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero deleniti sint quod obcaecati minus corporis adipisci facere exercitationem consequuntur, autem quaerat incidunt voluptatum officia, nobis doloremque, amet aperiam dolor voluptatibus.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geomanist.variable} ${jaapokki.variable} bg-custom-black font-sans`}
    >
      <body className="flex min-h-screen flex-col sm:items-center sm:justify-center">
        <Provider>
          <div className="max:min-h-[740px] mx-auto min-h-screen w-full max-w-sm overflow-hidden overflow-y-auto overflow-x-hidden p-6 sm:min-h-[740px]">
            <header className="mb-10 flex w-full items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity=".4"
                  d="M17.54 8.81a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92Z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M6.46 8.81a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92ZM17.54 21.111a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92Z"
                  fill="#ffffff"
                ></path>
                <path
                  opacity=".4"
                  d="M6.46 21.111a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92Z"
                  fill="#ffffff"
                ></path>
              </svg>
              <Link href="/" id="logo">
                <Image
                  src="/images/logo.png"
                  width={50}
                  height={50}
                  alt="logo"
                />
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity=".4"
                  d="M11.01 20.02a9.01 9.01 0 1 0 0-18.02 9.01 9.01 0 0 0 0 18.02Z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M21.99 18.95c-.33-.61-1.03-.95-1.97-.95-.71 0-1.32.29-1.68.79-.36.5-.44 1.17-.22 1.84.43 1.3 1.18 1.59 1.59 1.64.06.01.12.01.19.01.44 0 1.12-.19 1.78-1.18.53-.77.63-1.54.31-2.15Z"
                  fill="#ffffff"
                ></path>
              </svg>
            </header>
            {children}
            <footer className="mb-1 mt-10">
              <p className="text-center text-xs text-custom-gray">
                Copyright @ {new Date().getFullYear()} Emmanuel Villegas
                <br /> All Rights Reserved.
              </p>
            </footer>
          </div>
        </Provider>
      </body>
    </html>
  );
}
