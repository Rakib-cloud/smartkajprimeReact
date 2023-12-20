import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export interface loginData {
  email: string;
  password: string;
}

export interface contactUsData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface Input {
  label?: string;
  placeholder?: string;
  name: string;
}

export interface Textarea {
  name: string;
  placeholder?: string;
  classes?: string;
  rows?: number;
  cols?: number;
  label?: string;
}

export interface SectionHeading {
  title: string;
  subTitle: string;
  link?: string;
  classes?: string;
}

export interface verifyModal {
  verify1: string;
  verify2: string;
  verify3: string;
  verify4: string;
  verify5: string;
}

export interface createUserName {
  user_Name: string;
}

export interface IBlogCard {
  id: number;
  img: string;
  title: string;
  date: string;
}

export interface ISeller {
  name: string;
  profile: string;
  cover: string;
  text: string;
  category: string;
  rating: number;
  projects: number;
}

export interface Review {
  name: string;
  country: string;
  rating: number;
  reviewText: string;
  monthsAgo: number;
  imageUrl: string;
}

export interface  Guide{
  id:number,
  image:string,
  title:string,
  text:string
}
