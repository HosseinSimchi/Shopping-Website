"use client"

import React from "react"

import styled from '@emotion/styled';

import Link from "next/link";

const Products = () => {

  return (
    <>
      <Section>
            <Container>
                <SectionRight>
                  <Layover>
                    <HSectionRight> نمونه محصولات پرفروش</HSectionRight>
                    <PSectionRight> در این بخش چهار نمونه از پرفروش ترین کارها را برایتان قرار داده ایم ولی میتوانید با کلیک بر روی دکمه زیر محصولات بیشتری را نیز مشاهده کنید</PSectionRight>
                    <Link href="/products" style={{textDecoration:'none', color:'black'}}>
                      <A href="#">دیدن محصولات بیشتر</A>
                    </Link>
                  </Layover>
                </SectionRight>
                <SectionLeft>
                    <Ul>
                      <Li>
                        <Link href="/products/product/1" style={{textDecoration:'none', color:"black"}}>
                            <Img src="Img/pr1.jpg" />
                            <H>ست بافتنی زنانه</H>
                            <P>2 میلیون تومان </P>
                        </Link>
                      </Li>
                      <Li>
                        <Link href="/products/product/2" style={{textDecoration:'none', color:"black"}}>
                          <Img src="Img/pr2.jpg" />
                          <H>ست خانگی زنانه</H>
                          <P>1 میلیون تومان</P>
                        </Link>
                      </Li>
                      <Li>
                        <Link href="/products/product/3" style={{textDecoration:'none', color:"black"}}>
                          <Img src="Img/pr3.jpg" />
                          <H>ست دخترانه</H>
                          <P>1 میلیون تومان</P>
                        </Link>
                      </Li>
                      <Li>
                        <Link href="/products/product/4" style={{textDecoration:'none', color:"black"}}>
                          <Img src="Img/pr4.jpg" />
                          <H>ست دخترانه بزرگسال</H>
                          <P>2 میلیون تومان</P>
                        </Link>
                      </Li>
                    </Ul>
                </SectionLeft>
            </Container>
      </Section>
    </>
  )
}

const Section = styled.section`
  margin-top : 10vh;
  height : 500px;
  position : relative;
`

const Container = styled.div`
  display : flex;
  width : 900px;
  height : 100%;
  margin : auto;
  justify-content : space-between;
`

const Layover = styled.div`
  position : absolute;
  top : 0;
  right:0;
  bottom:0;
  left: 0;
  background-color : rgba(255,255,255,0.85);
`
const SectionRight = styled.div`
  width : 60%;
  text-align : center;
  background-image : url("Img/about1.jpg");
  background-repeat : no-repeat;
  background-size : cover;
  position: absolute;
  top : 0;
  right:0;
  bottom:0;
  left:40%;
`
const SectionLeft = styled.div`
  width : 40%;
  position: absolute;
  top : 0;
  bottom: 0;
  left: 0;
  right: 60%;
`

const Ul = styled.ul`
  width : 100%;
  list-style: none;
  display : flex;
  flex-wrap : wrap;
`
const Li = styled.li`
  width : 50%;
  margin : 50px 0;
  text-align : center;
  cursor : pointer;
  &:hover{
    opacity : 0.5;
  }
`

const Img = styled.img`
  width : 100px;
  height : 100px;
`
const A = styled.a`
  text-decoration : none;
  color : black;
  opacity : 0.6;
  cursor : pointer;
  border : 2px dotted black;
  border-radius : 10px;
  padding : 5px;
  &:hover {
    opacity : 1;
  }
`
const PSectionRight = styled.p`
  margin-bottom :20px;
  font-size : 20px;
  width: 290px;
  line-height : 35px;
  margin: 12px auto;
`

const HSectionRight = styled.h1`
  margin-top : 160px;
  font-size : 30px;
  font-weight : bold;
`

const H = styled.h4``;
const P = styled.p``;
export default Products;

