import React from "react";
import { Metadata } from "next";

import "./globals.css";
import { Chivo } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
export const metadata: Metadata = {
  title: "Bachata and More",
  description: "Eventkonzept für Bachata, Body & Mind and Workout",
};

const chivo = Chivo({ subsets: ["latin"] });

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={chivo.className}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
