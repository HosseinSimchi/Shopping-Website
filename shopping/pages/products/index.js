import React from 'react';
import { Header,Footer } from '../importedFiles';

import dataJson from '../../data.json';
import styled from '@emotion/styled';

const Products = () => {
  
  return (
    <>
      <Header topic="محصولات ما" content= "می توانید بر روی هر یک از محصولات زیر کلیک کنید تا جزئیات هر یک را مشاهده کنید"/>
      <ProductsSection>
        <Container>
            {dataJson.map((item, index) => (
                <Card>
                  <Img src={`${item.ImgUTL}`} alt='ImageProduct' />
                  <H>{item.name}</H>
                  <P>{item.description}</P>
                  <A href={`/products/product/${index+1}`}>مشاهده محصول</A>
                </Card>
            ))}
        </Container>
      </ProductsSection>
      <Footer />
    </>
  )
} 

const ProductsSection = styled.section`
  margin-top : 10vh;
  width : 100%;
  height : 750px;
  background-color : rgba(0,0,0,0.1)
`

const Container = styled.div`
  padding-top : 10vh;
  width : 900px;
  height: 100%;
  margin : 70px auto;
  display : flex;
  flex-wrap : wrap;
  justify-content : center;
`

const Card = styled.div`
  background-color : rgba(0,0,0,0.3);
  padding : 10px;
  border : 3px dashed rgba(0,0,0,0.6);
  border-radius : 12px;
  text-align : center;
  width : 20%;
  height : 315px;
  margin : 2px 5px;
  transition : 0.5s ease-in-out;
  &:hover{
    width : 210px;
    height : 350px;
  }
  cursor :pointer;
`
const Img = styled.img `
  width : 100%;
  height : 60%;
  border-radius : 12px;
`
const H = styled.h4`
  font-size :14px;
`
const P = styled.p`
  font-size : 10px;
  margin-bottom:15px;
`

const A = styled.a`
  text-decoration : none;
  font-size : 12px;
  color : black;
  cursor : pointer;
  border : 2px dotted black;
  border-radius : 10px;
  padding : 5px;
  &:hover {
    opacity : 0.6;
  }
`
export default Products;




