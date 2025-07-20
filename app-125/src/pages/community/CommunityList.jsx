import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import ScrapIcon from "../../img/defaultScrap.png";
import communityPosts from "../../data/communityPosts"; // 더미 데이터

const PageWrapper = styled.div`
  padding: 140px 24px 80px;
  max-width: 1178px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const FilterWrapper = styled.div`
  display: flex;

`;

const FilterButton = styled.button`
  padding: 6px 14px;
  border: 1px solid #f2a65a;
  background-color: ${props => (props.active ? '#f2a65a' : 'white')};
  color: ${props => (props.active ? 'white' : '#f2a65a')};
  font-weight: 500;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const WriteButton = styled.button`
  background-color: white;
  color: #f2a65a;
  border: 1px solid #f2a65a;
  padding: 8px 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #f2a65a;
    color: white;
  }
`;

const PostCard = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-decoration: none;
  color: inherit;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;

  &:hover {
    background-color: #fafafa;
  }
`;

const PostContent = styled.div`
  flex: 1;
`;

const PostTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 6px;
`;

const PostPreview = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;



const PostMeta = styled.div`
  font-size: 12px;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

const MetaLeft = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  width: 130px;
  height: 101px;
  margin-left: 16px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`;

const ScrapIconImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 14px;
  height: 20px;
  opacity: 0.7;
  cursor: pointer;
`;



function CommunityList() {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest"); // "latest" or "popular"

  const sortedPosts = [...communityPosts].sort((a, b) => {
    if (sortType === "popular") return b.likes - a.likes;
    return b.id - a.id; // 최신순 (id가 높을수록 최신)
  });

  return (
    <>
      <Header />
      <PageWrapper>
        <Title>커뮤니티</Title>

        <TopBar>
          <FilterWrapper>
            <FilterButton
              active={sortType === "latest"}
              onClick={() => setSortType("latest")}
            >
              최신순
            </FilterButton>
            <FilterButton
              active={sortType === "popular"}
              onClick={() => setSortType("popular")}
            >
              인기순
            </FilterButton>
          </FilterWrapper>

          <WriteButton onClick={() => navigate("/community/write")}>
            작성하기
          </WriteButton>
        </TopBar>

        {sortedPosts.map((post) => (
        <PostCard to={`/community/${post.id}`} key={post.id}>
          <PostContent>
            <PostTitle>{post.title}</PostTitle>
            <PostPreview>{post.preview}</PostPreview>
            <PostMeta>
              <MetaLeft>
                <MetaItem>
                  <AiOutlineEye />
                  <span>{post.views}</span>
                </MetaItem>
                <MetaItem>
                  <AiOutlineHeart />
                  <span>{post.likes}</span>
                </MetaItem>
                <span>{post.createdAt}</span>
              </MetaLeft>
            </PostMeta>
          </PostContent>

          <ThumbnailWrapper>
            {post.thumbnail && <Thumbnail src={post.thumbnail} alt="썸네일" />}
            {/* <ScrapIconImg src={ScrapIcon} alt="스크랩" /> */}
          </ThumbnailWrapper>
        </PostCard>

        ))}
      </PageWrapper>
    </>
  );
}

export default CommunityList;
