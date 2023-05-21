import * as API from '../../../api/API';

type Answer = {
  answerDescription: string;
};

export const getQuestion = async (page = 0, size = 10) =>
  await API.get(`/question?page=${page}&size=${size}`);

export const putAnswer = async (answer: Answer, questionId: number) => {
  const status = await API.put(`/question/${questionId}`, answer);
  if (!status) {
    alert('수정되었습니다!');
  }
};

export const postAnswer = async (answer: Answer, questionId: number) => {
  const status = await API.post(`/question/${questionId}`, answer);
  if (!status) {
    alert('입력되었습니다!');
  }
};
