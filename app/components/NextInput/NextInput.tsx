"use client";
import { Input } from "@/app/utils/interfaces";
import { Field } from "formik";
import React from "react";

export default function NextInput({ name, label,placeholder }: Input) {
  return (
    <div>
      {label && <label htmlFor="" className="text-sm text-gray-600 font-bold">{label}</label>}
      <Field
        placeholder={placeholder}
        name={name}
        className="p-3 bg-gray-100 w-full rounded-xl focus:outline-none text-sm"
      />
    </div>
  );
}
