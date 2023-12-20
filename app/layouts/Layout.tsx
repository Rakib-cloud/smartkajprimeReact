"use client";
import { PrimeReactProvider } from "primereact/api";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <PrimeReactProvider >
      {children}
      </PrimeReactProvider>
  );
}
