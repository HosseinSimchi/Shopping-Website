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
  background-color : rgba(0,0,0,0.1);
  @media screen and (max-width: 576px) {
    height : 600px;
  }
  @media screen and (max-width: 400px) {
    height : 450px;
  }
`

const Container = styled.div`
  padding-top : 10vh;
  width : 80%;
  height: 100%;
  margin : 70px auto;
  display : flex;
  flex-wrap : wrap;
  justify-content : center;
  @media screen and (max-width: 576px) {
    margin : 50px auto;
  }
  @media screen and (max-width: 400px) {
    margin : 30px auto;
  }
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

  @media screen and (max-width: 768px) {
    width : 20%;
    height : 260px;
    &:hover{
      width : 150px;
      height : 270px;
    }
  }
  @media screen and (max-width: 576px) {
    width : 20%;
    height : 210px;
    &:hover{
      width : 100px;
      height : 230px;
    }
  }
  @media screen and (max-width: 400px) {
    width : 25%;
    height : 120px;
    &:hover{
      width : 85px;
      height : 130px;
    }
  }
`
const Img = styled.img `
  width : 100%;
  height : 60%;
  border-radius : 12px;
  @media screen and (max-width: 768px) {
    width : 80%;
    height : 40%;
    border-radius : 10px;
  }
  @media screen and (max-width: 400px) {
    width : 60%;
    height : 20%;
    border-radius : 6px;
  }
`
const H = styled.h4`
  font-size :14px;
  @media screen and (max-width: 768px) {
    font-size :10px;
  }
  @media screen and (max-width: 576px) {
    font-size : 8px;
  }
  @media screen and (max-width: 400px) {
    font-size : 6px;
  }
`
const P = styled.p`
  font-size : 10px;
  margin-bottom:15px;
  @media screen and (max-width: 992px) {
    font-size :8px;
  }
  @media screen and (max-width: 768px) {
    font-size :8px;
  }
  @media screen and (max-width: 576px) {
    font-size : 6px;
  }
  @media screen and (max-width: 400px) {
    font-size : 4px;
  }
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
  @media screen and (max-width: 576px) {
    font-size : 8px;
  }
  @media screen and (max-width: 400px) {
    font-size : 6px;
    padding : 2px;
  }
`
export default Products;




