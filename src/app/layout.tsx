import { Header } from "@/components/layout/Header";
import { Roboto } from "next/font/google";

import "./../styles/global.css"

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={roboto.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
