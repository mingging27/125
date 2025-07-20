// src/pages/AIRecruitPage.jsx
import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";


const PageWrapper = styled.div`
  padding-top: 140px;
  padding-bottom: 80px;
  max-width: 1178px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-top:50px;
  margin-bottom: 30px;
`;

const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 24px;
`;

const JobSelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;
`;

const JobButton = styled.button`
  background-color: ${({ active }) => (active ? "#2D66D0" : "#f3f3f3")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ active }) => (active ? "#244ea3" : "#e0e0e0")};
  }
`;

const GradientBorderBox = styled.div`
  padding: 5px; 
  border-radius: 20px;
  background: linear-gradient(90deg, #FEAD5C 0%, #2D66D0 100%);
  margin-bottom: 40px;
`;

const InnerBox = styled.div`
  background: white;
  border-radius: 18px;
  padding: 32px;
`;


const ListTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const RecruitCard = styled.div`
  background-color: white;
  border-radius: 14px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 16px 20px;
  margin-bottom: 16px;
`;

const Company = styled.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 4px;
`;

const Position = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const jobOptions = [
  "마케팅·광고·MD", "AI·개발·데이터", "금융·보험", "운전·운송·배송",
  "엔지니어링·설계", "건축·시설", "회계·세무", "디자인"
];

const dummyRecruitList = [
  { id: 1, company: "(유)엑센스브로코리아", position: "[DX]Data Warehouse Engine" },
  { id: 2, company: "(유)엑센스브로코리아", position: "[DX]Data Warehouse Engine" },
  { id: 3, company: "(유)엑센스브로코리아", position: "[DX]Data Warehouse Engine" },
];

function AIRecruitPage() {
  const [selectedJob, setSelectedJob] = useState("");

  return (
    <>
      <Header />
      <PageWrapper>
        <Title>AI 추천 채용</Title>
        <SubTitle>📂 희망 직무를 선택해주세요</SubTitle>

        <JobSelectContainer>
          {jobOptions.map((job, index) => (
            <JobButton
              key={index}
              active={selectedJob === job}
              onClick={() => setSelectedJob(job)}
            >
              {job}
            </JobButton>
          ))}
        </JobSelectContainer>

        <GradientBorderBox>
        <InnerBox>
            <ListTitle>AI 추천 채용 리스트</ListTitle>
            {dummyRecruitList.map((item) => (
            <RecruitCard key={item.id}>
                <Company>{item.company}</Company>
                <Position>{item.position}</Position>
            </RecruitCard>
            ))}
        </InnerBox>
        </GradientBorderBox>

      </PageWrapper>
    </>
  );
}

export default AIRecruitPage;
