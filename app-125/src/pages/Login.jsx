import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Content = styled.div`
  height: 1000px;
  padding-top: 200px;
  background-color: #fdfcfa;

  display: flex;
  justify-content: center;
`;

const PositionWrap = styled.div``;

const FormDiv = styled.div`
  width: 730px;
  height: 304px;
  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Form = styled.form`
  position: relative;
`;

const Title = styled.h2`
  color: #5ec27d;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 57px;
`;

const InputDiv = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const Label = styled.p`
  width: 140px;
  color: #b1b5c3;
  font-size: 18px;
`;

const Input = styled.input`
  width: 312px;
  height: 48px;
  border: 2px solid #e6e8ec;
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
  background-color: #5ec27d;
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

const Signup = styled.p``;

function Login() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loginId.trim() || !password.trim()) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    const loginData = {
      login_id: loginId,
      password: password,
    };

    try {
      const response = await fetch("http://127.0.0.1:3002/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "로그인 실패");
        return;
      }

      console.log(data.token);
      alert(data.message || "로그인 성공");
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
      }

      navigate("/");
    } catch (error) {
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <Header />
      <Content>
        <PositionWrap>
          <Title>로그인</Title>
          <FormDiv>
            <Form onSubmit={handleSubmit}>
              <InputDiv>
                <Label>아이디</Label>
                <Input type="text" value={loginId} onChange={(e) => setLoginId(e.target.value)} />
              </InputDiv>
              <InputDiv>
                <Label>비밀번호</Label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </InputDiv>
              <Submit type="submit">로그인</Submit>
            </Form>
            <Signup onClick={() => navigate("/signup")} style={{ cursor: "pointer" }}>
              회원가입
            </Signup>
          </FormDiv>
        </PositionWrap>
      </Content>
    </>
  );
}

export default Login;
