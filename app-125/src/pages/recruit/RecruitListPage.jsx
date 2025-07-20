import React from 'react';
import Header from '../../components/Header'; 
import styled from 'styled-components';
import mockData from '../../data/mockRecruitData';
import RecruitCard from '../../components/recruit/RecruitCard';
import RecruitFilter from '../../components/recruit/RecruitFilter';

const PageWrapper = styled.div`
  padding-top: 140px;
  padding-bottom: 80px;
  max-width: 1178px; /* ✅ 다른 페이지와 동일한 너비 */
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

const RecruitListPage = () => {
  return (
    <>
      <Header /> 
      <PageWrapper>
        <h2>채용 정보</h2>
        <RecruitFilter />
        {mockData.map((post) => (
          <RecruitCard key={post.job_post_id} post={post} />
        ))}
      </PageWrapper>
    </>
  );
};

export default RecruitListPage;