"use client"

import React from "react";

import { Header } from "../importedFiles";

const page = () => {

  const topic = "درباره ی ما";
  const content = "تمام چیزی که درباره ی ما بخواهید بدانید را در این صفحه می توانید پیدا کنید"
  return (
    <>
      <Header topic={topic} content={content} />
    </>
  )
}

export default page;

