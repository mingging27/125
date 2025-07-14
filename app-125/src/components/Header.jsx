import styled from "styled-components";
import searchicon from "../img/Search.png";
import { useNavigate } from "react-router-dom"; 
import { useState } from "react";

const Container = styled.div`
  background-color: white;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 114px;
  z-index: 999;
`;

const Top = styled.div`
  width: 1178px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Appname = styled.h1`
  margin: 0;
  color: #2D66D0;
  font-size: 30px;
  font-weight: 900;
`;

const SearchBox = styled.form`
  width: 370px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #3478F6;
  padding-right: 10px;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 340px;
  border: none;
  padding-left: 21px;
  font-size: 15px;
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

const SearchBtnImg = styled.img`
  width: 30px;
  height: 30px;
`;

const Navigation = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  background-color: white;
  border-top: 1px solid #3478F6;
  border-bottom: 1px solid #3478F6;
  font-size: 20px;
  font-weight: bold;
  color: #2D66D0;
  
`;

const CategoryWrapper = styled.li`
  position: relative;
  width: 190px;
  height: 50px;
`;

const Category = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: white;
    background-color: #2D66D0;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #2D66D0;
  color: white;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  z-index: 1000;
`;

const DropdownContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const DropdownItem = styled.div`
  font-size: 17px;
  font-weight: normal;  
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseOver = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseOut = () => {
    setActiveDropdown(null);
  };

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
        {/* 구인/구직 */}
        <CategoryWrapper onMouseOver={() => handleMouseOver("recruit")} onMouseOut={handleMouseOut}>
          <Category>구인 / 구직</Category>
          {activeDropdown === "recruit" && (
            <Dropdown>
              <DropdownContent>
                <DropdownItem onClick={() => navigate("/recruit")}>
                  • 채용 정보
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/recruit/ai")}>
                  • AI 추천 채용
                </DropdownItem>
              </DropdownContent>
            </Dropdown>
          )}
        </CategoryWrapper>

        <CategoryWrapper>
          <Category>이력서</Category>
        </CategoryWrapper>

        <CategoryWrapper>
          <Category>커뮤니티</Category>
        </CategoryWrapper>

        {/* 정보게시판 */}
        <CategoryWrapper
          onMouseOver={() => handleMouseOver("infoboard")}
          onMouseOut={handleMouseOut}
        >
          <Category onClick={() => navigate("/infoboard/support")}>
            정보게시판
          </Category>
          {activeDropdown === "infoboard" && (
            <Dropdown>
              <DropdownContent>
                <DropdownItem onClick={() => navigate("/infoboard/support")}>
                  • 지원제도
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/infoboard/education")}>
                  • 디지털 기술 교육
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/infoboard/trend")}>
                  • 취업 시장 트렌드
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/infoboard/senior")}>
                  • 중장년 직무 추천
                </DropdownItem>
              </DropdownContent>
            </Dropdown>
          )}
        </CategoryWrapper>


        <CategoryWrapper>
          <Category>마이페이지</Category>
        </CategoryWrapper>

        <CategoryWrapper>
          <Category>로그아웃</Category>
        </CategoryWrapper>
      </Navigation>
    </Container>
  );
}

export default Header;
