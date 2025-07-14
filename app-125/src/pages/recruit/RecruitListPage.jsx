import React from 'react';
import Header from '../../components/Header'; 
import styled from 'styled-components';
import mockData from '../../data/mockRecruitData';
import RecruitCard from '../../components/recruit/RecruitCard';
import RecruitFilter from '../../components/recruit/RecruitFilter';

const PageWrapper = styled.div`
  padding-top: 114px; 
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const RecruitListPage = () => {
  return (
    <>
      <Header /> 
      <PageWrapper>
        <Container>
          <h2>채용 정보</h2>
          <RecruitFilter />
          {mockData.map((post) => (
            <RecruitCard key={post.job_post_id} post={post} />
          ))}
        </Container>
      </PageWrapper>
    </>
  );
};

export default RecruitListPage;
