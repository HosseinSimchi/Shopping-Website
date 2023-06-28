import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const page = () => {
  const [regInfo, setRegInfo] = useState({})
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = useSelector(state => state.auth);

  const submitHandler =(event) => {
    event.preventDefault();
    dispatch({
      type : "REGISTER",
      name : regInfo.name,
      family : regInfo.family,
      email: regInfo.email,
      loading : false,
    })
    router.push('/login')
  }

  const onChangeHandler = (name, event) => {
    setRegInfo({...regInfo, [name] : event.target.value})
  }

  return (
    <>
      <Section>
        <Form onSubmit={submitHandler}>
          <Label>نام</Label>
          <Input type="text" placeholder="نام" onChange={() => {onChangeHandler("name", event)}}/>
          <Label>نام خانوادگی</Label>
          <Input type="text" placeholder="نام خانوادگی" onChange={() => {onChangeHandler("family", event)}}/>
          <Label>ایمیل</Label>
          <Input type="email" placeholder="ایمیل" onChange={() => {onChangeHandler("email", event)}}/>
          <Button type="submit"> ثبت نام کنید</Button>
          <Link href="/login" style={{textDecoration:'none'}}>
            <P>آیا حساب کاربری دارید؟ وارد شوید</P>
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
  height : 100%;
  margin : 60px auto;
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

