// src/components/Header.jsx

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import searchicon from "../img/Search.png";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

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

const AppLogo = styled.img`
  width: 180px;
  margin-bottom: 12px;
  cursor: pointer;
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
  margin: 0;
  background-color: white;
  border-top: 1px solid #3478F6;
  border-bottom: 1px solid #3478F6;
  font-size: 20px;
  font-weight: bold;
  color: #2D66D0;
`;

const Category = styled.li`
  width: 190px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #2D66D0;
  }
`;

function Header() {
  const navigate = useNavigate();

  // 토큰 존재 여부로 로그인 상태 판단
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 검색어 관리 상태 
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token"); // 저장한 토큰 키 이름 확인
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = async () => {
    try {
      // 서버 로그아웃 API 호출 (필요시)
      const response = await fetch("http://127.0.0.1:3002/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();

      if (response.ok) {
        alert(data.message || "로그아웃 되었습니다.");
        localStorage.removeItem("token"); // 토큰 삭제
        setIsLoggedIn(false);
        navigate("/"); // 로그아웃 후 메인 페이지로 이동
      } else {
        alert(data.message || "로그아웃 실패");
      }
    } catch (error) {
      alert("로그아웃 중 오류가 발생했습니다.");
      console.error(error);
    }
  };

  // 검색 제출 핸들러 추가
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchKeyword.trim() === "") return;
    navigate(`/community?search=${encodeURIComponent(searchKeyword.trim())}`);
    setSearchKeyword("");
  };

  return (
    <Container>
      <Top>
        <AppLogo src={logo} onClick={() => navigate("/")} />
        <SearchBox onSubmit={handleSearch}>
          <SearchInput
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <SearchBtn type="submit">
            <SearchBtnImg src={searchicon} alt="검색" />
          </SearchBtn>
        </SearchBox>
      </Top>

      <Navigation>
        <Category onClick={() => navigate("/recruit")}>구인 / 구직</Category>
        <Category onClick={() => navigate("/resume")}>이력서</Category>
        <Category onClick={() => navigate("/community")}>커뮤니티</Category>
        <Category onClick={() => navigate("/infoboard/trend")}>정보게시판</Category>
        <Category onClick={() => navigate("/mypage")}>마이페이지</Category>

        {isLoggedIn ? (
          <Category onClick={handleLogout} style={{ cursor: "pointer" }}>
            로그아웃
          </Category>
        ) : (
          <Category onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
            로그인
          </Category>
        )}
      </Navigation>
    </Container>
  );
}

export default Header;