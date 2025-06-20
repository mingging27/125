import styled from "styled-components";

/*
부모 컴포넌트 호출 예시

<Question question={sampleQuestion} answer={sampleAnswer} />
*/

const Qdiv = styled.div`
    width: 1280px;
    border: none;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 20px 25px;

    display: flex;
    justify-content: space-between;
    align-items: center; 
`; 

const Qtext = styled.p `
    width: 1000px;

    /*폰트*/
    color: black;
    font-size: 18px;
`;

const Qbutton = styled.button`
    /*버튼 디자인*/
    width: 171px;
    height: 60px;
    border: none;
    background-color: #5EC27D;
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

const Adiv = styled(Qdiv)`
    border: 1px solid #BDBDBD;
    background-color: #ffffff00;
    box-shadow: none;
    padding: 54.5px 25px;
`; 

const Atext = styled(Qtext)`
    width: 1171px;
`;

function Question({question, answer}) {
    return (
        <>
    <Qdiv>
        <Qtext>{question}</Qtext>
      <Qbutton>모범 답안 확인하기</Qbutton>
    </Qdiv>
    <Adiv>
        <Atext>{answer}</Atext>
    </Adiv>
    </>
  );
}

export default Question;