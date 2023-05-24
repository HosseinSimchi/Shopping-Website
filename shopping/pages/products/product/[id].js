import React from "react";

import { useRouter } from "next/router";

import {Header, Footer} from '../../importedFiles';

const ProductDetails = () => {
  const router = useRouter();
  const {id} = router.query;
  
  return (
    <>
      <Header topic="f" content="f" />
      <Footer />
    </>
  )
}

export default ProductDetails;


