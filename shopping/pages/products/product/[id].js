import React from "react";

import { useRouter } from "next/router";

import {Header, Footer} from '../../importedFiles';

import dataJson from '../../../data.json';
import { Section, Container, Card, Image, P, H2 } from "@/containers/importedFiles";

const ProductDetails = () => {
  
  const {query, isReady} = useRouter();
  const {id} = query;

  return (
    <>
      {isReady ? <Header topic={`${dataJson[id-1].name}`} content={`${dataJson[id-1].description}`} /> : null}
      <Section width="100%" height="800px" marginTop="10vh" responsiveHeight7="700px">
        <Container margin='auto' width="80%" height="100%">
            <Card width='500px' height='100%' margin='auto' resWidth4='300px' resWidth7='350px' resHeight4='70%' resHeight7='80%'>
              {isReady ? <Image resWidth4="250px" resHeight4="250px" margin="10px auto" borderRadius="8px" width='300px' height="300px" src={`${dataJson[id-1].ImgUTL}`} alt="detailedImage"/> : null}
              {isReady ? <H2 margin="20px auto" fontSize="20px" responsiveMargin4="15px auto">{dataJson[id-1].name}</H2> : null}
              {isReady ? <P width="250px" margin="20px auto" textAlign="center" lineHeight="20px">{dataJson[id-1].description}</P> : null}
            </Card>
        </Container>
      </Section>
      <Footer />
    </>
  )
}




export default ProductDetails;


