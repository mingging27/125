import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import supportPolicies from "../../data/supportPolicies";
import trashIcon from "../../img/trash.png";

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

const TrashIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

function SupportPolicyPage() {
  return (
    <>
      <Header />
      <PageWrapper>
        <Title>지원제도</Title>
        <TableWrapper>
          <Table>
            <Thead>
              <tr>
                <Th>번호</Th>
                <Th>예상 질문 제목</Th>
                <Th>작성일</Th>
              </tr>
            </Thead>
            <tbody>
              {supportPolicies.map((item, index) => (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{item.title}</Td>
                  <Td>{item.date}</Td>
                  <Td>
                    <TrashIcon src={trashIcon} alt="삭제" />
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

export default SupportPolicyPage;
