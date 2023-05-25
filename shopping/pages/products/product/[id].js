import React from "react";

import { useRouter } from "next/router";

import {Header, Footer} from '../../importedFiles';
import styled from '@emotion/styled';

import dataJson from '../../../data.json';

const ProductDetails = () => {
  
  const {query, isReady} = useRouter();
  const {id} = query;

  return (
    <>
      {isReady ? <Header topic={`${dataJson[id-1].name}`} content={`${dataJson[id-1].description}`} /> : null}
      <Details>
        <Container>
            <Card>
              {isReady ? <Img src={`${dataJson[id-1].ImgUTL}`}/> : null}
              {isReady ? <H>{dataJson[id-1].name}</H> : null}
              {isReady ? <P>{dataJson[id-1].description}</P> : null}
            </Card>
        </Container>
      </Details>
      <Footer />
    </>
  )
}

const Details = styled.div`
  margin-top: 10vh;
  width : 100%;
  height : 800px;
`

const Container = styled.div`
  width : 900px;
  margin : auto;
  height : 100%;
`

const Card = styled.div`
  border : 4px dashed black;
  border-radius : 8px;
  width : 500px;
  height : 100%;
  margin : auto;
  background-color: rgba(0,0,0,0.1);
  display : flex;
  flex-direction : column;
`

const Img = styled.img`
  width : 300px;
  height : 300px;
  border-radius : 8px;
  margin : 10px auto;
`

const H = styled.h2`
  margin : 20px auto;
  font-size : 27px;
`

const P = styled.p`
  width : 250px;
  margin : 20px auto;
  text-align : center;
  line-height : 40px;
`

export default ProductDetails;


