import React from "react"

import styled from '@emotion/styled';

const Products = () => {

  return (
    <>
      <Section>
        <Layover>
            <Container>


                <SectionRight>
                  <HSectionRight> سلام دنیا</HSectionRight>
                  <PSectionRight> امیدوارم همیشه خوب باشیم</PSectionRight>
                  <A href="/">دیدن محصولات بیشتر</A>
                </SectionRight>
                <SectionLeft>
                    <Ul>
                      <Li>
                        <Img src="Img/logo.png" />
                        <h4>نام محصول</h4>
                        <p>قیمت محصول</p>
                      </Li>
                      <Li>
                        <Img src="Img/logo.png" />
                        <h4>نام محصول</h4>
                        <p>قیمت محصول</p>
                      </Li>
                      <Li>
                        <Img src="Img/logo.png" />
                        <h4>نام محصول</h4>
                        <p>قیمت محصول</p>
                      </Li>
                      <Li>
                        <Img src="Img/logo.png" />
                        <h4>نام محصول</h4>
                        <p>قیمت محصول</p>
                      </Li>
                    </Ul>
                </SectionLeft>
            </Container>
        </Layover>
      </Section>
    </>
  )
}

const Section = styled.section`
  margin-top : 10vh;
  height : 500px;
  background-image : url("Img/header.jpg");
  background-repeat : no-repeat;
  background-size : cover;
  background-attachment : fixed;
  position : relative;
`
const Layover = styled.div`
  position : absolute;
  top : 0;
  right : 0;
  left : 0;
  bottom : 0;
  background-color : rgba(255, 255, 255, 0.8);
`

const Container = styled.div`
  display : flex;
  width : 900px;
  height : 100%;
  margin : auto;
  justify-content : space-between;
`
const SectionRight = styled.div`
  width : 60%;
  text-align : center;
  margin-top :163px;
`
const SectionLeft = styled.div`
  width : 40%;
`

const Ul = styled.ul`
  width : 100%;
  list-style: none;
  display : flex;
  flex-wrap : wrap;
`
const Li = styled.li`
  width : 50%;
  margin : 50px 0;
  text-align : center;
`

const Img = styled.img`
  width : 100px;
  heght : 200px;
`
const A = styled.a`
  text-decoration : none;
  color : black;
  opacity : 0.6;
  cursor : pointer;
  border : 2px dotted black;
  border-radius : 10px;
  padding : 5px;
`
const PSectionRight = styled.p`
  margin-bottom :20px;
  font-size : 20px;
  font-weight : bold;
`

const HSectionRight = styled.h1`
  font-size : 30px;
  font-weight : bold;
`
export default Products;

