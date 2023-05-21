export type QuestionContent = {
  questionId: number;
  questionTitle: string;
  answerDescription?: string;
};

export type Question = {
  questionTitle: QuestionContent;
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
};
