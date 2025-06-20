import styled from "styled-components";
import modifyBtn from "../../img/list/modify.png";
import deleteBtn from "../../img/list/delete.png";

/*
부모 컴포넌트 호출 예시

정보게시판, 예상질문 목록 페이지 - 삭제만 
<ListContent type={"default"} index={123} title={"fdjfksdfdkj1"} date={"1223/22/03"}/>

이력서 목록 페이지 - 수정 / 삭제
<ListContent type={"resume"} index={1} title={1} date={1}/>
*/

const Content = styled.div`
  width: 1280px;
  height: 64px;
  background-color: white;
  border: 1px solid #D0D0CE;
  border-top: none;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Index = styled.p`
  width: 56px;
  overflow: hidden;
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
  display: flex;
  justify-content: space-around;
`;

function ListContent({ type, index, title, date }) {
  return (
    <Content>
      <Index>{index}</Index>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <BtnDiv>
        {type === "resume" && <img src={modifyBtn} alt="수정" />}
        <img src={deleteBtn} alt="삭제" />
      </BtnDiv>
    </Content>
  );
}

export default ListContent;
