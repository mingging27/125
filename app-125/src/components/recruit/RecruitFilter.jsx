import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 32px 24px;
  margin-bottom: 40px;
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 24px;
  margin-top:0px;
  font-weight: 600;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, auto));
  gap: 16px;
`;

const FilterButton = styled.button`
  padding: 10px 16px;
  font-size: 16px;
  border: 2px solid ${(props) => (props.active ? '#2962f6' : '#ddd')};
  background-color: ${(props) => (props.active ? '#f9fcffff' : '#fff')};
  color: ${(props) => (props.active ? '#2962f6' : '#333')};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const jobCategories = [
  '직무 전체',
  '기획·경영',
  '마케팅·영업',
  '회계·인사·지원',
  'IT·데이터',
  '디자인·콘텐츠',
  '생산·물류',
  '교육·의료·연구',
  '공공·금융',
];

const RecruitFilter = () => {
  const [selectedJob, setSelectedJob] = useState('직무 전체');

  return (
    <FilterContainer>
      <Title>직무 카테고리</Title>
      <Grid>
        {jobCategories.map((job) => (
          <FilterButton
            key={job}
            active={selectedJob === job}
            onClick={() => setSelectedJob(job)}
          >
            {job}
          </FilterButton>
        ))}
      </Grid>
    </FilterContainer>
  );
};

export default RecruitFilter;
