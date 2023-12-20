"use client";
import React from "react";
import { BsSearch } from "react-icons/bs";


export default function SearchModal() {
  return (
    <>
      <button className="flex items-center">
        <BsSearch size={15} className="mr-2"/>
      </button>
      {/*<Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>*/}
      {/*  <ModalContent>*/}
      {/*    {(onClose) => (*/}
      {/*      <>*/}
      {/*        <ModalHeader className="flex flex-col gap-1">*/}
      {/*          Search for Service*/}
      {/*        </ModalHeader>*/}
      {/*        <ModalBody>*/}
      {/*          <div className="my-4 grid grid-cols-12 gap-4">*/}
      {/*            <div className="col-span-9">*/}
      {/*              <Input*/}
      {/*                radius="full"*/}
      {/*                size="md"*/}
      {/*                className="w-full bg-transparent"*/}
      {/*                placeholder="Find talented freelancer here"*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*            <div className="col-span-3">*/}
      {/*              <NextButton title="Search" classes="w-full"/>*/}
      {/*            </div>*/}
      {/*          </div>*/}

      {/*          /!* POPULAR SEARCHES AREA START FROM HERE  *!/*/}
      {/*          <div className="flex items-center">*/}
      {/*            <span className="text-gray-400">Popular Searches : </span>*/}
      {/*            <ul className="flex items-center ml-2">*/}
      {/*              <li>*/}
      {/*                <Link href={"#"}>Business Development</Link>*/}
      {/*              </li>*/}
      {/*              <li>*/}
      {/*                <Link href={"#"}>Data Management</Link>*/}
      {/*              </li>*/}
      {/*            </ul>*/}
      {/*          </div>*/}
      {/*        </ModalBody>*/}
      {/*        <ModalFooter>*/}
      {/*          <Button color="danger"  variant="light" onPress={onClose}>*/}
      {/*            Close*/}
      {/*          </Button>*/}
      {/*        </ModalFooter>*/}
      {/*      </>*/}
      {/*    )}*/}
      {/*  </ModalContent>*/}
      {/*</Modal>*/}
    </>
  );
}
