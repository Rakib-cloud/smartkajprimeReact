"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Logo } from "@/app/components/Logo/Logo";
import { loginSchema } from "@/app/schemas/loginSchema";
import { loginData } from "@/app/utils/interfaces";
import NextInput from "@/app/components/NextInput/NextInput";
import { Spinner, useDisclosure } from "@nextui-org/react";
import RegisterVerifyModal from "@/app/components/RegisterVerifyModal/RegisterVerifyModal";
import Text from "@/app/components/Text/Text";
import NextButton from "@/app/components/Button/Button";
import SmallText from "@/app/components/SmallText/SmallText";

export default function Register() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues = {
    email: "",
    password: "",
  };
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  async function onSubmit(formData: loginData) {
    setIsLoading(true);
    try {
      console.log(formData);
      if (formData.email === "admin@admin.com") {
        onOpen();
        console.log("yes-->11", 111);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  const modalData = {
    isOpen,
    onOpenChange,
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-[330px] p-4">
        <Logo />
        <Text title={"Sign Up"} size={"big"} classes={"mt-1"} />

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            onSubmit(values).then();
          }}
        >
          {({ errors, touched }) => (
            <Form className="mt-2">
              <div className="mb-2">
                <NextInput
                  placeholder="Type email Or Email"
                  name="email"
                />
                {touched.email && errors.email && (
                  <div className="text-red-400 text-xs mt-1">
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="my-4">
                <NextInput placeholder="Password" name="password" />
                {touched.password && errors.password && (
                  <div className="text-red-400 text-xs mt-1">
                    {errors.password}
                  </div>
                )}
              </div>

              <NextButton radius="xl" classes="w-full" title="Sign Up" types={"submit"}>
                {" "}
                {isLoading && <Spinner color="default" size="sm" />}
              </NextButton>
            </Form>
          )}
        </Formik>
        <br />
        <SmallText text="This site is protected by reCAPTCHA and the Google Privacy Policy."/>
        <p className="text-sm mt-4 text-gray-600">
          Already have an account? <Link className="underline" href={"/auth/login"}>Log In</Link>
        </p>
      </div>
      <RegisterVerifyModal modalData={modalData} />
    </div>
  );
}
