import React from "react";

import Link from "next/link";


import { Container, Headers, Layover, Navbar, Unorderlist, Li, Flexcontainer,
        Image, DescContainer, H1, P } from "./importedFiles";

const Header = ({topic, content}) => {

  const pages = [
    {title:'صفحه اصلی', url:'/'},
    {title:'فروشگاه', url:'/products'},
    {title:'درباره ما', url:'/about'},
    {title:'تماس با ما', url:'/contact'},
  ];

  const social = ["fas fa-phone","fa fa-telegram", "fa fa-instagram", "fa fa-envelope"]

  return (
    <>
      <Headers>
        <Layover>
            <Navbar>
              <Container>
                  <Container justifyContent="space-between" alignItems="center">
                      <Flexcontainer>
                        <Unorderlist margin='0 5x 0 5px'>
                          {pages.map((item) => (
                            <Link href={item.url} style={{textDecoration:'none', color:"black"}}>
                              <Li name="navbar" margin="0 15px" fontSize="17px" fontWeight="bold">{item.title}</Li>
                            </Link>
                          ))}
                        </Unorderlist>
                      </Flexcontainer>
                      <Flexcontainer alignItems="center">
                        <Unorderlist margin="0 30px">
                          {social.map((items) => (
                            <Li name="navbar" margin="0 7px"><i className={items}></i></Li>
                          ))}
                        </Unorderlist>
                        <Image src="/Img/logo.png" alt="logoImg" size="45px" />
                      </Flexcontainer>
                  </Container>
                  <DescContainer>
                    <H1 marginButton="21px" opacity="0.7" fontSize="35px">{topic}</H1>
                    <P fontSize="20px" fontWeight="bold" opacity="0.7">{content}</P>
                  </DescContainer>
              </Container>
            </Navbar>
        </Layover>
      </Headers>
    </>
  )
}


export default Header;

