"use client"
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'
export const session = false
export default function AuthRoute(Component:any) {
  return function Verified(props:any){
    useEffect(()=>{
      if(!session){
        redirect("/")
      }
    },[])
    if (!session) {
      return null
    }
    return <Component {...props}/>
  }
}
