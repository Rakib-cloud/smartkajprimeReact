"use client";

export default function Text({ title, size = "mid", classes = null }: any) {
  const newSize =
    size === "ex-big"
      ? "text-5xl"
      : size === "big"
      ? "text-3xl"
      : size === "sm"
      ? "text-sm"
      : "text-lg";
  return (
    <h1 className={`${newSize} text-gray-700 font-semibold  ${classes}`}>
      {title}
    </h1>
  );
}
