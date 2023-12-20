"use client";
import Link from "next/link";
import HoverItem from "./HoverItem";
import { TfiAngleDown } from "react-icons/tfi";
import { useData } from "@/app/GlobalProvider/GlobalProvider";
import { redirect, usePathname } from "next/navigation";
import { Button } from 'primereact/button';

export default function NavItems() {
  const { navActive } = useData();
  const path = usePathname();

  return (
    <div
      className={`bg-white lg:bg-transparent fixed h-[100vh] z-20 top-0 w-2/4 p-4 transition-all duration-200 lg:p-0 lg:w-full lg:h-auto lg:relative lg:block ${
        navActive ? "-left-full lg:left-0" : "left-0"
      }`}
    >
      <ul className="block lg:flex items-center text-gray-700">
        <li className="group py-1 lg:py-4">
          <Link className="flex items-center" href={"#"}>
             <span className={"whitespace-nowrap"}> Business solutions{" "}</span>
            <TfiAngleDown size={16} className="group-hover:rotate-180 ml-1" />
          </Link>
          <HoverItem />
        </li>
        <li className="ml-0 lg:ml-6 py-1 lg:py-4">
          <Link
            href={"/explore-all"}
            className={`${path === "/explore-all" && "text-secondary"}`}
          >
            Explore
          </Link>
        </li>

        <li className="ml-0 lg:ml-6 py-1 lg:py-4">
          <Link
            href={"/seller"}
            className={`${path === "/seller" && "text-secondary"} whitespace-nowrap`}
          >
            Become a Seller
          </Link>
        </li>

        <li className="ml-0 lg:ml-6  py-1 lg:py-4 ">
          <Button
            onClick={() => redirect("/")}
            size={"small"}
            rounded
            outlined
            className={"whitespace-nowrap"}
          >
            Corporate Deal
          </Button>
        </li>
      </ul>
    </div>
  );
}
