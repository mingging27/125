// MainPage.js
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import bannerBackground from "../img/bannerbackground.png";
import AIRetouchingImg from "../img/AIRetouchingImg.png";
import JobResearchImg from "../img/JobResearchImg.png";
import InfoBroadImg from "../img/InfoBroadImg.png";
import CommunityImg from "../img/CommunityImg.png";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom'

const PageWrapper = styled.div`
  padding-top: 114px;
`;

const Banner = styled.section`
  width: 100%;
  height: 400px;
  background-image: url(${bannerBackground});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerContent = styled.div`
  width: 1178px;           
  text-align: left;        
  color: black;
`;

const BannerTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin: 0;

`;

const BannerSubtitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 30px;
`;

const BannerButtonPrimary = styled.button`
  background: linear-gradient(to right, #2D66D0, #5EC27D);
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  padding: 12px 24px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #1f4fab;
  }
`;

const BannerButtonSecondary = styled.button`
  background: linear-gradient(to right, #2D66D0, #FEAD5C);
  color: white;
  border: none;
  border-radius: 30px; 
  font-size: 16px;
  padding: 12px 24px;
  cursor: pointer;
  font-weight: bold;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const Section = styled.section`
  max-width: 1178px;
  margin: 80px auto 0 auto;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 40px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 22%; 
  min-width: 200px;
  max-width: 240px;
  height: 220px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: contain;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const RealtimeSection = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  max-width: 1178px;
  margin: 80px auto;
`;

const RealtimeBlock = styled.div`
  flex: 1;
`;

const BlockTitle = styled.h3`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 24px;
`;

const RecruitItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 15px;
`;

const Company = styled.div`
  width: 160px;          
  font-weight: bold;
`;

const Role = styled.div`
  flex: 1;                
`;

const Deadline = styled.div`
  width: 100px;
  text-align: right;
  color: #555;
  font-size: 14px;
`;

const CommunityItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 15px;
`;

const PostTitle = styled.span`
  flex: 1;
  font-weight: 500;
`;

const PostMeta = styled.div`
  display: flex;
  gap: 16px;
  color: #888;
  font-size: 13px;
`;


function MainPage() {

  const navigate = useNavigate();

  // 더미 데이터 
  const recruitList = [
    {
      company: "한국전력공사",
      role: "전산직",
      deadline: "~7/20 마감",
    },
    {
      company: "한국관광공사",
      role: "기획직",
      deadline: "~7/25 마감",
    },
    {
      company: "삼성전자",
      role: "SW개발",
      deadline: "~7/30 마감",
    },
  ];

  const postList = [
    {
      title: "자소서 피드백 받을 수 있을까요?",
      likes: 25,
      time: "2시간 전",
    },
    {
      title: "면접 때 이런 질문 받았어요",
      likes: 17,
      time: "5시간 전",
    },
    {
      title: "이력서에서 자주 실수하는 포인트!",
      likes: 42,
      time: "어제",
    },
  ];

  return (
    <>
      <Header />
      <PageWrapper>

        <Banner>
          <BannerContent>
            <BannerTitle>125 일이요! :</BannerTitle>
            <BannerSubtitle>한 번 더, 두 번째 기회, 다섯 가지의 가능성!</BannerSubtitle>
            <ButtonGroup>
              <BannerButtonPrimary>이력서 리터칭 시작하기</BannerButtonPrimary>
              <BannerButtonSecondary>채용 공고 바로가기</BannerButtonSecondary>
            </ButtonGroup>
          </BannerContent>
        </Banner>

        <Section>
          <SectionTitle>서비스 바로가기</SectionTitle>
          <CardContainer>
            <Card onClick={() => navigate('/recruit')}>
              <CardImage src={JobResearchImg} alt="구인/구직 게시판" />
              <CardText>구인/구직 게시판</CardText>
            </Card>
            <Card>
              <CardImage src={AIRetouchingImg} alt="AI 이력서 리터칭" />
              <CardText>AI 이력서 리터칭</CardText>
            </Card>
            <Card>
              <CardImage src={CommunityImg} alt="커뮤니티" />
              <CardText>커뮤니티</CardText>
            </Card>
            <Card>
              <CardImage src={InfoBroadImg} alt="정보게시판" />
              <CardText>정보게시판</CardText>
            </Card>

          </CardContainer>
        </Section>

        <RealtimeSection>
          {/* 실시간 채용 */}
          <RealtimeBlock>
            <BlockTitle>실시간 채용</BlockTitle>
            {recruitList.map((item, idx) => (
              <RecruitItem key={idx}>
                <Company>{item.company}</Company>
                <Role>[{item.role}] 채용공고</Role>
                <Deadline>{item.deadline}</Deadline>
              </RecruitItem>
            ))}
          </RealtimeBlock>

          {/* 커뮤니티 인기글 */}
          <RealtimeBlock>
            <BlockTitle>커뮤니티 실시간 인기글</BlockTitle>
            {postList.map((post, idx) => (
              <CommunityItem key={idx}>
                <PostTitle>{post.title}</PostTitle>
                <PostMeta>
                  <div>❤️ {post.likes}</div>
                  <div>{post.time}</div>
                </PostMeta>
              </CommunityItem>
            ))}
          </RealtimeBlock>
        </RealtimeSection>
        
        <Footer />
      </PageWrapper>
    </>
  );
}

export default MainPage;
