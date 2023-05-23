"use client"

import React from "react";

import { Header } from "../importedFiles";

const page = () => {

  const topic = "تماس با ما";
  const content = "از طریق راه های زیر می توانید با ما در ارتباط باشید";
  return (
    <>
      <Header topic={topic} content={content}/>
    </>
  )
}

export default page;

