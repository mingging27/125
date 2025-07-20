import React, { useState } from "react";
import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-top :0;
  margin-bottom: 40px;
`;

const ControlBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const LeftActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const DeleteButton = styled.button`
  background-color: #ECFFEE;
  color: #5EC27D;
  font-weight: bold;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
`;

const SearchButton = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #444;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;


const RightActions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Select = styled.select`
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  color: #444;
`;

const Input = styled.input`
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  color: #444;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

const Thead = styled.thead`
  background-color: #f5f5f5;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px 8px;
  color: #444;
  border-bottom: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 12px 8px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  color: #444;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TrashButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #888;

  &:hover {
    color: red;
  }
`;

const mockData = [
  {
    id: 1,
    title: "요즘 뜨는 직무를 알아보자!",
    writer: "김푸짐",
    category: "정보 게시판",
    date: "2023/01/05",
  },
  {
    id: 2,
    title: "직무 분석을 통해 살펴본 중장년 노동시장의 현황과 전망",
    writer: "김푸짐",
    category: "정보 게시판",
    date: "2023/01/05",
  },
  {
    id: 3,
    title: "50대 취업 후기",
    writer: "김푸짐",
    category: "커뮤니티",
    date: "2023/01/05",
  },
];

function MyScrapPost() {
  const [posts, setPosts] = useState(mockData);

  return (
    <Wrapper>
      <Title>스크랩한 게시물</Title>
      <ControlBar>
        <LeftActions>
          <DeleteButton>선택 삭제</DeleteButton>
        </LeftActions>
        <RightActions>
        <Select>
            <option value="">카테고리</option>
            <option value="커뮤니티">커뮤니티</option>
            <option value="정보 게시판">정보 게시판</option>
        </Select>
        <SearchButton>검색</SearchButton>
        </RightActions>
      </ControlBar>

      <Table>
        <Thead>
          <tr>
            <Th>
              <input type="checkbox" />
            </Th>
            <Th>게시물 제목</Th>
            <Th>글쓴이</Th>
            <Th>카테고리</Th>
            <Th>작성일</Th>
            <Th></Th>
          </tr>
        </Thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <Td>
                <input type="checkbox" />
              </Td>
              <Td>{post.title}</Td>
              <Td>{post.writer}</Td>
              <Td>{post.category}</Td>
              <Td>{post.date}</Td>
              <Td>
                <TrashButton>
                  <FiTrash2 size={18} />
                </TrashButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}

export default MyScrapPost;
