import React, { useState } from "react";
import styled from "styled-components";
import apple from "../img/login/Apple.png";
import google from "../img/login/Google.png";

const Content = styled.div`
    height: 1000px;
    padding-top: 200px;
    background-color: #FDF8F4;

    display: flex;
    justify-content: center;
`;

const PositionWrap = styled.div `
`;

const FormDiv = styled.div `
    width: 932px;
    height: 304px;
    background-color: white;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Form = styled.form `
    position: relative;
`;

const Title = styled.h2 `
    color: #5EC27D;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 57px;
`;

const InputDiv = styled.div `
    display: flex;
    margin-bottom: 15px;
    margin-left: 30px;
`;

const Label = styled.p `
    width: 140px;
    color: #B1B5C3;
    font-size: 18px;
`;

const Input = styled.input `
    width: 312px;
    height: 48px;
    border: 2px solid #E6E8EC;
    border-radius: 12px;

    
  &:focus {
    outline: none;
  }
`;

const Submit = styled.button`
    /*버튼 디자인*/
    width: 94px;
    height: 46px;
    border: none;
    background-color: #5EC27D;
    border-radius: 30px;
    box-shadow: inset 0px 2px 4px 0px rgba(0, 0, 0, 0.15);

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 0px;
    
    /*폰트*/
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
`;

const Subtitle = styled.p `
    color: #B1B5C3;
    font-size: 18px;
`;

const SnsLogin = styled.div `
    border-left: 1px solid #5EC27D;
    padding: 50px 22px 100px 92px;
`;

const SnsButtonDiv = styled.div `
    display: flex;
    width: 124px;
    justify-content: space-between;
`;

const ImgBorder = styled.div `
    width: 46px;
    height: 46px;
    background-color: #F9F9F9;
    border: 1px solid #5EC27D;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

const Img = styled.img `
`;



function Login() {
    return (
    <>
        <Content>
            <PositionWrap>
                <Title>로그인</Title>
                <FormDiv>
            <Form>
                <InputDiv>
                    <Label>아이디</Label>
                    <Input type="text"/>
                </InputDiv>
                <InputDiv>
                    <Label>비밀번호</Label>
                    <Input type="text"/>
                </InputDiv>
                <Submit type="submit">로그인</Submit>
            </Form>
            <SnsLogin>
                <Subtitle>간편 로그인</Subtitle>
                <SnsButtonDiv>
                <ImgBorder>
                    <Img src={apple}/>
                </ImgBorder>
                <ImgBorder>
                    <Img src={google}/>
                </ImgBorder>
                </SnsButtonDiv>
            </SnsLogin>
            </FormDiv>
            </PositionWrap>
        </Content>
    </>
  );
}

export default Login;