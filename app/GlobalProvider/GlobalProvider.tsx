"use client"
import React, { createContext, useContext } from 'react'
import data from '../hooks/data';
export const Context = createContext<any | undefined>(null);
export default function GlobalProvider({children}:any) {
    const globalData = data();
  return (
    <Context.Provider value={globalData}>{children}</Context.Provider>
  )
}
export const useData = ()=> useContext(Context);