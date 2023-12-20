"use client";
import { Image} from 'primereact/image';
import Link from "next/link";
import { useState } from "react";
import SubNav from "./SubNav";
import { HiBars3 } from "react-icons/hi2";
import NavItems from "./NavItems";
import AuthNavigations from "./AuthNavigations";
import { useData } from "@/app/GlobalProvider/GlobalProvider";

export default function Nav() {
  const { navActive, setNavActive } = useData();
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

  return (
    <section className="sticky top-0 z-50 bg-white">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-10 lg:col-span-7">
            <div className="grid grid-cols-12 gap-0 items-center">
              <div className="col-span-12 lg:col-span-3">
                <Link href={"/"}>
                  <Image alt="" src="/assets/logo.png" width="150" />
                </Link>
              </div>
              <div className="col-span-9">
                <NavItems />
              </div>
            </div>
          </div>
          <div className="col-span-2 flex justify-end lg:hidden">
            <button onClick={() => setNavActive(!navActive)}>
              <HiBars3 size={30} />
            </button>
          </div>
          <div className="col-span-5 hidden lg:flex justify-end">
            <AuthNavigations
              showSearchBar={showSearchBar}
              setShowSearchBar={setShowSearchBar}
            />
          </div>
        </div>
      </div>
      <SubNav />
    </section>
  );
}
