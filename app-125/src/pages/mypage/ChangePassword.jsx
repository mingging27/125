import styled from "styled-components";
import { useState } from "react";
import SuccessModal from "../../modal/SuccessModal";

const Container = styled.div`
  max-width: 480px;
  margin: 80px auto 0;
  padding: 0 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #5b6270;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: #f3f6fb;
  border: none;
  font-size: 16px;
  margin-bottom: 32px;

  &::placeholder {
    color: #aab0b9;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 32px;
`;

const SubmitButton = styled.button`
  padding: 12px 32px;
  background-color: #2e2e2e;
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #1c1c1c;
  }
`;

function ChangePassword() {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: 비밀번호 변경 API 호출
    setShowModal(true); // 모달 열기
    };

    return (
    <Container>
      <Label htmlFor="currentPassword">현재 비밀번호 입력</Label>
      <Input id="currentPassword" type="password" placeholder="..." />

      <Label htmlFor="newPassword">새로운 비밀번호 입력</Label>
      <Input id="newPassword" type="password" placeholder="..." />

      <ButtonWrapper>
        <SubmitButton onClick={handleSubmit}>수정하기</SubmitButton>
      </ButtonWrapper>

      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
    </Container>

    );
}

export default ChangePassword;
