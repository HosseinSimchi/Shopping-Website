import React from "react"

import styled from '@emotion/styled';

import Link from "next/link";

import {css, jsx} from "@emotion/react";

import { Container,Section, Layover, H1, P, Button, H4, Unorderlist, Li,
        Image} from "./importedFiles";

import dataJson from '../data.json';

const Products = () => {

  return (
    <>
      <Section marginTop='10vh' height="500px" position="relative">
            <Container justifyContent="space-between">
                <Section width="60%" textAlign="center" backgroundImage="url('/Img/about1.jpg')"
                  backgroundAttachment="fixed" position="absolute" top="0" right="0" 
                  bottom="0" left="40%"  backgroundRepeat="no-repeat" backgroundSize="cover" 
                >
                  <Layover>
                    <H1 fontSize="30px" fontWeight="bold" marginTop="160px"> نمونه محصولات پرفروش</H1>
                    <P margin="12px auto" lineHeight="35px" width="50%" fontSize="18px" css={css`

                    `}> در این بخش چهار نمونه از پرفروش ترین کارها را برایتان قرار داده ایم ولی میتوانید با کلیک بر روی دکمه زیر محصولات بیشتری را نیز مشاهده کنید</P>
                    <Link href="/products" style={{textDecoration:'none', color:'black'}}>
                      <Button href="#">دیدن محصولات بیشتر</Button>
                    </Link>
                  </Layover>
                </Section>
                <Section width="40%" position="absolute" top="0" left="0" right="60%" bottom="0">
                    <Unorderlist width="100%" flexWrap="wrap">
                      {dataJson.map((item, index) => (
                          index <= 3 ? (
                          <Li width="50%" margin="50px 0" textAlign="center" name="products">
                            <Link href={`/products/product/${index+1}`} style={{textDecoration:'none', color:"black"}}>
                                <Image src={`${item.ImgUTL}`} alt={`${index}`} width="100px" height="100px"/>
                                <H4>{item.name}</H4>
                                <P fontSize="20px">{item.value}</P>
                            </Link>
                          </Li>
                          )
                          :
                          null
                      ))}
                    </Unorderlist>
                </Section>
            </Container>
      </Section>
    </>
  )
}



export default Products;

