import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import defaultLikeIcon from '../../img/defaultLike.png';
import likeIcon from '../../img/Like.png';

const Card = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between;
  border-top: 1px solid #000;
  padding: 20px 0;
  cursor: pointer;
  gap: 20px;
`;


const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
`;

const CompanyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Company = styled.div`
  font-size: 22px; 
  font-weight: 700;
  padding-rigth:10px;
`;

const LikeImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin: 0;
`;

const Info = styled.div`
  font-size: 14px;
  color: #555;
`;
const CenterSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: flex-start;      
  gap: 6px;
  padding-left: 20px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ApplyButton = styled.button`
  background-color: #65bc7b;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const DeadlineInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Dday = styled.span`
  color: orange;
  font-weight: bold;
  font-size: 14px;
`;

const DeadlineDate = styled.span`
  color: #888;
  font-size: 14px;
`;

const RecruitCard = ({ post }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    navigate(`/recruit/${post.job_post_id}`);
  };

    const toggleLike = (e) => {
    e.stopPropagation(); // 카드 클릭 방지
    setLiked(!liked);
    };

  const calculateDday = (deadline) => {
    const today = new Date();
    const endDate = new Date(deadline);
    const diff = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
    return diff >= 0 ? `D-${diff}` : '마감';
  };

  const formatDeadline = (deadline) => {
    const date = new Date(deadline);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekday = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
    return `${month}/${day}(${weekday})`;
  };

  return (
    <Card onClick={handleClick}>
    <LeftSection>
        <CompanyRow>
        <Company>기업{post.company_id}</Company>
        <LikeImg
            src={liked ? likeIcon : defaultLikeIcon}
            alt="좋아요"
            onClick={(e) => toggleLike(e)}
        />
        </CompanyRow>
    </LeftSection>

    <CenterSection>
        <Title>{post.title}</Title>
        <Info>{post.job_field} | {post.location_city}</Info>
    </CenterSection>

    <RightSection>
        <ApplyButton>홈페이지 지원</ApplyButton>
        <DeadlineInfo>
        <Dday>{calculateDday(post.deadline)}</Dday>
        <DeadlineDate>~ {formatDeadline(post.deadline)}</DeadlineDate>
        </DeadlineInfo>
    </RightSection>
    </Card>

  );
};

export default RecruitCard;
