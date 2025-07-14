import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 24px;
  font-size: 17px;
  margin-bottom: 40px; /* 리스트와의 간격 */
`;

const TabMenu = styled.div`
  display: flex;
  gap: 40px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
`;

const TabItem = styled.div`
  font-weight: bold;
  cursor: pointer;
  padding-bottom: 10px;
  font-size: 18px;
  border-bottom: ${(props) => (props.active ? '2px solid #000' : 'none')};
`;

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
`;

const Column = styled.div`
  min-width: 110px;
  display: flex;
  flex-direction: column;
  gap: 14px; /* 항목 간 넉넉한 여백 */
`;

const FilterOption = styled.span`
  cursor: pointer;
  color: ${(props) => (props.active ? '#2962f6' : '#000')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  font-size: 17px;

  &:hover {
    text-decoration: underline;
  }
`;

const RecruitFilter = () => {
  const [activeTab, setActiveTab] = useState('직무별');
  const [selected, setSelected] = useState({
    job: '직무 전체',
    major: '전공 전체',
  });

  const handleSelect = (type, value) => {
    setSelected((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <FilterContainer>
      <TabMenu>
        <TabItem active={activeTab === '직무별'} onClick={() => setActiveTab('직무별')}>직무별</TabItem>
        <TabItem active={activeTab === '전공별'} onClick={() => setActiveTab('전공별')}>전공별</TabItem>
      </TabMenu>

      {activeTab === '직무별' && (
        <GridWrapper>
          {[1, 2, 3, 4, 5].map((_, idx) => (
            <Column key={idx}>
              <FilterOption
                active={selected.job === '직무 전체'}
                onClick={() => handleSelect('job', '직무 전체')}
              >
                직무 전체
              </FilterOption>
              <FilterOption
                active={selected.job === '인사.HR'}
                onClick={() => handleSelect('job', '인사.HR')}
              >
                인사.<b>HR</b>
              </FilterOption>
              <FilterOption
                active={selected.job === 'AI.개발.데이터'}
                onClick={() => handleSelect('job', 'AI.개발.데이터')}
              >
                <b>AI</b>.개발.데이터
              </FilterOption>
            </Column>
          ))}
        </GridWrapper>
      )}

      {activeTab === '전공별' && (
        <GridWrapper>
          {[1, 2, 3, 4, 5].map((_, idx) => (
            <Column key={idx}>
              <FilterOption
                active={selected.major === '전공 전체'}
                onClick={() => handleSelect('major', '전공 전체')}
              >
                전공 전체
              </FilterOption>
              <FilterOption
                active={selected.major === '컴퓨터공학'}
                onClick={() => handleSelect('major', '컴퓨터공학')}
              >
                컴퓨터공학
              </FilterOption>
              <FilterOption
                active={selected.major === 'AI/데이터 전공'}
                onClick={() => handleSelect('major', 'AI/데이터 전공')}
              >
                AI/데이터 전공
              </FilterOption>
            </Column>
          ))}
        </GridWrapper>
      )}
    </FilterContainer>
  );
};

export default RecruitFilter;
