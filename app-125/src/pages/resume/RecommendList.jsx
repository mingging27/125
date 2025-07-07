import React from "react";
import styled from "styled-components";
import Recommend from "../../components/interview/Recommend";

const Content = styled.div`
    height: 1800px;
    padding-top: 100px;
    background-color: #FDF8F4;

    display: flex;
    justify-content: center;
`;

const PositionWrap = styled.div `
`;

const Title = styled.h2 `
    color: #000000;
    font-weight: bold;
    font-size: 24px;
    margin-top: 103px;
    margin-bottom: 19px;
`;

function RecommendList() {
  const recommendData = [
    {
      type: "Strength",
      title: "철저한 계획",
      content: "일의 우선순위를 정하고 체계적으로 계획하는 것을 중요하게 생각합니다.",
    },
    {
      type: "Strength",
      title: "꾸준한 피드백",
      content: "항상 피드백을 요청하고, 개선점을 바로 반영하려고 노력합니다.",
    },
    {
      type: "Weakness",
      title: "완벽주의",
      content: "작은 부분까지 신경쓰다 보니 일정이 지연되는 경우가 있습니다.",
      solution: "중요도에 따라 타협하고, 일정 내 마무리를 목표로 작업합니다.",
    },
    {
      type: "Weakness",
      title: "낮은 발표 자신감",
      content: "사람들 앞에서 발표할 때 긴장하여 말이 빨라지는 편입니다.",
      solution: "연습 횟수를 늘리고, 발표 내용을 스크립트로 정리해 대비하고 있습니다.",
    },
  ];

  // 필터링
  const strengthList = recommendData.filter(item => item.type === "Strength");
  const weaknessList = recommendData.filter(item => item.type === "Weakness");

  return (
    <Content>
        <PositionWrap>
      <Title>강점</Title>
      {strengthList.map((item, idx) => (
        <Recommend
          key={`strength-${idx}`}
          type={item.type}
          title={item.title}
          content={item.content}
        />
      ))}

      <Title>보완할 점</Title>
      {weaknessList.map((item, idx) => (
        <Recommend
          key={`weakness-${idx}`}
          type={item.type}
          title={item.title}
          content={item.content}
          solution={item.solution}
        />
      ))}
      </PositionWrap>
    </Content>
  );
}

export default RecommendList;
