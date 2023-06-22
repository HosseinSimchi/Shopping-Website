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
    {title:'ورود', url:'/login'},
  ];

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
                              <Li resFont9="12px" resMargin9="0 13px" resFont7="8px" resMargin7="0 13px" resFont5="8px" resMargin5="0 8px" resFont4="5px" resMargin4="0 5px" margin="0 15px" fontSize="17px" fontWeight="bold">{item.title}</Li>
                            </Link>
                          ))}
                        </Unorderlist>
                      </Flexcontainer>
                      <Flexcontainer alignItems="center">
                        <Unorderlist margin="0 30px">
                          <Li resFont7="12px" resMargin7="0 7px" resFont5="8px" resMargin5="0 1px" resFont4="6px" resMargin4="0 2px" margin="0 15px" fontSize="17px"><i className="fas fa-phone"></i></Li>
                          <Li resFont7="12px" resMargin7="0 7px" resFont5="8px" resMargin5="0 1px" resFont4="6px" resMargin4="0 2px" margin="0 15px" fontSize="17px"><div style={{display:"flex"}}><i className="fa fa-shopping-cart"></i><p style={{margin:"5px -24.5px", fontSize:"12px", fontWeight:"bold"}}>0</p></div></Li>
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

