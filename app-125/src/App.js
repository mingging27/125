import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Mainpage';
import RecruitListPage from './pages/recruit/RecruitListPage'
import RecruitDetailPage from './pages/recruit/RecruitDetailPage'
import AIRecruitPage from './pages/recruit/AIRecruitPage'
import SupportPolicy from './pages/infoboard/SupportPolicy'
import DigitalEducation from'./pages/infoboard/DigitalEducation'
import EmploymentTrend from './pages/infoboard/EmploymentTrend'
import SeniorJobRecommend from './pages/infoboard/SeniorJobRecommend'
import DigitalEducationDetail from './pages/infoboard/DigitalEducationDetail'
import SeniorJobDetail from './pages/infoboard/SeniorJobDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        {/* 구인/구직 */}
        <Route path='/recruit' element={<RecruitListPage />} />
        <Route path='/recruit/:id' element={<RecruitDetailPage />} />
        <Route path="/recruit/ai" element={<AIRecruitPage />} />

        {/* 정보게시판 */}
        <Route path="/infoboard/support" element={<SupportPolicy />} />
        <Route path="/infoboard/education" element={<DigitalEducation />} />
        <Route path="/infoboard/education/:id" element={<DigitalEducationDetail />} />
        <Route path="/infoboard/trend" element={<EmploymentTrend />} />
        <Route path="/infoboard/senior" element={<SeniorJobRecommend />} />
        <Route path="/infoboard/senior/:id" element={<SeniorJobDetail/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
