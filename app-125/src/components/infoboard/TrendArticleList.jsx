// src/components/TrendArticleList.jsx
import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

const Card = styled.div`
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
  text-align: center;
  padding: 20px 16px;
`;

const Thumbnail = styled.div`
  background-color: #d9d9d9;
  height: 100px;
  border-radius: 16px;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const dummyArticles = [
  { id: 1, title: "기사 제목" },
  { id: 2, title: "기사 제목" },
  { id: 3, title: "기사 제목" },
  { id: 4, title: "기사 제목" },
  { id: 5, title: "기사 제목" },
  { id: 6, title: "기사 제목" },
  { id: 7, title: "기사 제목" },
  { id: 8, title: "기사 제목" },
  { id: 9, title: "기사 제목" }
];

function TrendArticleList() {
  return (
    <Grid>
      {dummyArticles.map(article => (
        <Card key={article.id}>
          <Thumbnail />
          <Title>{article.title}</Title>
        </Card>
      ))}
    </Grid>
  );
}

export default TrendArticleList;
