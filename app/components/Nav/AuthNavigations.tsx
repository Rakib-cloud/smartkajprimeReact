"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import {SplitButton} from "primereact/splitbutton";

export default function AuthNavigations({
  showSearchBar,
  setShowSearchBar,
}: any) {

  const [active, setActive] = useState<string>("\u09F3 BDT");
  const items = [
    {
      label: '\u09F3 BDT',
      icon: 'pi pi-refresh',
      command: () => {
        setActive("\u09F3 BDT")
      }
    },
    {
      label: '\u20B9 INR',
      icon: 'pi pi-times',
      command: () => {
        setActive("\u20B9 INR")
      }
    },
    {
      label: '\u0024 USD',
      icon: 'pi pi-external-link',
      command: () => {
        setActive("\u0024 USD")
      }
    }
  ];



  return (
    <ul className="flex items-center gap-x-4">
      {showSearchBar ? (
        <div className={""}>
          <div className={"grid grid-cols-12 py-5 w-full"}>
            <div className={"col-span-11 flex items-center"}>
              <BsSearch size={17} className="" />
              <input
                className={
                  "px-2 text-gray-800 focus:outline-0 w-full text-base"
                }
                placeholder={"Search"}
              />
            </div>

            <div className={"col-span-1 flex justify-end"}>
              <button onClick={() => setShowSearchBar(false)}>
                <RxCross2
                  size={20}
                  className="text-gray-600 hover:text-red-600 duration-400 transition-all"
                />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <li className="px-2 py-1.5 ">
            <button
              onClick={() => setShowSearchBar(!showSearchBar)}
              className="flex items-center"
            >
              <BsSearch size={17} className="mr-2" /> <span className='text-gray-700'>Search</span>
            </button>
          </li>
          <li className="">
            {/*<Dropdown className="min-w-unit-24 ">*/}
            {/*  <DropdownTrigger>*/}
            {/*    <span className="px-2 py-1.5 text-center text-[15px]  whitespace-nowrap rounded-full hover:text-secondary duration-250 transition-all w-20*/}
            {/*     cursor-pointer text-gray-700">*/}
            {/*      {active}*/}
            {/*    </span>*/}
            {/*  </DropdownTrigger>*/}
            {/*  <DropdownMenu aria-label="Dynamic Actions" items={items}>*/}
            {/*    {(item) => (*/}
            {/*      <DropdownItem*/}
            {/*        key={item.key}*/}
            {/*        onClick={() => setActive(item.label)}*/}
            {/*        className=""*/}
            {/*      >*/}
            {/*        {item.key}*/}
            {/*      </DropdownItem>*/}
            {/*    )}*/}
            {/*  </DropdownMenu>*/}
            {/*</Dropdown>*/}

            <SplitButton label={active} icon="pi pi-plus" model={items} severity="secondary" text />
          </li>
        </>
      )}
      <li className="px-2 py-1.5">
        <Link className="text-gray-700 text-base" href={"/auth/login"}>
          Login/Signup
        </Link>
      </li>
    </ul>
  );
}
