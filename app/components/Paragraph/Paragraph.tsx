"use client";

export default function Paragraph({text,classes=""}:any) {
  return (
    <p className={`text-base text-gray-600 ${classes}`}>{text}</p>
  )
}
