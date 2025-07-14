// src/components/DigitalCardList.jsx
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; 

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 24px;
`;

const Card = styled.div`
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  cursor: pointer; 
`;

const ImageBox = styled.div`
  height: 180px;
  background-color: #d9d9d9;
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0;
`;

const Period = styled.p`
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
`;

const ApplyButton = styled.button`
  background-color: #2D66D0;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #244ea3;
  }
`;

const dummyPrograms = [
  { id: 1, title: "전적 지원 프로그램", period: "30일" },
  { id: 2, title: "무료 코딩 강의", period: "14일" },
  { id: 3, title: "IT 재취업 특강", period: "7일" },
  { id: 4, title: "중장년 코딩캠프", period: "60일" }
];

function DigitalCardList() {
  const navigate = useNavigate(); 

  return (
    <Grid>
      {dummyPrograms.map(program => (
        <Card key={program.id} onClick={() => navigate(`/infoboard/education/${program.id}`)}>
          <ImageBox />
          <Content>
            <Title>{program.title}</Title>
            <Period>교육기간 {program.period}</Period>
            <ApplyButton>수강신청</ApplyButton>
          </Content>
        </Card>
      ))}
    </Grid>
  );
}

export default DigitalCardList;
