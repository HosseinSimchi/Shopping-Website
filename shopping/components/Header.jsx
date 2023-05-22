import React from "react";

import Link from "next/link";

import styled from '@emotion/styled';

const Header = ({topic, content}) => {

  return (
    <>
      <HeaderTag>
        <Transparent>
            <Nav>
              <Container>
                  <Navbar>
                      <NavbarRight>
                        <NavbarRightUl>
                          <Link href="/" style={{textDecoration:'none', color:"black"}}>
                            <NavbarRightLi>صفحه اصلی</NavbarRightLi>
                          </Link>
                          <Link href="/products" style={{textDecoration:'none', color:"black"}}>
                            <NavbarRightLi> فروشگاه </NavbarRightLi>
                          </Link>
                          <Link href="/about" style={{textDecoration:'none', color:"black"}}>
                            <NavbarRightLi>درباره ما</NavbarRightLi>
                          </Link>
                          <Link href="/contact" style={{textDecoration:'none', color:"black"}}>
                            <NavbarRightLi>تماس با ما</NavbarRightLi>
                          </Link>
                        </NavbarRightUl>
                      </NavbarRight>
                      <NavbarLeft>
                        <NavbarLeftUl>
                          <NavbarLeftLi><i class="fas fa-phone"></i></NavbarLeftLi>
                          <NavbarLeftLi><i class="fa fa-telegram"></i></NavbarLeftLi>
                          <NavbarLeftLi><i class="fa fa-instagram"></i></NavbarLeftLi>
                          <NavbarLeftLi><i class="fa fa-envelope"></i></NavbarLeftLi>
                        </NavbarLeftUl>
                        <Img src="Img/logo.png" alt="logoImg" />
                      </NavbarLeft>
                  </Navbar>
                  <DescHeader>
                    <H>{topic}</H>
                    <P>{content}</P>
                  </DescHeader>
              </Container>
            </Nav>
        </Transparent>
      </HeaderTag>
    </>
  )
}

const HeaderTag = styled.header`
  background-image: url("Img/header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 80vh;
  position: relative;
`

const Transparent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255,255,255,.8);
`
const Nav = styled.nav`
  width: 100%;
  height: 70px;
  background-color: rgba(0,0,0,.1);
`

const Container = styled.div`
  display : flex;
  width : 900px;
  height : 100%;
  margin : auto;
`
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
`

const NavbarLeft = styled.div`
    display: flex;
    align-items: center;
`

const NavbarLeftUl = styled.ul`
  display : flex;
  list-style : none;
  margin : 0 30px;
`

const NavbarLeftLi = styled.li`
  margin : 0 7px;
  cursor : pointer;
  &:hover {
    opacity : 0.4;
  }
`


const Navbar = styled.div`
  width : 100%;
  display : flex;
  justify-content : space-between;
  align-items : center;
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
`

const P = styled.p`
  font-size :20px;
  font-weight : bold;
  opacity : 0.7;
`

export default Header;

