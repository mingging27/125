import React from "react";
import { useState } from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.png";
import SuccessModal from "../../modal/SuccessModal";

const ProfileContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-top :0;
  margin-bottom: 40px;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 40px;
  border-radius: 4px;
  background-color: #fff;
  margin-bottom: 40px;
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #f2f2f2;
`;

const ChangeButton = styled.button`
  margin-top: 20px;
  padding: 6px 16px;
  border: 2px solid #3e63dd;
  border-radius: 2px;
  background: white;
  color: #3e63dd;
  font-weight: 500;
  cursor: pointer;
`;

const ProfileInfo = styled.div`
  font-size: 16px;
  line-height: 2;
`;

const Label = styled.div`
  font-size: 13px;
  color: #777;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background-color: #fdfdfd;
  font-size: 14px;
  color: #333;
  outline: none;

  &:focus {
    border-color: #3e63dd;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 24px;

  & > div {
    flex: 1;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: 50px; 
`;


const EditButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 24px;

  font-size: 15px;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;


function MyProfile() {

    const [showModal, setShowModal] = useState(false);

    const handleEditClick = () => {
        // TODO: 수정 처리 로직 추가
    setShowModal(true); // 모달 띄우기
    };
  return (
    <ProfileContainer>
      <SectionTitle>프로필</SectionTitle>

      <ProfileCard>
        <AvatarWrapper>
          <Avatar src={avatar} alt="프로필 이미지" />
          <ChangeButton>사진 변경</ChangeButton>
        </AvatarWrapper>
        <ProfileInfo>
          <div>이름: 김푸짐</div>
          <div>아이디: pujim1234</div>
          <div>생년월일: 2030.12.30</div>
          <div>성별: 여자</div>
        </ProfileInfo>
      </ProfileCard>

      <Row>
        <div>
          <Label>이메일</Label>
          <Input type="email" value="pujim@gmail.com" disabled />
        </div>
        <div>
          <Label>휴대폰 번호</Label>
          <Input type="text" value="010-1234-5678" disabled />
        </div>
      </Row>

      <div>
        <Label>주소</Label>
        <Input type="text" value="서울특별시 도봉구 삼양로 144길 33" disabled />
      </div>
      
      <ButtonSection>
        <EditButton onClick={handleEditClick}>수정하기</EditButton>
      </ButtonSection>

    {showModal && (
        <SuccessModal
          onClose={() => setShowModal(false)}
          title="수정 성공"
          message="프로필이 수정되었습니다."
        />
      )}

    </ProfileContainer>
  );
}

export default MyProfile;
