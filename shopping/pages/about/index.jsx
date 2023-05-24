import React from "react";

import { Header,Footer } from "../importedFiles";

const page = () => {

  const topic = "درباره ی ما";
  const content = "تمام چیزی که درباره ی ما بخواهید بدانید را در این صفحه می توانید پیدا کنید"
  return (
    <>
      <Header topic={topic} content={content} />
      <Footer />
    </>
  )
}

export default page;

