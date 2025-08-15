import styled from "styled-components";
import ListContent from "./ListContent";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination"; // ✅ MUI에서 가져오기
import { createTheme, ThemeProvider } from "@mui/material/styles";

/*
    실행 전 패키지 설치해주세요!
    npm install @mui/material @emotion/react @emotion/styled


    부모 컴포넌트 호출 예시
    <List type={"이력서"} data={리스트 형태의 데이터}/>
*/

const PositionWrap = styled.div `
`;

const ListTitle = styled.h2`
  color: black;
  font-weight: bold;
  font-size: 24px;
  margin-left: 10px;
  margin-bottom: 30px;
`;

const ListWrap = styled.div` 
  width: 1100px;
  display: column;
  justify-content: center;
`;

const Content = styled.div`
  margin-top: 18px;
`;

const SubTitle = styled.div`
  width: 1100px;
  height: 50px;
  background-color: #f9fbfc;
  border: 1px solid #d0d0ce;
  border-bottom: none;
  padding-left: 7px;
  margin: 0;

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

function List({ type, data }) {
  const [stockList, setStockList] = useState(data);

  useEffect(() => {
  setStockList(data);
}, [data]);

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
      <PositionWrap>
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
  key={item.id}
  type={type === "이력서" ? "resume" : "default"}
  index={indexOfFirstItem + idx + 1} // 이건 화면 표시용
  id={item.id} // 삭제 API용 id 전달
  title={item.title}
  date={item.date}
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
      </PositionWrap>
    </>
  );
}

export default List;
