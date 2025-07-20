// src/pages/mypage/AccountManagement.jsx

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmModal from "../../modal/ConfirmModal"; 

const Section = styled.div`
  padding: 32px 0;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const SubText = styled.p`
  color: #888;
  font-size: 14px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RoundButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: white;
  padding: 8px 16px;
  color: #222;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

function AccountManagement() {
  const navigate = useNavigate();
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);

  const handleWithdraw = () => {
    // 실제 탈퇴 처리 로직 (예: API 호출 등)
    console.log("회원 탈퇴 처리됨");

    // 얼럿 메시지 표시
    alert("회원 탈퇴가 완료되었습니다. 그동안 이용해주셔서 감사합니다.");

    setShowWithdrawModal(false);

    // 홈 또는 로그인 페이지로 이동
    navigate("/");
  };

  return (
    <div>
      {/* 로그인 정보 */}
      <Section>
        <Row>
          <div>
            <Title>로그인</Title>
            <Label>비밀번호</Label>
            <SubText>Last updated 1 month ago</SubText>
          </div>
          <RoundButton onClick={() => navigate("/mypage/password")}>
            비밀번호 변경
          </RoundButton>
        </Row>
      </Section>

      {/* 회원 탈퇴 */}
      <Section>
        <Row>
          <Title>회원 탈퇴</Title>
          <RoundButton onClick={() => setShowWithdrawModal(true)}>
            탈퇴하기
          </RoundButton>
        </Row>
      </Section>

      {/* 탈퇴 확인 모달 */}
      {showWithdrawModal && (
        <ConfirmModal
          title="정말 탈퇴하시겠습니까?"
          message="모든 데이터가 삭제되며 복구할 수 없습니다."
          cancelText="취소"
          confirmText="확인"
          onCancel={() => setShowWithdrawModal(false)}
          onConfirm={handleWithdraw}
        />
      )}
    </div>
  );
}

export default AccountManagement;
