"use client";

export default function SmallText({text,classes=""}:any) {
  return (
    <p className={`text-sm text-gray-600 ${classes}`}>{text}</p>
  )
}
