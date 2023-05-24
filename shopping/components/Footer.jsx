import React from "react"

import styled from "styled-components";


const Footer = () => {

  return (
    <>
      <FooterSection>
        <Container>
            <TextSection>
              <H>فروشگاه اینترنتی خرید لباس</H>
              <P>شما میتوانید از طرق زیر با در ارتباط باشید و از جدیدترین محصولات ما باخبر شوید</P>
              <P>------------------------------------------------------------------------------------</P>
            </TextSection>
            <Social>
                <Ul >
                  <Li><I className="fas fa-phone"></I></Li>
                  <Li><I className="fa fa-telegram"></I></Li>
                  <Li><I className="fa fa-instagram"></I></Li>
                  <Li><I className="fa fa-envelope"></I></Li>
                </Ul>
            </Social>
        </Container>
      </FooterSection>
    </>
  )
}

const FooterSection = styled.section`
  width : 100%;
  height : 300px;
  margin-top :10vh;
  background-color : rgba(0,0,0,0.1)
`
const Container = styled.div`
  position: relative;
  width : 900px;
  margin: auto;
  height : 100%;
  display: flex;
  flex-direction: column;
`
const TextSection = styled.div`
  text-align : center;
  width : 100%;
  margin-top : 10%;
`

const H = styled.h4`
  font-size : 30px;
  margin-bottom :6px;
`
const P = styled.p`
  font-size :20px;
`
const Social = styled.div`
  width : 100%;
`
const Ul = styled.ul`
  width : 100%;
  display : flex;
  list-style : none;
  justify-content : center;
`
const Li = styled.li`
  margin : 0 12px;
`

const I = styled.i``


export default Footer;



