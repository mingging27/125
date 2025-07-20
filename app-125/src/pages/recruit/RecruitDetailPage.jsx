import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import InterviewQuestionSection from '../../components/interview/InterviewQuestionSection';
import { useParams } from 'react-router-dom';
import recruitData from '../../data/mockRecruitData';

const Container = styled.div`
  max-width: 1178px;
  margin: 40px auto;
  border-top: 3px solid black;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;

const LeftSection = styled.div`
  padding: 32px;
`;

const Company = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

const JobTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  margin: 12px 0 24px 0;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 0 0 24px 0;
`;

const SectionWrapper = styled.div`
  display: flex;
  gap: 60px;
`;

const Section = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 16px;
`;

const Item = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Label = styled.div`
  width: 60px;
  color: #999;
`;

const Value = styled.div`
  color: #222;
`;

const OuterWrapper = styled.div`
  padding-top: 114px;
`;

const InnerWrapper = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const ButtonWrap = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const DetailButtonStyled = styled.button`
  background: #FEAD5C;
  color: white;
  font-weight: 600;
  font-size: 16px;
  padding: 14px 28px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: opacity 0.2s;
  box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.15);

  &:hover {
    opacity: 0.9;
  }
`;

const WebsiteButtonStyled = styled(DetailButtonStyled)`
  background: #5EC27D;
`;

const RecruitDetailPage = () => {
  const { id } = useParams();
  const job = recruitData.find(item => item.job_post_id === parseInt(id));

  if (!job) return <p>해당 채용 공고를 찾을 수 없습니다.</p>;

  return (
    <>
      <Header />
      <OuterWrapper>
        <InnerWrapper>
          <Title>채용 정보</Title>
          <Container>
            <LeftSection>
              <Company>기업1</Company>
              <JobTitle>[기업1] 2025 상반기 경력 채용</JobTitle>
              <Divider />
              <SectionWrapper>
                <Section>
                  <SectionTitle>지원자격</SectionTitle>
                  <Item><Label>경력</Label><Value>경력 직무별 상이</Value></Item>
                  <Item><Label>학력</Label><Value>고졸이상 직무별 상이</Value></Item>
                  <Item><Label>스킬</Label><Value>JAVA, JSP, MySQL, Oracle, Excel, CREO</Value></Item>
                  <Item><Label>우대</Label><Value>국가 유공자</Value></Item>
                  <Item><Label>분야</Label><Value>AI</Value></Item>
                  <Item><Label>연령</Label><Value>40세~62세</Value></Item>
                </Section>

                <Section>
                  <SectionTitle>근무조건</SectionTitle>
                  <Item><Label>고용형태</Label><Value>정규직 수습 3개월</Value></Item>
                  <Item><Label></Label><Value>계약직 근무기간 1년</Value></Item>
                  <Item><Label>급여</Label><Value>회사내규에 따름</Value></Item>
                  <Item><Label>지역</Label><Value>서울시 강남구, 강동구, 성북구, 양천구, 경남 양산시</Value></Item>
                  <Item><Label>시간</Label><Value>주 5일 (월~금) 8:30~17:30</Value></Item>
                </Section>
              </SectionWrapper>
            </LeftSection>
          </Container>

          <ButtonWrap>
            <DetailButtonStyled>상세요강 바로가기 →</DetailButtonStyled>
            <WebsiteButtonStyled>홈페이지 바로가기 →</WebsiteButtonStyled>
          </ButtonWrap>

          <InterviewQuestionSection />

        </InnerWrapper>
      </OuterWrapper>
    </>
  );
};

export default RecruitDetailPage;
