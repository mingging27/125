import styled from "styled-components";

/* 
    프로그래스바 사용을 위한 라이브러리 설치해주세요.
    npm install react-stepper-horizontal
 */

const Content = styled.div`
    height: 3800px;
    padding-top: 160px;
    background-color: #FDF8F4;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const List = styled.div `
`;

const Title = styled.h2 `
    color: #000000;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 61px;
`;

const ListContentMiddle = styled.div `
    width: 1250px;
    border-bottom: 1px solid #A8A8A8;
    padding: 30px 30px;
`;

const ListContentTop = styled(ListContentMiddle) `
    border-top: 3px solid #000;
`;

const ListContentBottom = styled(ListContentMiddle) `
    border-bottom: 3px solid #000;
`;

const Subtitle = styled.h3 `
    font-size: 24px;
    margin: 0;
    margin-bottom: 34px;
`;

const Wrap = styled.div `
    display: flex;
    margin-bottom: 8px;
    align-items: center
`;

const BlockWrap = styled.div `
    display: flex;
    justify-content: space-between;
`;

const Label = styled.h4 `
    width: 50px;
    font-size: 18px;
    color: #B1B5C3;
    margin: 0;
    margin-right: 32px;
`;

const Label2 = styled(Label) `
    width: 100px;
`

const Label3 = styled(Label) `
    width: 67px;
`

const Text = styled.p `
    font-size: 18px;
    color: #777E90;
    margin: 0;
`;

const Text2 = styled(Text) ` /* 회원 정보 앞에 나오는 내용들 너비 조정 -> 뒤 내용 위치 맞춤 */
    width: 222px;
`;

const BoldText = styled(Text) `
    font-weight: bold;
    margin-bottom: 15px;
`;

const AITitle = styled.h2`
  font-size: 50px;
    margin: 75px 0 24px 0;

  background: linear-gradient(to right, #2D66D0, #5EC27D);
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

const AIDescription2 = styled(AIDescription) `
    margin-top: 122px;
    margin-bottom: 64px;
`;

const BoxWrap = styled.div `
    display: flex;
`;

const Wrong = styled.div`
  width: 622px;
  height: 547px;
  position: relative;
  border-radius: 50px;
  background: white;

  position: relative;
  margin-top: 43px;

  display:flex;
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
    background: linear-gradient(to top right, #2D66D0, #5EC27D);
    border-radius: 55px;
  }
`;

const More = styled(Wrong) `
    margin-left: 54px;

    &::before {
        background: linear-gradient(to bottom right, #5EC27D, #FEAD5C);
    }
`;

const KeywordBox = styled(Wrong) `
    width: 1298px;
    min-height: 400px;
    &::before {
    background: linear-gradient(to top right, #2D66D0, #FEAD5C);
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


const Activity = styled(Wrong) `
    width: 1298px;
    min-height: 575px;

    &::before {
    background: linear-gradient(to bottom, #2D66D0, #5EC27D);
}
`;

const BoxTitleDiv = styled.div `
    position: absolute;
    top: 23px;
    left: 50px;
`;

const Line = styled.div `
    width: 538px;
    border-bottom: 1px solid #000;
    position: absolute;
    top: 158px;
`;

const Line2 = styled(Line) `
    width: 1227px;
    top: 138px;
`;

const PositionWrap = styled.div `
`;

const BoxTitle = styled.h3 `
  font-size: 32px;
  margin: 0;
`;

const BoxDescription = styled.p `
  font-size: 18px;
    color: #777E90;
`;

const BoxList = styled.ul `
    padding: 0;
    padding-left: 20px;
    margin-top: 180px;
`;

const BoxList2 = styled(BoxList) `
    margin: 0;
`;

const BoxContent = styled.li `
    margin-bottom: 50px;
`;

const BoxContent2 = styled(BoxContent) `
    margin: 0;
`;

const BoxSubtitle = styled.h4 `
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: bold;
`;

const BoxSubtitle2 = styled(BoxSubtitle) `
    margin: 0;
    margin-bottom: 30px;
`;

const BoxText = styled.p `
`;

const BoxRecommend = styled.p `
    font-size: 20px;
    color: red;
    font-weight: bold;
`;

const ActivityBlock = styled.div `
    height: 360px;
    margin-top: 180px;
    width: 370px;
    padding: 0 30px 0 30px;
    border-right: 1px solid #A8A8A8;

    &:last-child {
        border: none;
    }
`;

const Btn = styled.button`
    /*버튼 디자인*/
    width: 64px;
    height: 60px;
    border: none;
    background-color: #2D66D0;
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

const BtnDiv = styled.div `
    width: 148px;
    display: flex;
    justify-content: space-between;
`;

const BtnDiv2 = styled(BtnDiv) `
    margin-top: 60px; 
    width: 1300px;
`;

function Detail() {
const keywords = [
  { word: "GPT 활용", importance: 5 },
  { word: "PYTHON", importance: 4 },
  { word: "노션", importance: 3 },
  { word: "SCRATCH", importance: 2 },
  { word: "ENTRY", importance: 1 },
  { word: "마이크로비트", importance: 1 },
  { word: "아두이노", importance: 1 },
];

// 중요도에 따라 글자 크기 범위 설정
const MAX_FONT = 56;
const MIN_FONT = 16;

const BOX_WIDTH = 1200;
const BOX_HEIGHT = 200;

function getFontSize(importance) {
  // importance 1~5를 글자 크기에 매핑
  return MIN_FONT + ((importance - 1) / 4) * (MAX_FONT - MIN_FONT);
}

const placed = [];

function doesOverlap(x, y, w, h) {
  return placed.some(({ left, top, width, height }) =>
    x < left + width &&
    x + w > left &&
    y < top + height &&
    y + h > top
  );
}

const placedKeywords = [];

keywords.forEach(({ word, importance }) => {
  const fontSize = getFontSize(importance);
  const width = word.length * fontSize * 0.6; // 임의 계산
  const height = fontSize + 4;

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
    // 배치 실패 시 작은 글자 또는 중앙 근처에 강제로 배치 등 추가 조치 가능
  }
});


    return (
    <>
        <Content>
        <List>
            <Title>코딩 강사 지원서 최종 (2050.13.31)</Title>
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
                <BoldText>대학교(4년제) 재학</BoldText>
                <Wrap>
                    <Label2>2020-2022</Label2>
                    <Text>덕성고등학교</Text>
                </Wrap>
                <Wrap>
                    <Label2>2023-재학중</Label2>
                    <Text>덕성여자대학교</Text>
                </Wrap>
            </ListContentMiddle>
            <ListContentMiddle>
                <Subtitle>자격증</Subtitle>
                <Wrap>
                    <Label2>2024</Label2>
                    <Text>GTQ</Text>
                </Wrap>
            </ListContentMiddle>
            <ListContentMiddle>
                <Subtitle>자기소개</Subtitle>
                <Wrap>
                    <Text>안녕하세요 저는 ㅇㅇㅇ 입니다.</Text>
                </Wrap>
            </ListContentMiddle>
            <ListContentBottom>
                <Subtitle>희망 근무 조건</Subtitle>
                <Wrap>
                    <Label3>근무지</Label3>
                    <Text>서울특별시 도봉구 쌍문동</Text>
                </Wrap>
                <Wrap>
                    <Label3>업직종</Label3>
                    <Text>IT, 기술</Text>
                </Wrap>
                <Wrap>
                    <Label3>근무형태</Label3>
                    <Text>알바</Text>
                </Wrap>
                <Wrap>
                    <Label3>근무기간</Label3>
                    <Text>기간무관</Text>
                </Wrap>
                <Wrap>
                    <Label3>근무기간</Label3>
                    <Text>요일무관 / 시간무관</Text>
                </Wrap>
            </ListContentBottom>
        </List>

        <AITitle>AI의 추천</AITitle>
        <AIDescription>ㅇㅇㅇ님의 희망 직무를 바탕으로 이력서의 개선 포인트를 AI가 분석했어요.<br/>더 나은 이력서 작성을 위한 힌트를 얻어보세요!</AIDescription>
        <BoxWrap>
        <Wrong>
            <BoxTitleDiv>
            <BoxTitle>잘못된 부분</BoxTitle>
            <BoxDescription>이력서에서 일부 오류가 발견되었어요.<br/>이런 작은 실수도 신뢰도에 영향을 줄 수 있으니, 꼭 수정해보세요!</BoxDescription>
            </BoxTitleDiv>
            <Line></Line>
            <PositionWrap>
                <BoxList>
                    <BoxContent>
                        <BoxSubtitle>날짜 형식 오류</BoxSubtitle>
                        <BoxText>2050.13.21은 존재하지 않는 날짜입니다.</BoxText>
                        <BoxRecommend>→ 2050.12.21 혹은 2051.01.21과 같이 수정 필요</BoxRecommend>
                    </BoxContent>
                    <BoxContent>
                        <BoxSubtitle>자기소개 내용 부족</BoxSubtitle>
                        <BoxText>“안녕하세요 저는 ㅇㅇㅇ입니다.”</BoxText>
                        <BoxRecommend>→ 내용이 너무 단순하며 본인의 역량, 가치관, 직무 관련<br/>경험이 담겨야 합니다.</BoxRecommend>
                    </BoxContent>
                </BoxList>
            </PositionWrap>
        </Wrong>
        <More>
            <BoxTitleDiv>
                <BoxTitle>부족한 부분</BoxTitle>
                <BoxDescription>이런 부분들을 보완하면 더 돋보이는 이력서를 만들 수 있어요!</BoxDescription>
            </BoxTitleDiv>
            <Line></Line>
            <PositionWrap>
                <BoxList>
                    <BoxContent>
                        <BoxSubtitle>경력 및 프로젝트 경험 없음</BoxSubtitle>
                        <BoxText>실제로 수업을 진행했거나 코딩 관련 활동을 했다면 추가해주세요.</BoxText>
                    </BoxContent>
                    <BoxContent>
                        <BoxSubtitle>기술 스택 누락</BoxSubtitle>
                        <BoxText>코딩 강사 직무에는 언어/도구(예: PYTHON, SCRATCH 등)를 명시해야해요.</BoxText>
                    </BoxContent>
                </BoxList>
            </PositionWrap>
        </More>
        </BoxWrap>
                <KeywordBox>
                    <BoxTitleDiv>
                    <BoxTitle>추천 활동</BoxTitle>
                    <BoxDescription>아직 늦지 않았어요! 아래 활동들을 통해 자신만의 경험을 만들어볼 수 있어요.</BoxDescription>
                    </BoxTitleDiv>
                    <Line2></Line2>
                    <KeywordWrap>
                        {placedKeywords.map(({ word, top, left, fontSize, color }, idx) => (
                            <Keyword
                                key={idx}
                                style={{
                                top: `${top}px`,
                                left: `${left}px`,
                                fontSize: `${fontSize}px`,
                                color: color,
                                }}
                            >
                                {word}
                            </Keyword>
                            ))}

                    </KeywordWrap>
                </KeywordBox>
        <AIDescription2>경력 단절 기간이 있는 지원자에게는 그 공백을 “성장의 시간”으로 보여주는 게 핵심이에요.<br/>ㅇㅇㅇ님의 경력 단절 보완을 위해 다음과 같은 활동을 추천해요! </AIDescription2>
        <Activity>
            <BoxTitleDiv>
                <BoxTitle>추천 키워드</BoxTitle>
                <BoxDescription>아래 키워드를 자연스럽게 반영하면, 이력서의 매력도를 높이고 채용 담당자에게 강한 인상을 줄 수 있어요.</BoxDescription>
            </BoxTitleDiv>
            <Line2></Line2>
            <BlockWrap>
            <ActivityBlock>
                <BoxSubtitle2>1. 온라인 강의 수강 및 수료</BoxSubtitle2>
                <BoxList2>
                    <BoxContent2>
                        <BoxText>생활코딩, Inflearn, FastCampus 등에서 Python, HTML/CSS, JavaScript 강의 수료</BoxText>
                    </BoxContent2>
                    <BoxContent2>
                        <BoxText>Naver 부스트캠프 AI Tech 등 온라인 부트캠프 프로그램</BoxText>
                    </BoxContent2>
                    <BoxContent2>
                        <BoxText>“Google IT Support Certificate” (Coursera) 등 국제 인증 강의</BoxText>
                    </BoxContent2>
                </BoxList2>
            </ActivityBlock>
           <ActivityBlock>
                <BoxSubtitle2>1. 온라인 강의 수강 및 수료</BoxSubtitle2>
                <BoxList2>
                    <BoxContent2>
                        <BoxText>생활코딩, Inflearn, FastCampus 등에서 Python, HTML/CSS, JavaScript 강의 수료</BoxText>
                    </BoxContent2>
                    <BoxContent2>
                        <BoxText>Naver 부스트캠프 AI Tech 등 온라인 부트캠프 프로그램</BoxText>
                    </BoxContent2>
                    <BoxContent2>
                        <BoxText>“Google IT Support Certificate” (Coursera) 등 국제 인증 강의</BoxText>
                    </BoxContent2>
                </BoxList2>
            </ActivityBlock>
            <ActivityBlock>
                <BoxSubtitle2>1. 온라인 강의 수강 및 수료</BoxSubtitle2>
                <BoxList2>
                    <BoxContent2>
                        <BoxText>생활코딩, Inflearn, FastCampus 등에서 Python, HTML/CSS, JavaScript 강의 수료</BoxText>
                    </BoxContent2>
                    <BoxContent2>
                        <BoxText>Naver 부스트캠프 AI Tech 등 온라인 부트캠프 프로그램</BoxText>
                    </BoxContent2>
                    <BoxContent2>
                        <BoxText>“Google IT Support Certificate” (Coursera) 등 국제 인증 강의</BoxText>
                    </BoxContent2>
                </BoxList2>
            </ActivityBlock>
            </BlockWrap>
        </Activity>
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