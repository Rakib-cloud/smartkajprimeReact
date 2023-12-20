"use client";
// import { Textarea } from "@/app/utils/interfaces";
// import React from "react";
//
// export default function NextTextArea({ name, placeholder,label, classes,rows=4,cols=50 }: Textarea) {
//   return (
//     <div>
//        {label && <label htmlFor="" className="text-sm text-gray-600 font-bold">{label}</label>}
//
//       <textarea
//         name={name}
//         placeholder={placeholder}
//         rows={rows}
//         cols={cols}
//         className={`p-3 bg-gray-100 w-full rounded-xl focus:outline-none focus:border-none text-sm ${classes}`}
//       />
//     </div>
//   );
// }
import { useField } from "formik";
import { Textarea } from "@/app/utils/interfaces";
import React from "react";

export default function NextTextArea({ label, ...props }: Textarea) {
  const [field, meta] = useField(props);

  return (
    <div>
      {label && (
        <label htmlFor={props.name} className="text-sm text-gray-600 font-bold">
          {label}
        </label>
      )}

      <textarea
        {...field}
        {...props}
        rows={4}
        cols={50}
        className={`p-3 bg-gray-100 w-full rounded-xl focus:outline-none focus:border-none text-sm ${
          meta.touched && meta.error ? "border-red-500" : "" // Add border color if there's an error
        }`}
      />
    </div>
  );
}
