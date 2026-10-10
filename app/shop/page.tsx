import type { Metadata } from "next";
import SpreadShop from "@/components/SpreadShop";

export const metadata: Metadata = {
  title: "Shop | Bachata and More",
  description: "Offizielle Bachata & More Produkte im Spreadshop.",
};

export default function ShopPage() {
  return (
    <div className="bg-white pt-28 pb-16 min-h-[70vh]">
      <div className="container px-4 mx-auto">
        <SpreadShop />
      </div>
    </div>
  );
}
