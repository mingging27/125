import styled from "styled-components";
import Question from "../../components/interview/Question";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Content = styled.div`
  height: 3800px;
  padding-top: 160px;
  background-color: #fdfcfa;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div``;

const Title = styled.h2`
  color: #000000;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 61px;
`;

const ListContentMiddle = styled.div`
  width: 1250px;
  border-bottom: 1px solid #a8a8a8;
  padding: 30px 30px;
`;

const ListContentTop = styled(ListContentMiddle)`
  border-top: 3px solid #000;
`;

const ListContentBottom = styled(ListContentMiddle)`
  border-bottom: 3px solid #000;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  margin: 0;
  margin-bottom: 34px;
`;

const Wrap = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
`;

const BlockWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.h4`
  width: 50px;
  font-size: 18px;
  color: #b1b5c3;
  margin: 0;
  margin-right: 32px;
`;

const Label2 = styled(Label)`
  width: 100px;
`;

const Label3 = styled(Label)`
  width: 67px;
`;

const Text = styled.p`
  font-size: 18px;
  color: #777e90;
  margin: 0;
`;

const Text2 = styled(Text)`
  /* 회원 정보 앞에 나오는 내용들 너비 조정 -> 뒤 내용 위치 맞춤 */
  width: 222px;
`;

const BoldText = styled(Text)`
  font-weight: bold;
  margin-bottom: 15px;
`;

const AITitle = styled.h2`
  font-size: 50px;
  margin: 75px 0 24px 0;

  background: linear-gradient(to right, #2d66d0, #5ec27d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* 크로스 브라우징용 */
  background-clip: text;
  text-fill-color: transparent;
`;

const AIDescription = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const AIDescription2 = styled(AIDescription)`
  margin-top: 122px;
  margin-bottom: 64px;
`;

const BoxWrap = styled.div`
  display: flex;
`;

const Weakness = styled.div`
  width: 622px;
  height: 547px;
  position: relative;
  border-radius: 50px;
  background: white;

  position: relative;
  margin-top: 43px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(to top right, #2d66d0, #5ec27d);
    border-radius: 55px;
  }
`;

const Strength = styled(Weakness)`
  margin-left: 54px;

  &::before {
    background: linear-gradient(to bottom right, #5ec27d, #fead5c);
  }
`;

const KeywordBox = styled(Weakness)`
  width: 1298px;
  min-height: 400px;
  &::before {
    background: linear-gradient(to top right, #2d66d0, #fead5c);
  }
`;

const KeywordWrap = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  margin-top: 150px;
`;

const Keyword = styled.div`
  position: absolute;
  font-weight: bold;
  cursor: default;
  white-space: nowrap;
`;

const Activity = styled(Weakness)`
  width: 1298px;
  min-height: 575px;

  &::before {
    background: linear-gradient(to bottom, #2d66d0, #5ec27d);
  }
`;

const BoxTitleDiv = styled.div`
  position: absolute;
  top: 23px;
  left: 50px;
`;

const Line = styled.div`
  width: 538px;
  border-bottom: 1px solid #000;
  position: absolute;
  top: 158px;
`;

const Line2 = styled(Line)`
  width: 1227px;
  top: 138px;
`;

const PositionWrap = styled.div``;

const BoxTitle = styled.h3`
  font-size: 32px;
  margin: 0;
`;

const BoxDescription = styled.p`
  font-size: 18px;
  color: #777e90;
`;

const BoxList = styled.ul`
  padding: 0;
  padding-left: 20px;
  margin-top: 180px;
`;

const BoxList2 = styled(BoxList)`
  margin: 0;
`;

const BoxContent = styled.li`
  margin-bottom: 50px;
`;

const BoxContent2 = styled(BoxContent)`
  margin: 0;
`;

const BoxSubtitle = styled.h4`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: bold;
`;

const BoxSubtitle2 = styled(BoxSubtitle)`
  margin: 0;
  margin-bottom: 30px;
`;

const BoxText = styled.p``;

const BoxRecommend = styled.p`
  font-size: 20px;
  color: red;
  font-weight: bold;
`;

const ActivityBlock = styled.div`
  height: 360px;
  margin-top: 180px;
  width: 370px;
  padding: 0 30px 0 30px;
  border-right: 1px solid #a8a8a8;

  &:last-child {
    border: none;
  }
`;

const Btn = styled.button`
  /*버튼 디자인*/
  width: 64px;
  height: 60px;
  border: none;
  background-color: #2d66d0;
  border-radius: 30px;
  box-shadow: inset 0px 2px 4px 0px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: center;
  align-items: center;

  /*폰트*/
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

const BtnDiv = styled.div`
  width: 148px;
  display: flex;
  justify-content: space-between;
`;

const BtnDiv2 = styled(BtnDiv)`
  margin-top: 60px;
  width: 1300px;
`;

//QnA
const QList = styled.div`
  height: 1600px;
  position: relative;
`;

function Detail() {
  const { id } = useParams();
  const [resumeData, setResumeData] = useState(null);
  const [feedbackData, setFeedbackData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("로그인이 필요합니다.");
      return;
    }

    const fetchData = async () => {
      try {
        // 1) 이력서 데이터
        const resumeRes = await fetch(`http://127.0.0.1:3002/api/resumes/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!resumeRes.ok) {
          if (resumeRes.status === 401) {
            setError("인증 실패. 다시 로그인 해주세요.");
          } else {
            setError("이력서 데이터를 불러오는데 실패했습니다.");
          }
          return;
        }

        const resumeJson = await resumeRes.json();
        setResumeData(resumeJson.resume);

        // 2) AI 피드백
        const feedbackRes = await fetch(`http://127.0.0.1:3002/api/aiFeedback`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (!feedbackRes.ok) {
          setError("AI 피드백을 불러오는데 실패했습니다.");
          return;
        }

        const feedbackJson = await feedbackRes.json();
        setFeedbackData(feedbackJson.feedback);
      } catch (e) {
        setError("네트워크 오류가 발생했습니다.");
        console.error(e);
      }
    };

    fetchData();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!resumeData) return <div>로딩중...</div>;

  // 글자 크기 범위
  const MAX_FONT = 56;
  const MIN_FONT = 16;

  // 박스 크기 (KeywordWrap에 맞춤)
  const BOX_WIDTH = 1200;
  const BOX_HEIGHT = 200;

  function getFontSize(importance) {
    return MIN_FONT + ((importance - 1) / 4) * (MAX_FONT - MIN_FONT);
  }

  const placed = [];

  function doesOverlap(x, y, w, h) {
    return placed.some(({ left, top, width, height }) => x < left + width && x + w > left && y < top + height && y + h > top);
  }

  const keywords =
    feedbackData?.recommended_keywords?.split(",").map((word) => ({
      word: word.trim(),
      importance: Math.floor(Math.random() * 5) + 1,
    })) || [];

  const placedKeywords = [];

  keywords.forEach(({ word, importance }) => {
    const fontSize = getFontSize(importance);
    const width = word.length * fontSize * 0.6; // 너비 계산
    const height = fontSize + 4; // 높이 계산

    let tries = 0;
    let left, top;

    do {
      left = Math.random() * (BOX_WIDTH - width);
      top = Math.random() * (BOX_HEIGHT - height);
      tries++;
    } while (doesOverlap(left, top, width, height) && tries < 100);

    if (tries < 100) {
      placed.push({ left, top, width, height });
      placedKeywords.push({ word, left, top, fontSize });
    } else {
      // 실패 시 중앙 배치 또는 그냥 넣기
      placedKeywords.push({ word, left: BOX_WIDTH / 2, top: BOX_HEIGHT / 2, fontSize: MIN_FONT });
    }
  });

  return (
    <>
      <Content>
        <List>
          <Title>{resumeData.resume_title}</Title>
          <ListContentTop>
            <Subtitle>회원 정보</Subtitle>
            <Wrap>
              <Wrap>
                <Label>이름</Label>
                <Text2>ㅇㅇㅇ</Text2>
              </Wrap>
              <Wrap>
                <Label2>나이 ∙ 성별</Label2>
                <Text>22 ∙ 여</Text>
              </Wrap>
            </Wrap>
            <Wrap>
              <Label>주소</Label>
              <Text2>서울특별시 도봉구 도봉동</Text2>
            </Wrap>
            <Wrap>
              <Wrap>
                <Label>휴대폰</Label>
                <Text2>010-0000-0000</Text2>
              </Wrap>
              <Wrap>
                <Label>이메일</Label>
                <Text>duksung@gmail.com</Text>
              </Wrap>
            </Wrap>
          </ListContentTop>
          <ListContentMiddle>
            <Subtitle>학력 정보</Subtitle>
            <BoldText>{resumeData.enrollment_status}</BoldText>
          </ListContentMiddle>
          <ListContentMiddle>
            <Subtitle>자격증</Subtitle>
            {resumeData.certificates.map((cert, idx) => (
              <Wrap key={idx}>
                <Label2>{cert.acquisition_year}</Label2>
                <Text>{cert.certificate_name}</Text>
              </Wrap>
            ))}
          </ListContentMiddle>
          <ListContentMiddle>
            <Subtitle>자기소개</Subtitle>
            <Wrap>
              <Text>{resumeData.self_introduction}</Text>
            </Wrap>
          </ListContentMiddle>
          <ListContentBottom>
            <Subtitle>희망 근무 조건</Subtitle>
            <Wrap>
              <Label3>근무지</Label3>
              <Text>{resumeData.desired_location}</Text>
            </Wrap>
            <Wrap>
              <Label3>업직종</Label3>
              <Text>{resumeData.desired_job_category}</Text>
            </Wrap>
            <Wrap>
              <Label3>근무형태</Label3>
              <Text>{resumeData.career_type}</Text>
            </Wrap>
            <Wrap>
              <Label3>근무기간</Label3>
              <Text>{resumeData.desired_work_duration}</Text>
            </Wrap>
            <Wrap>
              <Label3>근무기간</Label3>
              <Text>
                {resumeData.preferredDays.map((d, i) => (
                  <span key={i}>{d.day} </span>
                ))}
              </Text>
            </Wrap>
          </ListContentBottom>
        </List>

        <AITitle>AI의 추천</AITitle>
        <AIDescription>
          ㅇㅇㅇ님의 희망 직무를 바탕으로 이력서의 개선 포인트를 AI가 분석했어요.
          <br />더 나은 이력서 작성을 위한 힌트를 얻어보세요!
        </AIDescription>

        <QList>
          <Title>예상 질문</Title>
          {feedbackData?.expected_questions?.map((question, idx) => (
            <Question key={idx} question={question} answer={feedbackData.model_answers?.[idx] || ""} />
          ))}
        </QList>

        <BoxWrap>
          <Weakness>
            <BoxTitleDiv>
              <BoxTitle>약점</BoxTitle>
              <BoxDescription>
                이력서에서 일부 오류가 발견되었어요.
                <br />
                이런 작은 실수도 신뢰도에 영향을 줄 수 있으니, 꼭 수정해보세요!
              </BoxDescription>
            </BoxTitleDiv>
            <Line />
            <PositionWrap>
              <BoxList>
                <BoxContent>
                  <BoxText>{feedbackData?.weaknesses}</BoxText>
                </BoxContent>
              </BoxList>
            </PositionWrap>
          </Weakness>

          <Strength>
            <BoxTitleDiv>
              <BoxTitle>강점</BoxTitle>
              <BoxDescription>이런 부분들을 보완하면 더 돋보이는 이력서를 만들 수 있어요!</BoxDescription>
            </BoxTitleDiv>
            <Line />
            <PositionWrap>
              <BoxList>
                <BoxContent>
                  <BoxText>{feedbackData?.strengths}</BoxText>
                </BoxContent>
              </BoxList>
            </PositionWrap>
          </Strength>
        </BoxWrap>
        <KeywordBox>
          <BoxTitleDiv>
            <BoxTitle>추천 키워드</BoxTitle>
            <BoxDescription>아래 키워드를 자연스럽게 반영하면, 이력서의 매력도를 높이고 채용 담당자에게 강한 인상을 줄 수 있어요.</BoxDescription>
          </BoxTitleDiv>
          <Line2></Line2>
          <KeywordWrap>
            {placedKeywords.map(({ word, left, top, fontSize }, idx) => (
              <Keyword
                key={idx}
                style={{
                  left: `${left}px`,
                  top: `${top}px`,
                  fontSize: `${fontSize}px`,
                }}
              >
                {word}
              </Keyword>
            ))}
          </KeywordWrap>
        </KeywordBox>
        <AIDescription2>
          경력 단절 기간이 있는 지원자에게는 그 공백을 “성장의 시간”으로 보여주는 게 핵심이에요.
          <br />
          ㅇㅇㅇ님의 경력 단절 보완을 위해 다음과 같은 활동을 추천해요!{" "}
        </AIDescription2>
        {feedbackData && (
          <Activity>
            <BoxTitleDiv>
              <BoxTitle>추천 활동</BoxTitle>
              <BoxDescription>아래 활동들을 통해 경험을 넓히고 이력서의 매력도를 높일 수 있어요!</BoxDescription>
            </BoxTitleDiv>
            <Line2 />

            <BlockWrap>
              {Object.entries(feedbackData.recommended_activities).map(([activityTitle, items], idx) => (
                <ActivityBlock key={idx}>
                  <BoxSubtitle2>
                    {idx + 1}. {activityTitle}
                  </BoxSubtitle2>
                  <BoxList2>
                    {items.map((item, i) => (
                      <BoxContent2 key={i}>
                        <BoxText>{item}</BoxText>
                      </BoxContent2>
                    ))}
                  </BoxList2>
                </ActivityBlock>
              ))}
            </BlockWrap>
          </Activity>
        )}
        <BtnDiv2>
          <BtnDiv>
            <Btn type="button">삭제</Btn>
            <Btn type="button">수정</Btn>
          </BtnDiv>
          <Btn type="button">목록</Btn>
        </BtnDiv2>
      </Content>
    </>
  );
}

export default Detail;
