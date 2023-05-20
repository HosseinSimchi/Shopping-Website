'use client'

import React from "react";

import Link from "next/link";

import styled from '@emotion/styled';

const Header = ({topic, content}) => {

  return (
    <>
      <HeaderTag>
        <Nav>
          <Container>
              <Navbar>
                  <NavbarRight>
                    <NavbarRightUl>
                      <NavbarRightLi>صفحه اصلی</NavbarRightLi>
                      <NavbarRightLi>درباره ما</NavbarRightLi>
                      <NavbarRightLi>تماس با ما</NavbarRightLi>
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
          </Container>
        </Nav>
      </HeaderTag>
    </>
  )
}

const HeaderTag = styled.header`
  background-image: url("Img/header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`

const Nav = styled.nav`
  width: 100%;
  height: 70px;
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
  margin : 0 10px;
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
  margin : 0 3px;
`


const Navbar = styled.div`
  width : 100%;
  display : flex;
  justify-content : space-between;
  align-items : center;
`

const Img = styled.img`
  width : 40px;
`

export default Header;

