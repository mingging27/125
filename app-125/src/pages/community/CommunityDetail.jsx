import axios from "../../api/axiosInstance";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import Header from "../../components/Header";
import DeleteConfirmModal from "../../modal/DeleteConfirmModal";
import { FiMoreHorizontal, FiEdit, FiTrash2 } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import profileImg from "../../img/profile.png";


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

const MoreMenuWrapper = styled.div`
  position: relative;
  margin-top: 30px;
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 28px;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

const MenuItem = styled.button`
  width: 80px;
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  padding: 10px 14px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
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

const ReactionIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  color: ${props => (props.liked ? "red" : "#888")};
`;

const ScrapIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  color: ${props => (props.scrapped ? "#f2a65a" : "#888")};
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
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(false);
  const [scrapped, setScrapped] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // 게시글 불러오기
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/api/community/${id}`);
        setPost(res.data.post);
        setComments(res.data.comments || []);
      } catch (error) {
        console.error("게시글 불러오기 실패:", error);
      }
    };

    const fetchScrapStatus = async () => {
      try {
        const res = await axios.get("/api/mypage/scraps");
        const isScrapped = res.data.scraps.some(
          (scrap) => scrap.type === "community" && scrap.id === parseInt(id)
        );
        setScrapped(isScrapped);
      } catch (error) {
        console.error("스크랩 여부 확인 실패:", error);
      }
    };

    fetchPost();
    fetchScrapStatus();
  }, [id]);

  // 좋아요 토글
  const toggleLike = async () => {
    try {
      if (liked) {
        await axios.delete(`/api/community/${id}/like`);
      } else {
        await axios.post(`/api/community/${id}/like`);
      }
      setLiked((prev) => !prev);
    } catch (error) {
      console.error("좋아요 요청 실패:", error);
    }
  };

  // 스크랩 토글
  const toggleScrap = async () => {
    try {
      if (scrapped) {
        await axios.delete(`/api/mypage/scraps/${id}?type=community`);
        setScrapped(false);
      } else {
        await axios.post(`/api/community/${id}/scrap`);
        setScrapped(true);
      }
    } catch (error) {
      console.error("스크랩 요청 실패:", error);
    }
  };

  // 댓글 등록
  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return;
    try {
      const res = await axios.post(`/api/community/${id}/comments`, {
        content: newComment,
      });
      setComments((prev) => [...prev, res.data]);
      setNewComment("");
    } catch (error) {
      console.error("댓글 등록 실패:", error);
    }
  };

  // 게시글 삭제
  const handleDelete = async () => {
    try {
      await axios.get(`/api/community/${id}/delete`);
      navigate("/community");
    } catch (error) {
      console.error("삭제 실패:", error);
    }
  };
  const handleClose = () => setShowDeleteModal(false);

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
              <span>{post.views ?? 0}</span>
              <span>|</span>
              <span>{post.created_at?.slice(0, 10)}</span>
            </MetaInfo>
          </div>

          <MoreMenuWrapper>
            <MoreButton onClick={() => setShowMenu((prev) => !prev)}>
              <FiMoreHorizontal />
            </MoreButton>
            {showMenu && (
              <DropdownMenu>
                <MenuItem
                  onClick={() =>
                    navigate(`/community/${id}/edit`, { state: post })
                  }
                >
                  <FiEdit /> 수정
                </MenuItem>
                <MenuItem onClick={() => setShowDeleteModal(true)}>
                  <FiTrash2 /> 삭제
                </MenuItem>
              </DropdownMenu>
            )}
          </MoreMenuWrapper>
        </TitleWrapper>

        <Divider />
        {post.thumbnail && <Thumbnail src={post.thumbnail} />}
        <Content>{post.content}</Content>


        <ReactionBar>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <ReactionIcon liked={liked} onClick={toggleLike}>
              {liked ? <AiFillHeart /> : <AiOutlineHeart />}
            </ReactionIcon>
            <span style={{ fontSize: "14px", color: "#666" }}>{post.like_count}</span>
          </div>

          <ScrapIcon scrapped={scrapped} onClick={toggleScrap}>
            {scrapped ? <BsBookmarkFill /> : <BsBookmark />}
          </ScrapIcon>
        </ReactionBar>


        <Divider />
        <CommentSection>
          <h4>댓글</h4>
          {comments.map((comment) => (
            <CommentBox key={comment.comment_id}>
              <CommentProfile src={profileImg} />
              <CommentBody>
                <CommentAuthor>유저 {comment.user_id}</CommentAuthor>
                <CommentText>{comment.content}</CommentText>
                <CommentDate>{comment.created_at?.slice(0, 10)}</CommentDate>
              </CommentBody>
            </CommentBox>
          ))}
          <CommentInput
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글을 입력하세요"
          />
          <SubmitButton onClick={handleCommentSubmit}>댓글 등록</SubmitButton>
        </CommentSection>
      </PageWrapper>

      {showDeleteModal && (
        <DeleteConfirmModal
            title="정말 삭제하시겠습니까?"
            message="삭제된 게시글은 복구할 수 없습니다."
            onClose={handleClose}
            onConfirm={handleDelete}
        />
      )}
    </>
  );
}

export default CommunityDetail;
