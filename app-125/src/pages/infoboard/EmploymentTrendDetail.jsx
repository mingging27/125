import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
  margin-top: 50px;
  margin-bottom: 30px;
`;

const CardWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 32px;
  background-color: #fff;
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 300px;
  background-color: #d9d9d9;
  border-radius: 16px;
  margin-bottom: 24px;
`;

const CategoryTag = styled.div`
  display: inline-block;
  font-size: 14px;
  background-color: #f1f1f1;
  color: #555;
  border-radius: 8px;
  padding: 4px 12px;
  margin-bottom: 12px;
`;

const InfoTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #bdbdbd;
  margin-bottom: 20px;

  svg {
    vertical-align: middle;
  }
`;

const Summary = styled.p`
  font-size: 15px;
  color: #444;
  line-height: 1.6;
  margin-bottom: 32px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const GoSiteButton = styled.button`
  background: linear-gradient(90deg, #2d66d0 0%, #fead5c 100%);
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 15px;
  padding: 12px 24px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

function EmploymentTrendDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData({
      id,
      title: "무료 코딩 강의-1",
      views: 1000,
      date: "2025-05-21",
      siteUrl: "https://example.com",
      summary: "이 강의는 누구나 무료로 들을 수 있는 HTML/CSS 기초 교육입니다.",
      category: "디지털 교육",
      thumbnail: null, // 추후 이미지 경로가 생기면 대체
    });
  }, [id]);

  if (!data) return null;

  return (
    <>
      <Header />
      <PageWrapper>
        <Title>디지털 기술 교육</Title>
        <CardWrapper>
          <Thumbnail />
          <CategoryTag>{data.category}</CategoryTag>
          <InfoTitle>{data.title}</InfoTitle>
          <Meta>
            <span>{data.date}</span>
          </Meta>
          <Summary>{data.summary}</Summary>
          <ButtonWrapper>
            <GoSiteButton onClick={() => window.open(data.siteUrl)}>
              사이트 바로가기 →
            </GoSiteButton>
          </ButtonWrapper>
        </CardWrapper>
      </PageWrapper>
    </>
  );
}

export default EmploymentTrendDetail;
