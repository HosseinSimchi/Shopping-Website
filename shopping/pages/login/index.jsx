import React from "react";
import Link from "next/link";

import styled from "@emotion/styled";

const page = () => {

  return (
    <>
      <Section>
        <Form>
          <Label>ایمیل</Label>
          <Input type="email" placeholder="ایمیل"/>
          <Button type="submit">وارد شوید</Button>
          <Link href="/register" style={{textDecoration:'none'}}>
            <P>هنوز ثبت نام نکرده اید؟ ثبت نام کنید</P>
          </Link>
          <Link href="/" style={{textDecoration:'none'}}>
            <P>صفحه اصلی</P>
          </Link>
        </Form>
      </Section>
    </>
  )
}

const Section = styled.section`
  width : 100%;
  height : 100vh;
  background-image: linear-gradient(rgba(0,0,0,0.04), rgba(0,0,0,0.2));
  display : flex;
  flex-direction : column;
`;

const Form = styled.form`
  display : flex;
  flex-direction : column;
  width : 60%;
  height : 50%;
  margin : 140px auto;
  padding : 25px;
  background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4));
  box-shadow : 8px 8px 8px 8px rgba(0,0,0,0.2);
  border-radius : 10px;
`
const Input = styled.input`
  width : 60%;
  margin : 10px auto;
  border-radius : 10px;
  padding : 5px;
`
const Label = styled.label`
  width : 60%;
  margin : 5px auto;
  color : white;
`
const Button = styled.button`
  width : 20%;
  margin : 10px auto;
  padding : 8px;
  border-radius : 10px;
  cursor : pointer;
  transition: font-size 0.35s ease-in;
  &:hover{
    font-size : 15px;
  }
`
const P = styled.p`
  width : 60%;
  font-size :12px;
  margin : 5px auto;
  color : white;
  cursor : pointer;
  transition : font-size 0.35s ease-in;
  &:hover {
    font-size :15px;
  }
`

export default page;

