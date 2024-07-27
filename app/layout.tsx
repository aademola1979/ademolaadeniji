import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./module/header";
import Footer from "./module/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ademola Adeniji",
  description: "Ademola is an experienced software developer.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} root-layout !max-w-[100vw] bg-gray-50`}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
