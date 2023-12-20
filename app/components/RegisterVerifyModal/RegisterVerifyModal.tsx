"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spinner,
} from "@nextui-org/react";

import NextInput from "@/app/components/NextInput/NextInput";
import { createUserName, verifyModal } from "@/app/utils/interfaces";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";

export default function RegisterVerifyModal({ modalData }: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [openVerify, setOpenVerify] = useState<boolean>(true);
  const { isOpen, onOpenChange } = modalData;
  const router = useRouter();

  const initialValues = {
    verify1: "",
    verify2: "",
    verify3: "",
    verify4: "",
    verify5: "",
  };

  const userNameInit = {
    user_Name: "",
  };

  async function onSubmit(formData: verifyModal) {
    setIsLoading(true);
    try {
      console.log(formData);
      if (formData.verify1 === "1") {
        setOpenDetails(!openDetails);
        setOpenVerify(false);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  async function myFunction(formData: createUserName) {
    setIsLoading(true);
    try {
      if (formData.user_Name === "admin") {
        router.push("/");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Confirm Your Email
                {/* Get your profile started */}
              </ModalHeader>
              <ModalBody>
                {openVerify && (
                  <>
                    <p>
                      Enter the verification code we emailed to:{" "}
                      <span>email address name</span>
                    </p>
                    <Formik
                      initialValues={initialValues}
                      onSubmit={(values) => {
                        onSubmit(values).then();
                      }}
                    >
                      <Form>
                        <div className="mb-4 flex gap-x-2">
                          <NextInput name="verify1" />
                          <NextInput name="verify2" />
                          <NextInput name="verify3" />
                          <NextInput name="verify4" />
                          <NextInput name="verify5" />
                        </div>

                        <Button
                          className="w-full bg-blue-600 text-white"
                          type="submit"
                        >
                          verify{" "}
                          {isLoading && <Spinner color="default" size="sm" />}
                        </Button>
                      </Form>
                    </Formik>
                  </>
                )}

                {openDetails && (
                  <>
                    <p className="text-base">
                      Add a user name that&apos;s unique to you this is how will
                      appear to other
                    </p>
                    <p className="font-medium text-sm">
                      you can&apos;t change your user name, so choose wisely
                    </p>
                    <Formik
                      initialValues={userNameInit}
                      // validationSchema={loginSchema}
                      onSubmit={(values) => {
                        myFunction(values).then();
                      }}
                    >
                      {({ errors, touched }) => (
                        <Form>
                          <div className="mb-4">
                            <NextInput
                              placeholder="Type Username"
                              name="user_Name"
                            />
                            {touched.user_Name && errors.user_Name && (
                              <div className="text-red-400 text-xs mt-1">
                                {errors.user_Name}
                              </div>
                            )}
                          </div>

                          <Button
                            className="w-full bg-blue-600 text-white"
                            type="submit"
                          >
                            Start exploring
                            {isLoading && <Spinner color="default" size="sm" />}
                          </Button>
                        </Form>
                      )}
                    </Formik>
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
