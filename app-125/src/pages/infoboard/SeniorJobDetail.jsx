import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
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

const Tag = styled.div`
  display: inline-block;
  border: 1px solid #2d66d0;
  color: #2d66d0;
  font-weight: 600;
  border-radius: 4px;
  padding: 4px 12px;
  font-size: 14px;
  margin-top: 24px;
  margin-bottom: 16px;
`;


const JobDesc = styled.div`
  font-size: 16px;
  min-height: 180px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: white;
`;

const HashtagGroup = styled.div`
  margin-top: 16px;
  color: #666;
  font-size: 14px;

  span {
    margin-right: 10px;
  }
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

function SeniorJobDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // 임시 데이터
    setData({
      id,
      title: "기업 1-추천합니다",
      views: 1000,
      date: "2025-05-21",
      field: "기획 / PM",
      companyDesc: "기업 설명",
      jobSummary: "직무 요약",
      hashtags: ["#40대", "#50대", "#기획"],
      siteUrl: "https://example.com",
    });
  }, [id]);

  if (!data) return null;

  return (
    <>
      <Header />
      <PageWrapper>
        <Title>중장년 직무추천</Title>
        <CardWrapper>
          <TopInfo>
            <InfoTitle>{data.title}</InfoTitle>
            <Meta>
              <span><HiOutlineEye /> {data.views}</span>
              <span>{data.date} 작성</span>
            </Meta>
          </TopInfo>

          <Tag>{data.field}</Tag>

          <JobDesc>{data.jobSummary}</JobDesc>

          <HashtagGroup>
            {data.hashtags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </HashtagGroup>

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

export default SeniorJobDetail;
