import styled from "styled-components";
import ListContent from "./ListContent";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination"; // ✅ MUI에서 가져오기
import { createTheme, ThemeProvider } from "@mui/material/styles";

/*
    실행 전 패키지 설치해주세요!
    npm install @mui/material @emotion/react @emotion/styled


    부모 컴포넌트 호출 예시
    <List type={"이력서"}/>
*/

const ListTitle = styled.h2`
  color: black;
  font-weight: bold;
  font-size: 24px;
  margin-left: 10px;
`;

const ListWrap = styled.div` 
  width: 1280px;
  display: column;
  justify-content: center;
`;

const Content = styled.div`
  margin-top: 18px;
`;

const SubTitle = styled.div`
  width: 1280px;
  height: 64px;
  background-color: #f9fbfc;
  border: 1px solid #d0d0ce;
  border-bottom: none;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Index = styled.p`
  width: 56px;
  color: #6a6a65;
  font-size: 14px;
`;

const Title = styled(Index)`
  width: 536px;
`;

const Date = styled(Index)`
  width: 375px;
`;

const BtnDiv = styled.div`
  width: 66px;
`;

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "black",
          border: "none",
          backgroundColor: "#F5F5F5",
          "&.Mui-selected": {
            backgroundColor: "#FEAD5C",
            color: "#fff",
          },
        },
      },
    },
  },
});

function List({ type }) {
  const [stockList, setStockList] = useState(
    Array.from({ length: 100 }, (_, i) => i + 1) // 더미 데이터 1~47
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const lastPage = Math.ceil(stockList.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentList = stockList.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <ListTitle>{type}</ListTitle>
      <ListWrap>
      <Content>
        <SubTitle>
          <Index>번호</Index>
          <Title>제목</Title>
          <Date>작성일</Date>
          <BtnDiv></BtnDiv>
        </SubTitle>
        
        {currentList.map((item, idx) => (
          <ListContent
            key={idx}
            type={type === "이력서" ? "resume" : "default"}
            index={indexOfFirstItem + idx + 1}
            title={`제목 ${indexOfFirstItem + idx + 1}`}
            date={`2025-06-${(indexOfFirstItem + idx + 1)
              .toString()
              .padStart(2, "0")}`}
          />
        ))}
      </Content>
      <PaginationWrap>
        <ThemeProvider theme={theme}>
        <Pagination
          page={currentPage}
          count={lastPage}
          shape={"rounded"}
          onChange={handlePageChange}
          siblingCount={2} // 현재 페이지 좌우 몇 개 보여줄지
          boundaryCount={1} // 처음과 끝 몇 개 보여줄지
        
        />
      </ThemeProvider>
      </PaginationWrap>
      </ListWrap>
    </>
  );
}

export default List;
