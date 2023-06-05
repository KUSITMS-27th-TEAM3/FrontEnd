import styled from 'styled-components';
import { ContentButton } from './MemoryDetailStyle';

export const CommentWrapper = styled.div`
  margin-top: 32px;
  display: flex;

  .commnetBox {
    width: 100%;
  }

  hr {
    margin: 16px 0px;
    background-color: #dddddd;
    height: 1px;
    border: 0;
  }
  .textAreaBox {
    display: flex;
    justify-content: space-between;
  }
  .commentBtnBox {
    display: flex;
  }
`;

export const ReWriteBtn = styled.button`
  all: unset;
  width: 67px;
  height: 18px;
  color: ${({ theme }) => theme.color.grayScale.mediumBrightGray};
  font-family: ${({ theme }) => theme.font.family.pretendard_medium};
  font-size: 14px;
  margin-top: 16px;
  padding-bottom: 2px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grayScale.mediumBrightGray};
  cursor: pointer;
  text-align: center;
`;

export const CommmetArea = styled.textarea`
  all: unset;
  width: 80%;
  height: 40px;
  padding: 10px 0px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.font.family.pretendard_medium};
  &.active {
    border-bottom: 1px solid #dddddd;
  }
`;

export const CommentBtn = styled(ContentButton)`
  height: 15px;
  width: 50px;
  font-family: ${({ theme }) => theme.font.family.pretendard_medium};
`;

export const ReplyCommentWrapper = styled.div``;

export const InputBox = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const CommentInput = styled.input`
  all: unset;
  height: 20px;
  width: 100%;
  border-radius: 8px;
  padding: 18px 16px;
  font-family: ${({ theme }) => theme.font.family.pretendard_medium};
  background-color: ${({ theme }) => theme.color.grayScale.lightGray};
`;
