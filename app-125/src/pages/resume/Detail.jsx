import styled from "styled-components";

/* 미완성.... */

const Content = styled.div`
    height: 1000px;
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

const BoxWrap = styled.div `
    display: flex;
`;

const Wrong = styled.div`
  width: 622px;
  height: 547px;
  position: relative;
  border-radius: 50px;
  background: white;

  display:flex;
  justify-content: center;
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

const PositionWrap = styled.div `
`;

const BoxTitle = styled.h3 `
  font-size: 32px;
`;

const BoxDescription = styled.p `
  font-size: 18px;
    color: #777E90;
`;

const BoxList = styled.ul `
    padding: 0;
    padding-left: 20px;
`;

const BoxContent = styled.li `
    margin-bottom: 50px;
`;

const BoxSubtitle = styled.h4 `
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: bold;
`;

const BoxText = styled.p `
`;

const BoxRecommend = styled.p `
    font-size: 20px;
    color: red;
    font-weight: bold;
`;

function Detail() {
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
            <PositionWrap>
            <BoxTitle>잘못된 부분</BoxTitle>
            <BoxDescription>이력서에서 일부 오류가 발견되었어요.<br/>이런 작은 실수도 신뢰도에 영향을 줄 수 있으니, 꼭 수정해보세요!</BoxDescription>
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
            <PositionWrap>
            <BoxTitle>부족한 부분</BoxTitle>
            <BoxDescription>이런 부분들을 보완하면 더 돋보이는 이력서를 만들 수 있어요!</BoxDescription>
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
        </Content>
    </>
  );
}

export default Detail;