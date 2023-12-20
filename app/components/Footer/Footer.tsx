"use client";
import {
  footerItems,
  footerSocials,
} from "@/app/utils/staticData";
import React from "react";

export default function Footer() {
  return (
      <>
        <section style={{backgroundImage:`url('https://civi.uxper.co/wp-content/uploads/2023/01/bg-home-03-3.webp')`}} className="pt-8">
          <div className="container ">
            <div className={`rounded-t-xl`}>
              <h1 className="text-center text-gray-700 text-sm">Follow us on</h1>
              <div className="flex items-center justify-center mb-8 mt-4">
                {footerSocials.map((item,i) => {
                  return <span key={i} className="cursor-pointer mx-4">{item}</span>;
                })}
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-8 border-t border-b py-8">
                {footerItems.map(({ title, items }, i) => {
                  return (
                      <div key={i}>
                        <h1 className="text-xl text-gray-700 font-semibold mb-3">{title}</h1>
                        <ul>
                          {items.map((item, j) => {
                            return (
                                <li key={j} className="text-gray-600 text-sm mb-2 cursor-pointer hover:underline hover:font-medium transition-all duration-300">
                                  {item}
                                </li>
                            );
                          })}
                        </ul>
                      </div>
                  );
                })}
              </div>
              <div className="py-4 text-center">
                <p className="text-gray-500 text-sm">
                  All rights reserved by SmartKaj 2023
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*New Footer*/}
        <section className="pt-8 bg-primary">
          <div className="container ">
            <div className={`rounded-t-xl text-white`}>
              <h1 className="text-center  text-sm text-white">Follow us on</h1>
              <div className="flex items-center justify-center mb-8 mt-4">
                {footerSocials.map((item,i) => {
                  return <span key={i} className="cursor-pointer mx-4 text-white">{item}</span>;
                })}
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-8 border-t border-b py-8">
                {footerItems.map(({ title, items }, i) => {
                  return (
                      <div key={i}>
                        <h1 className="text-white text-xl mb-4">{title}</h1>
                        <ul>
                          {items.map((item, j) => {
                            return (
                                <li key={j} className="text-gray-200 hover:text-white hover:font-medium text-sm mb-2 cursor-pointer hover:underline transition-all duration-300">
                                  {item}
                                </li>
                            );
                          })}
                        </ul>
                      </div>
                  );
                })}
              </div>
              <div className="py-4 text-center">
                <p className="text-gray-100 text-sm">
                  All rights reserved by SmartKaj 2023
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}
