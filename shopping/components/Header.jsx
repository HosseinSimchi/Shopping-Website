'use client'

import React from "react";

import Link from "next/link";

import styled from '@emotion/styled';

const Header = ({topic, content}) => {

  return (
    <>
        <SiteHeader>
          <LayoverHeader>
            <Nav>
                  <Container>
                        <Ul>
                          <Link href="/">
                            <Li>صفحه اصلی</Li>
                          </Link>
                          <Link href="/About">
                            <Li>درباره ی ما</Li>
                          </Link>
                          <Link href="/Contact">
                            <Li>تماس با ما</Li>
                          </Link>
                        </Ul>
                        <Logo>
                          <Img src='/Img/logo.png' alt='logoImage' />
                        </Logo>
                  </Container>
              </Nav>
              <HeaderDesc>
                <HeaderH2>{topic}</HeaderH2>
                <HeaderP>{content}</HeaderP>
              </HeaderDesc>
            </LayoverHeader>
        </SiteHeader>
    </>
  )
}

const SiteHeader = styled.header `
  position: relative;
  background-image: url("/Img/header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height : 80vh;
  width:100%;
`
const LayoverHeader = styled.div`
  background-color : rgba(204,255,153,0.3);
  position: absolute;
  top : 0;
  bottom: 0;
  left : 0;
  right : 0;
`
const Container = styled.div `
  width : 900px;
  margin : auto;
`

const Nav = styled.nav `
  background-color : rgba(153,255,255,0.2);
  width : 100%;
  height : 60px;
`
const Ul = styled.ul `
  width : 50%;
  height: 100%;
  float : right;
`

const Li = styled.li `
  display : inline-block;
  margin : 0 15px 0 15px;
  line-height: 4;
  color : #E6FFFD;
  font-size : 15px;
  cursor : pointer;
  &:hover{
    color : rgb(153,255,153);
  }
`

const Logo = styled.div `
  width: 50%;
  float : right;
  text-align : left;
`
const Img = styled.img `
    margin-top: 8px;
    width : 45px;
    height : 45px;
    float : left;
    cursor : pointer;
`

const HeaderDesc = styled.div `
  position : absolute;
  top : 40%;
  left : 0;
  right : 0;
  text-align : center;
  color : rgb(204,255,255);
`

const HeaderP = styled.p `
  font-size :28px;
  margin-top :15px;
`

const HeaderH2 = styled.h1``

export default Header;
