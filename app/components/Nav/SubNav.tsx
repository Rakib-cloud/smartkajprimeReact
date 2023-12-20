"use client";
import { categories } from "@/app/utils/staticData";
export default function SubNav() {
  return (
    <div className="border-t border-b ">
    <div className="container">
      <div className="flex items-center overflow-auto">
        {categories.slice(0,5).map((cat, i) => {
          return (
            <span key={i} className="text-xs my-2 mr-5 text-gray-600 whitespace-nowrap">
              {cat.title}
            </span>
          );
        })}
      </div>
    </div>
    </div>
  );
}
