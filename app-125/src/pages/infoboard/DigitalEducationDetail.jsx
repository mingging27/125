import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiOutlineEye, HiOutlineVideoCamera } from "react-icons/hi";
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
  margin-bottom: 30px;
`;

const CardWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 32px;
`;

const TopInfo = styled.div`
  margin-bottom: 12px;
`;

const InfoTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const Meta = styled.div`
  color: #bdbdbd;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
`;

const VideoBox = styled.div`
  background-color: #d9d9d9;
  border-radius: 24px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
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

function DigitalEducationDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData({
      id,
      title: "무료 코딩 강의-1",
      views: 1000,
      date: "2025-05-21",
      siteUrl: "https://example.com",
    });
  }, [id]);

  if (!data) return null;

  return (
    <>
      <Header />
      <PageWrapper>
        <Title>디지털 기술 교육</Title>
        <CardWrapper>
          <TopInfo>
            <InfoTitle>{data.title}</InfoTitle>
            <Meta>
              <span><HiOutlineEye /> {data.views}</span>
              <span>{data.date} 작성</span>
            </Meta>
          </TopInfo>

          <VideoBox>
            <HiOutlineVideoCamera size={40} color="#555" />
          </VideoBox>

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

export default DigitalEducationDetail;
