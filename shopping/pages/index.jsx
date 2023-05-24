import React from 'react';

import {Header, Product, Footer} from "./importedFiles";

const Home = () => {

  const topic = "فروشگاه خرید لباس زنانه";
  const content = "در فروشگاه اینترنتی ما می توانید در کمترین زمان ممکن و با بهترین قیمت، قشنگترین لباس را بخرید"
  return (
    <>
      <Header topic={topic} content={content}/>
      <Product />
      <Footer />
    </>
  )
}

export default Home;
