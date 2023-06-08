import React from "react"

import styled from "styled-components";

import {Container, Section, H4, P, Unorderlist, Li} from "./importedFiles";

const Footer = () => {

  return (
    <>
      <Section width="100%" height="250px" marginTop="10vh" backgroundColor="rgba(0,0,0,0.1)">
        <Container position="relative" flexDirection="column">
            <Section width="100%" marginTop="10%" textAlign="center">
              <H4 fontSize="30px" marginBottom="6px">فروشگاه اینترنتی خرید لباس</H4>
              <P fontSize="20px">شما میتوانید از طرق زیر با در ارتباط باشید و از جدیدترین محصولات ما باخبر شوید</P>
              <P>------------------------------------------------------------------------------------</P>
            </Section>
            <Section width="100%">
                <Unorderlist width="100%" justifyContent="center">
                  <Li margin="0 12px"><i className="fas fa-phone"></i></Li>
                  <Li margin="0 12px"><i className="fa fa-telegram"></i></Li>
                  <Li margin="0 12px"><i className="fa fa-instagram"></i></Li>
                  <Li margin="0 12px"><i className="fa fa-envelope"></i></Li>
                </Unorderlist>
            </Section>
        </Container>
      </Section>
    </>
  )
}



export default Footer;



