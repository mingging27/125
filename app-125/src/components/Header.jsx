import styled from "styled-components";
import searchicon from "../img/Search.png";

const Container = styled.div`
  background-color: white;
  width: 100vw;
  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;


  height: 154px;
`; 

const Top = styled.div `
  width: 1278px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Appname = styled.h1 `
  margin: 0;
  color: #2D66D0;
  font-size: 32px;
  font-weight: 900;
`;

const SearchBox = styled.form`
  width: 466px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #3478F6;
  padding-right: 30px;
`;

const SearchInput = styled.input `
  height: 50px;
  width: 380px;
  border: none;
  padding-left: 30px;

  /* 폰트 */
  font-size: 20px;
  font-weight: bold;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #BDBDBD;
  }
`;

const SearchBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBtnImg = styled.img `
  width: 30px;
  height: 30px;
`;

const Navigation = styled.ul `
  width: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  background-color: white;
  border-top: 1px solid #3478F6;
  border-bottom: 1px solid #3478F6;

  /* 폰트 */
  font-size: 28px;
  font-weight: bold;
  color: #2D66D0;

`;

const Category = styled.li `
  width: 213px;
  height: 64px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: white;
    background-color: #2D66D0;
  }
`;

function Header() {
    return (
    <Container>
      <Top>
        <Appname>/*125 일이요!*/</Appname>
        <SearchBox>
          <SearchInput type="text" placeholder="검색어를 입력하세요" />
          <SearchBtn type="submit">
            <SearchBtnImg src={searchicon} alt="검색" />
          </SearchBtn>
        </SearchBox>
      </Top>
      <Navigation>
        <Category>구인 / 구직</Category>
        <Category>이력서</Category>
        <Category>커뮤니티</Category>
        <Category>정보게시판</Category>
        <Category>마이페이지</Category>
        <Category>로그아웃</Category>
      </Navigation>
    </Container>
  );
}

export default Header;