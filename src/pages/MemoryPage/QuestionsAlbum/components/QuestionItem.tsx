import styled from 'styled-components';

const QuestionItemContainer = styled.div`
  width: 80vw;
  height: 120px;
  background-color: ${({ theme }) => theme.color.main.lightOrange};
  border-radius: 16px;
`;

type QuestionItemProps = {
  item: string;
};

const QusetionItem = ({ item }: QuestionItemProps) => {
  return <QuestionItemContainer>{item}</QuestionItemContainer>;
};

export default QusetionItem;
