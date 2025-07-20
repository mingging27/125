import React, { useState } from "react";
import styled from "styled-components";

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
    width: 730px;
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
    padding-left: 10px;

    
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
            </FormDiv>
            </PositionWrap>
        </Content>
    </>
  );
}

export default Login;