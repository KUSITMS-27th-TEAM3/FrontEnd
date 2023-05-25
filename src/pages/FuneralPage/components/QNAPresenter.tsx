import styled from 'styled-components';
import QNAItems from './QNAItems';

const Q = [
  {
    questionId: 1,
    questionTitle: '반려동물의 장례이후, 따로 수목장이나 납골당외에 집에서 보관하여도 되나요?',
    answerDescription: '/img/A1.svg',
  },
  {
    questionId: 1,
    questionTitle:
      '반려동물의 장례 사실을 국가에 신고해야 하는 법적인 제도와 같은 것이 따로 있나요?',
    answerDescription: '/img/A2.svg',
  },
  {
    questionId: 1,
    questionTitle: '반려동물 장례식장을 선택할 때 확인해야 할 항목들에는 어떤 것들이 있을까요?',
    answerDescription: '/img/A3.svg',
  },
  {
    questionId: 1,
    questionTitle: '반려동물 화장 없이 장례를 치를 수 있을까요?',
    answerDescription: '/img/A4.svg',
  },
  {
    questionId: 1,
    questionTitle: '반려동물 사망 시 곧바로 장례를 치뤄야 하나요?',
    answerDescription: '/img/A5.svg',
  },
  {
    questionId: 1,
    questionTitle: '아이의 영정사진을 준비해야 하나요?',
    answerDescription: '/img/A6.svg',
  },
];

export type QNAContent = {
  questionId: number;
  questionTitle: string;
  answerDescription?: string;
};

export type Question = {
  questionTitle: QNAContent;
};

const QNAPresenter = () => {
  return (
    <QNAContainer>
      <div className="title">Q&A</div>
      {Q.map((question, idx) => (
        <QNAItems question={question} key={idx} />
      ))}
    </QNAContainer>
  );
};
export default QNAPresenter;

const QNAContainer = styled.div`
  margin: 0 10vw 5vw 10vw;
  width: 80vw;
  min-height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 70px;

  div.title {
    font-family: ${({ theme }) => theme.font.family.pretendard_bold};
    font-size: 28px;
    padding-bottom: 2vw;
  }
`;
