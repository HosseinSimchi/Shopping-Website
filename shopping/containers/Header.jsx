import React from "react";

import Link from "next/link";

import styled from '@emotion/styled';
import { Container, Headers, Layover, Navbar } from "./importedFiles";

const Header = ({topic, content}) => {

  return (
    <>
      <Headers>
        <Layover>
            <Navbar>
              <Container>
                  <Container justifyContent="space-between" alignItems="center">
                      <NavbarRight>
                        <NavbarRightUl>
                          <Link href="/" style={{textDecoration:'none', color:"black"}}>
                            <NavbarRightLi className="navbarRight">صفحه اصلی</NavbarRightLi>
                          </Link>
                          <Link href="/products" style={{textDecoration:'none', color:"black"}}>
                            <NavbarRightLi className="navbarRight"> فروشگاه </NavbarRightLi>
                          </Link>
                          <Link href="/about" style={{textDecoration:'none', color:"black"}}>
                            <NavbarRightLi className="navbarRight">درباره ما</NavbarRightLi>
                          </Link>
                          <Link href="/contact" style={{textDecoration:'none', color:"black"}}>
                            <NavbarRightLi className="navbarRight">تماس با ما</NavbarRightLi>
                          </Link>
                        </NavbarRightUl>
                      </NavbarRight>
                      <NavbarLeft>
                        <NavbarLeftUl>
                          <NavbarLeftLi><I className="fas fa-phone"></I></NavbarLeftLi>
                          <NavbarLeftLi><I className="fa fa-telegram"></I></NavbarLeftLi>
                          <NavbarLeftLi><I className="fa fa-instagram"></I></NavbarLeftLi>
                          <NavbarLeftLi><I className="fa fa-envelope"></I></NavbarLeftLi>
                        </NavbarLeftUl>
                        <Img src="/Img/logo.png" alt="logoImg" />
                      </NavbarLeft>
                  </Container>
                  <DescHeader>
                    <H>{topic}</H>
                    <P>{content}</P>
                  </DescHeader>
              </Container>
            </Navbar>
        </Layover>
      </Headers>
    </>
  )
}


const NavbarRight = styled.div`
  display : flex;
`
const NavbarRightUl = styled.ul`
    display : flex;
    list-style : none;
    margin : 0 5px 0 5px;
`
const NavbarRightLi = styled.li`
  margin : 0 15px;
  font-size : 20px;
  font-weight : bold;
  cursor : pointer;
  &:hover {
    opacity : 0.4;
  }
  @media screen and (max-width: 768px) {
    font-size : 15px;
    margin : 0 10px;
  }
  @media screen and (max-width: 576px) {
    font-size : 10px;
    margin : 0 5px;
  }
  @media screen and (max-width: 400px) {
    font-size : 6px;
    margin : 0 2px;
  }
`

const NavbarLeft = styled.div`
    display: flex;
    align-items: center;
`

const NavbarLeftUl = styled.ul`
  display : flex;
  list-style : none;
  margin : 0 30px;
  @media screen and (max-width: 768px) {
    margin : 0 25px;
  }
  @media screen and (max-width: 576px) {
    margin : 0 20px;
  }
  @media screen and (max-width: 400px) {
    margin : 0 5px;
  }
`

const NavbarLeftLi = styled.li`
  margin : 0 7px;
  cursor : pointer;
  &:hover {
    opacity : 0.4;
  }
`


const Img = styled.img`
  width : 45px;
  cursor : pointer;
  &:hover {
    opacity : 0.4;
  }
`

const DescHeader = styled.div`
  position : absolute;
  top : 40%;
  right : 0;
  left : 0;
  text-align : center;

`

const H = styled.h1`
  font-size :35px;
  margin-bottom : 21px;
  opacity : 0.7;
  @media screen and (max-width: 768px) {
    font-size : 30px;
  }
`

const P = styled.p`
  font-size :20px;
  font-weight : bold;
  opacity : 0.7;
  @media screen and (max-width: 768px) {
    font-size : 15px;
  }
`
const I = styled.i``
export default Header;

