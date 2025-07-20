import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import Header from "../../components/Header";
import communityPosts from "../../data/communityPosts";
import profileImg from "../../img/profile.png";


// 이미지 import
import defaultLike from "../../img/defaultLike.png";
import like from "../../img/Like.png";
import defaultScrap from "../../img/defaultScrap.png";
import scrap from "../../img/Scrap.png";

// 생략: import문 동일

const PageWrapper = styled.div`
  padding: 140px 24px 80px;
  max-width: 1178px;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  margin-top: 30px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 6px;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #888;
  gap: 10px;
`;

const RightLike = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  gap: 4px;

`;

const LikeCount = styled.span`
  font-size: 12px;
  color: #666;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 16px 0;
`;

const Thumbnail = styled.img`
  width: 20%;
  height: 20%;
  border-radius: 8px;
  margin-bottom: 24px;
`;

const Content = styled.p`
  font-size: 15px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const ReactionBar = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 14px;
  margin-bottom: 30px;
`;

const ReactionIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const CommentSection = styled.div`
  margin-top: 30px;
`;

const CommentInput = styled.textarea`
  width: 99%;
  height: 80px;
  margin-top: 20px;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  resize: none;
`;

const SubmitButton = styled.button`
  background-color: #f2a65a;
  color: white;
  border: none;
  padding: 10px 16px;
  margin-top: 12px;
  float: right;
  cursor: pointer;

  &:hover {
    background-color: #e6933e;
  }
`;

const CommentBox = styled.div`
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #eee;     
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05); 
  padding: 12px 16px;
  margin-bottom: 12px;
  gap: 12px;
  align-items: flex-start;
`;

const CommentProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left:5px;
`;

const CommentAuthor = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
`;

const CommentText = styled.div`
  font-size: 14px;
  color: #444;
  margin-bottom: 6px;
`;

const CommentDate = styled.div`
  font-size: 12px;
  color: #aaa;
`;



function CommunityDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [liked, setLiked] = useState(false);
  const [scrapped, setScrapped] = useState(false);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const found = communityPosts.find((item) => item.id === parseInt(id));
    if (found) setPost(found);
  }, [id]);

  const toggleLike = () => setLiked((prev) => !prev);
  const toggleScrap = () => setScrapped((prev) => !prev);

  const handleCommentSubmit = () => {
    if (newComment.trim() === "") return;
    alert("댓글 등록: " + newComment);
    setNewComment("");
  };

  if (!post) return null;

  return (
    <>
     <Header />
    <PageWrapper>
      <TitleWrapper>
        <div>
          <Title>{post.title}</Title>
          <MetaInfo>
            <AiOutlineEye />
            <span>{post.views}</span>
            <span>|</span>
            <span>{post.date}</span>
          </MetaInfo>
        </div>
        <RightLike>
          <img
            src={liked ? like : defaultLike}
            alt="좋아요"
            onClick={toggleLike}
            style={{ width: "20px", height: "20px", cursor: "pointer" }} 
          />
          <LikeCount>{post.likes + (liked ? 1 : 0)}</LikeCount>
        </RightLike>
      </TitleWrapper>

      <Divider />

      {post.thumbnail && <Thumbnail src={post.thumbnail} alt="썸네일" />}
      

      <Content>{post.content}</Content>

      <ReactionBar>
        <ReactionIcon
          src={liked ? like : defaultLike}
          onClick={toggleLike}
          alt="좋아요"
        />
        <ReactionIcon
          src={scrapped ? scrap : defaultScrap}
          onClick={toggleScrap}
          alt="스크랩"
          style={{ width: "18px", height: "24px", cursor: "pointer" }}
        />
      </ReactionBar>

      <Divider />

      <CommentSection>
        <h4>댓글</h4>
        {post.replies?.map((reply, idx) => (
          <CommentBox key={idx}>
            <CommentProfile src={profileImg} alt="프로필" />
            <CommentBody>
              <CommentAuthor>{reply.author}</CommentAuthor>
              <CommentText>{reply.text}</CommentText>
              <CommentDate>{reply.date}</CommentDate>
            </CommentBody>
          </CommentBox>
        ))}

        <CommentInput
          placeholder="댓글을 입력하세요"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <SubmitButton onClick={handleCommentSubmit}>댓글 등록</SubmitButton>
      </CommentSection>

    </PageWrapper>

    </>
  );
}

export default CommunityDetail;