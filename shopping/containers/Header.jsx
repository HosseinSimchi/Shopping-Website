import React from "react";

import Link from "next/link";

import {css, jsx} from "@emotion/react";

import styled from '@emotion/styled';
import { Container, Headers, Layover, Navbar, Unorderlist, Li, Flexcontainer,
        Image, DescContainer, H1 } from "./importedFiles";

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
                              <Li margin="0 15px" fontSize="18px" fontWeight="bold" css={css`
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
                              `}>{item.title}</Li>
                            </Link>
                          ))}
                        </Unorderlist>
                      </Flexcontainer>
                      <Flexcontainer alignItems="center">
                        <Unorderlist margin="0 30px" css={css`
                            @media screen and (max-width: 768px) {
                              margin : 0 25px;
                            }
                            @media screen and (max-width: 576px) {
                              margin : 0 20px;
                            }
                            @media screen and (max-width: 400px) {
                              margin : 0 5px;
                            }
                        `}>
                          {social.map((items) => (
                            <Li margin="0 7px"><I className={items}></I></Li>
                          ))}
                        </Unorderlist>
                        <Image src="/Img/logo.png" alt="logoImg" size="45px" />
                      </Flexcontainer>
                  </Container>
                  <DescContainer>
                    <H1 marginButton="21px" opacity="0.7" fontSize="35px">{topic}</H1>
                    <P>{content}</P>
                  </DescContainer>
              </Container>
            </Navbar>
        </Layover>
      </Headers>
    </>
  )
}


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

