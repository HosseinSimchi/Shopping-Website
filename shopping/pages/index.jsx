import React from 'react';

import {Header} from "./importedFiles";

const Home = () => {

  const topic = "فروشگاه خرید انواع پاکت های مناسبتی";
  const content = "در فروشگاه اینترنتی ما می توانید در کمترین زمان ممکن و با بهترین قیمت، قشنگترین پاکت رو بخرید"
  return (
    <>
      <Header topic={topic} content={content}/>
    </>
  )
}

export default Home;
