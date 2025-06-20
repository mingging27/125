import styled from "styled-components";
import ListContent from "./ListContent";

/*
    부모 컴포넌트 호출 예시
    <List type={"이력서"}/>
     
    List 컴포넌트의 type = 이력서 / 지원제도 / 예상 질문 (목록 제목으로 들어가요!)
*/ 

const ListTitle = styled.h2 `
    color: black;
    font-weight: bold;
    font-size: 24px;
    margin-left: 10px;
`;

const Content = styled.div`
    margin-top: 18px;
`;

const SubTitle = styled.div`
  width: 1280px;
  height: 64px;
  background-color: #F9FBFC;
  border: 1px solid #D0D0CE;
  border-bottom: none;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Index = styled.p`
  width: 56px;
  color: #6A6A65;
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

function List({type}) {
    return (
        <>
            <ListTitle>{type}</ListTitle>
            <Content>
                <SubTitle>
                <Index>번호</Index>
                <Title>제목</Title>
                <Date>작성일</Date>
                <BtnDiv></BtnDiv>
            </SubTitle>
            <ListContent type={type=="이력서"? "resume" : "default"} index={1} title={1} date={1}/>
            </Content>
            
        </>
    );
};

export default List;
