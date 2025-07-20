import React, { useState } from "react";
import styled from "styled-components";


const Content = styled.div`
    height: 1000px;
    padding-top: 200px;
    background-color: #FDF8F4;

    display: flex;
    justify-content: center;
`;

const Form = styled.form `
`;

const Title = styled.h2 `
    color: #5EC27D;
    font-weight: bold;
    font-size: 32px;
`;

const InputBundle = styled.div `
    width: 1030px;
    height:350px;
    border: none;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 20px 45px;
    margin-top: 60px;
`;

const SubTitle = styled.h3 `
    font-size: 24px;
    margin: 0;
    margin-top: 5px;
    margin-bottom: 25px;
`;

const InputDiv = styled.div ` /* 상자 외 */
    display: flex;
    margin-bottom: 25px;
`;

const InputDiv2 = styled(InputDiv) ` 
    margin: 0;
`;

const InputDiv3 = styled(InputDiv2) ` /* 상자 내 */
    margin-bottom: 10px;
`;

const Label = styled.p `
    width: 140px;
    color: #B1B5C3;
    font-size: 18px;
`;

const Label2 = styled(Label) `
`;

const Label3 = styled(Label2) `
    margin-left: 100px;
`;

const Essential = styled.span `
    color: red;
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

const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
margin-top: 70px;
  `;


const Button = styled.button `
    /*버튼 디자인*/
    width: 155px;
    height: 60px;
    border: none;
    background-color: #5EC27D;
    border-radius: 30px;
    box-shadow: inset 0px 2px 4px 0px rgba(0, 0, 0, 0.15);

    display: flex;
    justify-content: center;
    align-items: center;
    
    /*폰트*/
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
`;

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [birthGender, setBirthGender] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !username.trim() ||
    !password.trim() ||
    !confirmPassword.trim() ||
    !name.trim() ||
    !birthGender.trim() ||
    !address.trim() ||
    !phone.trim() ||
    !email.trim()
  ) {
    alert("필수 입력 항목을 모두 작성해 주세요.");
    return;
  }
};


    return (
    <>
        <Content>
            <Form onSubmit={handleSubmit}>
                <Title>회원가입</Title>
                <InputDiv>
                    <Label>아이디<Essential color="red">*</Essential></Label>
                    <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
               </InputDiv>
                <InputDiv>
                    <Label>비밀번호<Essential color="red">*</Essential></Label>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></InputDiv>
                <InputDiv>
                    <Label>비밀번호 확인<Essential color="red">*</Essential></Label>
                    <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </InputDiv>
                <InputBundle>
                    <SubTitle>회원 정보</SubTitle>
                    <InputDiv2>
                    <InputDiv3>
                        <Label2>이름<Essential color="red">*</Essential></Label2>
                        <Input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

                    </InputDiv3>
                    <InputDiv3>
                        <Label3>생년월일 ∙ 성별<Essential color="red">*</Essential></Label3>
                        <Input type="text" value={birthGender} onChange={(e) => setBirthGender(e.target.value)} />
                    </InputDiv3>
                    </InputDiv2>
                    <InputDiv3>
                        <Label2>주소<Essential color="red">*</Essential></Label2>
                        <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </InputDiv3>
                    <InputDiv2>
                    <InputDiv3>
                        <Label2>휴대폰<Essential color="red">*</Essential></Label2>
                        <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </InputDiv3>
                    <InputDiv3>
                        <Label3>이메일<Essential color="red">*</Essential></Label3>
                        <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </InputDiv3>
                    </InputDiv2>
                    <InputDiv3>
                        <Label2>경력 단절 기간</Label2>
                        <Input type="text"/>
                    </InputDiv3>
                </InputBundle>
                <BtnDiv>
                <Button>회원가입</Button>
                </BtnDiv>
            </Form>
        </Content>
    </>
  );
}

export default Signup;