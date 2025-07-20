import React, { useState } from "react";
import styled from "styled-components";
import CustomProgressBar from "../../components/resume/CustomProgressBar";

const Content = styled.div`
  height: 1100px;
  padding-top: 160px;
  background-color: #FDF8F4;

  display: flex;
  justify-content: center;
`;

const PositionWrap = styled.div `
`;

const Title = styled.h2`
  color: #5EC27D;
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 57px;
`;

const Subtitle = styled.h3`
  font-weight: bold;
    margin: 0;
  font-size: 24px;
  margin-bottom: 3px;
`;

const Description = styled.p `
    color: #B1B5C3;
    font-size: 18px;
    margin: 0;
  margin-bottom: 20px;

`;

const Essential = styled.span`
  color: red;
`;

const Box = styled.div`
    margin-top: 48px;
  width: 1271px;
  border: none;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 25px 0 40px 30px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const DetailBox = styled(Box) `
  margin: 0;
  background-color: #F8FCF8;

`;

const InputDiv = styled.div `
    display: flex;
    aligh-items: center;
    text-align: center;
`;

const CareerDetail = styled.div `
  padding-left: 10px;
  width:  955px;
    height: 48px;
    border: 2px solid #D9D9D9;
    color:rgb(164, 164, 164);
    font-size: 18px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    position: relative;
    `;

const Input = styled.input`
    padding-left: 10px;
  width:  450px;
    height: 48px;
    border: 2px solid #D9D9D9;
    color: #777E90;
    font-size: 18px;
    border-radius: 12px;
`;

const DetailInput = styled(Input) `
  background-color: #fff0;
  width: 1055px;
`;

const Select = styled.select`
    padding-left: 10px;
  width:  530px;
    height: 48px;
    border: 2px solid #D9D9D9;
    color: #777E90;
    font-size: 18px;
    border-radius: 12px;
    margin-right: 47px;
`;

const Wrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const HalfSelect = styled(Select)`
  width: 340px;
`;

const Line = styled.div `
  margin-top: 30px;
  margin-bottom: 30px;
  border-top: 1px solid #5EC27D;
  width: 606px;
`;

const Edit = styled.button`
    /*버튼 디자인*/
    width: 60px;
    height: 32px;
    border-radius: 30px;
    background: #fff0;
    border: 1px solid #2D66D0;
    color: #2D66D0;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 80px;
    
    /*폰트*/
    font-size: 18px;
    font-weight: bold;
`;

const Delete = styled(Edit) `
  right: 10px;
`;

const Add = styled.button`
    /*버튼 디자인*/
    width: 75px;
    height: 32px;
    border-radius: 30px;
    background: #5EC27D;
    border: none;
    color: #fff;
    box-shadow: inset 0px 2 px 4px 0px rgba(0, 0, 0, 0.15);

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 100px;
    
    /*폰트*/
    font-size: 18px;
    font-weight: bold;
`;

const BtnDiv = styled.div `
  width: 100%;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.button`
    /*버튼 디자인*/
    width: 86px;
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

function Create2({
  school,
  setSchool,
  status,
  setStatus,
  careerStatus,
  setCareerStatus,
  careers,
  setCareers,
  onNext,
  goPrev
}) {
  const [careerInput, setCareerInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddCareer = () => {
    if (careerInput.trim() === "") return;

    if (editingIndex !== null) {
      const updated = [...careers];
      updated[editingIndex] = careerInput;
      setCareers(updated);
      setEditingIndex(null);
    } else {
      setCareers([...careers, careerInput]);
    }
    setCareerInput("");
  };

  const handleEditCareer = (index) => {
    setCareerInput(careers[index]);
    setEditingIndex(index);
  };

  const handleDeleteCareer = (index) => {
    const updated = careers.filter((_, i) => i !== index);
    setCareers(updated);
    if (editingIndex === index) {
      setCareerInput("");
      setEditingIndex(null);
    } else if (editingIndex > index) {
      setEditingIndex(editingIndex - 1);
    }
  };

  const handleNext = () => {
    if (!school) {
      alert("학교를 선택해주세요.");
      return;
    }
    if (!status) {
      alert("상태를 선택해주세요.");
      return;
    }
    if (!careerStatus) {
      alert("경력 사항을 선택해주세요.");
      return;
    }
    if (careerStatus === "experienced" && careers.length === 0) {
      alert("경력 사항을 입력해주세요.");
      return;
    }
    if (typeof onNext === "function") {
      onNext();
    }
  };

  return (
    <Content>
      <PositionWrap>
        <Title>이력서 작성</Title>
        <CustomProgressBar currentPage={2} />
        
        {/* 학력 정보 */}
        <Box>
          <Subtitle>학력 정보 <Essential>*</Essential></Subtitle>
          <Description>최종 학력을 입력해주세요.</Description>
          <Wrap>
            <InputDiv>
              <Select value={school} onChange={(e) => setSchool(e.target.value)}>
                <option value="" disabled hidden>학교</option>
                <option value="elementary">초등학교</option>
                <option value="middle">중학교</option>
                <option value="high">고등학교</option>
                <option value="college-2yr">대학교 (2, 3년제)</option>
                <option value="college-4yr">대학교 (4년제)</option>
                <option value="graduate">대학원</option>
              </Select>

              <HalfSelect value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="" disabled hidden>상태</option>
                <option value="enrolled">재학</option>
                <option value="leave">휴학</option>
                <option value="graduated">졸업</option>
              </HalfSelect>
            </InputDiv>
          </Wrap>
        </Box>

        {/* 경력 사항 */}
        <Box>
          <Subtitle>경력 사항 <Essential>*</Essential></Subtitle>
          <Description>경력 사항이 있다면 입력해주세요.</Description>
          <Wrap>
            <InputDiv>
              <HalfSelect
                value={careerStatus}
                onChange={(e) => setCareerStatus(e.target.value)}
              >
                <option value="" disabled hidden>선택</option>
                <option value="new">신입</option>
                <option value="experienced">경력</option>
              </HalfSelect>
            </InputDiv>
          </Wrap>
        </Box>

        {/* 경력 상세 입력 (experienced일 때만) */}
        {careerStatus === "experienced" && (
          <DetailBox>
            {careers.map((career, index) => (
              <CareerDetail key={index}>
                {career}
                <Edit type="button" onClick={() => handleEditCareer(index)}>수정</Edit>
                <Delete type="button" onClick={() => handleDeleteCareer(index)}>삭제</Delete>
              </CareerDetail>
            ))}

            {careers.length > 0 && <Line />}

            <Description>
              경력 사항(회사명, 재직 기간)을 입력해주세요. [예: ㅇㅇ기업 (2023.02-2025.05)]
            </Description>

            <Wrap>
              <DetailInput
                type="text"
                value={careerInput}
                onChange={(e) => setCareerInput(e.target.value)}
                placeholder="회사명 (YYYY.MM ~ YYYY.MM)"
              />
              <Add type="button" onClick={handleAddCareer}>
                {editingIndex !== null ? "완료" : "추가"}
              </Add>
            </Wrap>
          </DetailBox>
        )}
        <BtnDiv>
        {/* 이전 */}
        <Btn onClick={goPrev}>← 이전</Btn>
        {/* 다음 버튼 */}
        <Btn
          onClick={handleNext}
        >
          다음 →
        </Btn>
        </BtnDiv>
      </PositionWrap>
    </Content>
  );
}

export default Create2;