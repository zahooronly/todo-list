// "use client";
import Nav from "@/component/Nav/nav";
import "./globals.css";
// import { useRouter } from "next/router";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router = useRouter();
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
