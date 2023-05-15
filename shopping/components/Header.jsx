'use client'

import React from "react";

import styled from '@emotion/styled';

const Header = () => {

  return (
    <>
        <SiteHeader>
            <Nav>
                  <Container>
                        <Ul>
                          <Li>صفحه اصلی</Li>
                          <Li>درباره ی ما</Li>
                          <Li>تماس با ما</Li>
                        </Ul>
                        <Logo>
                          <img src='' alt='' />
                        </Logo>
                  </Container>
              </Nav>
        </SiteHeader>
    </>
  )
}

const SiteHeader = styled.header `
  background-image: url("/Img/header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height : 80vh;
  width:100%;
`
const Container = styled.div `
  width : 1000px;
  margin : auto;
`

const Nav = styled.nav `
  background-color : rgba(0,0,0,0.5);
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
  color : #C1D0B5;
  font-size : 15px;
  cursor : pointer;
  &:hover{
    color : #99A98F;
  }
`

const Logo = styled.div `
  width: 50%;
  float : right;
  text-align : left;
`

export default Header;
