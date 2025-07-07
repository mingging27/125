import React from 'react';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Select from './pages/interview/Select';
import Result from './pages/interview/Result';
import QuestionList from './pages/interview/QuestionList';
import RecommendList from './pages/resume/RecommendList';
import ResumeList from './pages/resume/ResumeList';


function App() {

  return (
    <div className="App">
      <Header/>
      <ResumeList/>
    </div>
  );
}

export default App;
