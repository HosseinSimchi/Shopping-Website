"use client"

import React from 'react';

import {Header, Product} from "./importedFiles";

const Home = () => {

  const topic = "فروشگاه خرید لباس زنانه";
  const content = "در فروشگاه اینترنتی ما می توانید در کمترین زمان ممکن و با بهترین قیمت، قشنگترین لباس را بخرید"
  return (
    <>
      <Header topic={topic} content={content}/>
      <Product />
    </>
  )
}

export default Home;
