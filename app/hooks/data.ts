"use client";
import { useState } from "react"

export default function Data() {
    const data = "Uncover Your Talent, Embrace Opportunity"
    const [navActive,setNavActive] = useState(true)
  return {
    data,navActive,setNavActive
  }
}
