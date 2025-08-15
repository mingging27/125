import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResumeList from "./pages/resume/ResumeList";
import Example from "./pages/resume/Example";
import Detail from "./pages/resume/Detail";
import ResumeCreate from "./pages/resume/ResumeCreate";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/Mainpage";
import GlobalStyle from "./Globalstyle";
import RecruitListPage from "./pages/recruit/RecruitListPage";
import RecruitDetailPage from "./pages/recruit/RecruitDetailPage";
import AIRecruitPage from "./pages/recruit/AIRecruitPage";
import DigitalEducation from "./pages/infoboard/DigitalEducation";
import EmploymentTrend from "./pages/infoboard/EmploymentTrend";
import SeniorJobRecommend from "./pages/infoboard/SeniorJobRecommend";
import EmploymentTrendDetail from "./pages/infoboard/EmploymentTrendDetail";
import SeniorJobDetail from "./pages/infoboard/SeniorJobDetail";
import CommunityList from "./pages/community/CommunityList";
import CommunityDetail from "./pages/community/CommunityDetail";
import CommunityWrite from "./pages/community/CommunityWrite";
import MyPageLayout from "./components/mypage/MyPageLayout";
import MyProfile from "./pages/mypage/MyProfile";
import MyApplyHistory from "./pages/mypage/MyApplyHistory";
import MyInterestPost from "./pages/mypage/MyInterestPost";
import MyScrapPost from "./pages/mypage/MyScrapPost";
import ChangePassword from "./pages/mypage/ChangePassword";
import AccountManagement from "./pages/mypage/AccountManagement";
import Edit from "./pages/resume/Edit";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />

        {/* 유저 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 이력서 */}
        <Route path="/resume" element={<ResumeList />} />
        <Route path="/resume/create" element={<ResumeCreate />} />
        <Route path="/resumes/:id" element={<Detail />} />
        <Route path="/resumes/edit/:id" element={<Edit />} />

        {/* 구인/구직 */}
        <Route path="/recruit" element={<RecruitListPage />} />
        <Route path="/recruit/:id" element={<RecruitDetailPage />} />
        <Route path="/recruit/ai" element={<AIRecruitPage />} />

        {/* 커뮤니티 */}
        <Route path="/community" element={<CommunityList />} />
        <Route path="/community/:id" element={<CommunityDetail />} />
        <Route path="/community/write" element={<CommunityWrite />} />

        {/* 정보게시판 */}
        <Route path="/infoboard/education" element={<DigitalEducation />} />
        <Route path="/infoboard/trend" element={<EmploymentTrend />} />
        <Route path="/infoboard/trend/:id" element={<EmploymentTrendDetail />} />
        <Route path="/infoboard/senior" element={<SeniorJobRecommend />} />
        <Route path="/infoboard/senior/:id" element={<SeniorJobDetail />} />

        {/* 마이페이지 */}
        <Route path="/mypage/*" element={<MyPageLayout />}>
          <Route index element={<Navigate to="profile" replace />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="applies" element={<MyApplyHistory />} />
          <Route path="interests" element={<MyInterestPost />} />
          <Route path="scraps" element={<MyScrapPost />} />
          <Route path="account" element={<AccountManagement />} />
          <Route path="password" element={<ChangePassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
