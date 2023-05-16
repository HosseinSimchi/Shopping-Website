'use client'

import React from "react"

import styled from '@emotion/styled';

const Products = () => {

  return (
    <>
      <ProductDiv>
        <Container>
          <ProducDesc>
            <h1>محصولات ما</h1>
            <p>برای دیدن لیست کامل محصولات، بر روی محصولات بیشتر کلیک کنید</p>
          </ProducDesc>
          <ProductImg>
            <Ul>
              <Li>
                <Img src="/Img/logo.png" alt="" />
              </Li>
              <Li>
                <Img src="/Img/logo.png" alt="" />
              </Li>
              <Li>
                <Img src="/Img/logo.png" alt="" />
              </Li>
              <Li>
                <Img src="/Img/logo.png" alt="" />
              </Li>
            </Ul>
            <Button>محصولات بیشتر</Button>
          </ProductImg>
        </Container>
      </ProductDiv>
    </>
  )
}

const ProductDiv = styled.section`
  position : absolute;
  top: 90vh;
  width : 100%;
  height : 375px;
  background-color : rgba(0,0,0,.2);
`
const Container = styled.div`
  width : 900px;
  height : 375px;
  margin : auto;
`

const ProducDesc = styled.div`
  width : 50%;
  height : 100%;
  float : right;
  text-align : center;
`

const ProductImg = styled.div`
  width : 50%;
  height : 100%;
  float : right;
  margin-top: 44px;
  text-align : center;
`

const Ul = styled.ul`
  width: 100%;
  list-style: none;
`

const Li = styled.li`
  width: 50%;
  float: right;
  text-align: center;
`

const Img = styled.img`
  width : 62%;
  cursor: pointer;
  &:hover{
    opacity: 0.4;
  }
`
const Button = styled.button`
  width : 35%;
  text-align: center;
  font-family: "Vazir";
  border : 2px dashed rgb(0,153,153);
  background-color : rgb(153,255,255);
  border-radius : 5px;
  cursor : pointer;
  &:hover{
    opacity : 0.8;
  }
`
export default Products;

