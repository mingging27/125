import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import seniorJobs from "../../data/seniorJobs";
import { Link } from "react-router-dom"; 

const PageWrapper = styled.div`
  padding-top: 140px;
  padding-bottom: 80px;
  max-width: 1178px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const TableWrapper = styled.div`
  border: 1px solid lightgray;
  border-radius: 8px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
`;

const Thead = styled.thead`
  background-color: #f2f2f2;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  color: #888;
  border-bottom: 2px solid #ccc;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #e0e0e0;
`;

const Tr = styled.tr`
  &:hover {
    background-color: #f9f9f9;
  }
`;


const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
`;

function SeniorJobRecommend() {
  return (
    <>
      <Header />
      <PageWrapper>
        <Title>중장년 직무 추천</Title>
        <TableWrapper>
          <Table>
            <Thead>
              <tr>
                <Th>번호</Th>
                <Th>추천 직무</Th>
                <Th>업데이트 날짜</Th>
              </tr>
            </Thead>
            <tbody>
              {seniorJobs.map((item, index) => (
                <Tr key={item.id}>
                  <Td>
                    <StyledLink to={`/infoboard/senior/${item.id}`}>
                      {index + 1}
                    </StyledLink>
                  </Td>
                  <Td>
                    <StyledLink to={`/infoboard/senior/${item.id}`}>
                      {item.title}
                    </StyledLink>
                  </Td>
                  <Td>
                    <StyledLink to={`/infoboard/senior/${item.id}`}>
                      {item.date}
                    </StyledLink>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </PageWrapper>
    </>
  );
}

export default SeniorJobRecommend;
