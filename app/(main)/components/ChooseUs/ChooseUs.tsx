"use client";
import { Image} from 'primereact/image';

import { Button } from 'primereact/button';
import React from "react";
import { BsCheckCircle } from "react-icons/bs";

export default function ChooseUs() {
  return (
    <section
      className="py-16 bg-gray-50"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
          <Image
            alt=""
            src="https://smart-kaj.vercel.app/static/media/choose.75fd9dfaeb2915b2bdfa.png"
            width="500"
            className="w-full hidden lg:block"
          />
          <div className="">
            <h1 className="text-4xl font-bold">Why People Choose Us?</h1>
            <p className="my-2">
              Grammar is essential for communication. It makes texts easier,
              clearer, and more enjoyable to read.
            </p>
            <ul className="my-8 space-y-4">
              <li className="flex items-center">
                <BsCheckCircle className="mr-2" />
                <p>Save jobs and searches.</p>
              </li>
              <li className="flex items-center">
                <BsCheckCircle className="mr-2" />
                <p>Apply direct from the job app.</p>
              </li>
              <li className="flex items-center">
                <BsCheckCircle className="mr-2" />
                <p>Get instant job notifications.</p>
              </li>
            </ul>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
