import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-top :0;
  margin-bottom: 40px;
`;

const SortOptions = styled.div`
  display: flex;
`;

const SortButton = styled.button`

  padding: 6px 14px;
  border: 1px solid #5EC27D;
  background-color: ${props => (props.active ? '#5EC27D' : 'white')};
  color: ${props => (props.active ? 'white' : '#5EC27D')};
  font-weight: 500;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 8px;
`;

const JobTitle = styled.div`
  font-weight: bold;
  margin-bottom: 12px;
`;

const InfoText = styled.div`
  font-size: 14px;
  color: #555;
  margin-bottom: 4px;
`;

const MoreInfo = styled.a`
  display: inline-block;
  margin-top: 16px;
  font-size: 14px;
  font-weight: bold;
  color: #2D66D0;
  text-decoration: none;

  &:after {
    content: " →";
    margin-left: 6px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const mockData = new Array(9).fill({
  title: "성실한 직원 구합니다",
  field: "AI",
  deadline: "2024.02.17"
});

function MyApplyHistory() {
  const [sortBy, setSortBy] = useState("applied"); // or "deadline"

  return (
    <Wrapper>
      <TopBar>
        <Title>지원 현황</Title>
        <SortOptions>
          <SortButton
            active={sortBy === "applied"}
            onClick={() => setSortBy("applied")}
          >
            지원한 날짜 순
          </SortButton>
          <SortButton
            active={sortBy === "deadline"}
            onClick={() => setSortBy("deadline")}
          >
            마감 날짜 순
          </SortButton>
        </SortOptions>
      </TopBar>

      <Grid>
        {mockData.map((item, index) => (
          <Card key={index}>
            <JobTitle>{item.title}</JobTitle>
            <InfoText>분야: {item.field}</InfoText>
            <InfoText>마감 날짜: {item.deadline}</InfoText>
            <MoreInfo href="#">More Info</MoreInfo>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default MyApplyHistory;
