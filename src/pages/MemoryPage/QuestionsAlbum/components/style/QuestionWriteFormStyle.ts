import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 80vw;
  height: 240px;
  border-radius: 16px;
  background-color: #fff6f2;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 18px;

  .Form_buttons {
    width: 75vw;
    font-family: ${({ theme }) => theme.font.family.pretendard_medium};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
  }

  .buttonbox {
    display: flex;
    flex-direction: row;
    width: 150px;
    justify-content: space-between;
  }
`;

export const TextForm = styled.textarea`
  all: unset;
  width: 75vw;
  margin-top: 30px;
  height: 130px;
  padding: 20px;
  font-family: ${({ theme }) => theme.font.family.pretendard_medium};
  border-bottom: 1px solid #ffd3bf;
  box-sizing: border-box;
  &:focus {
    padding: 20px;
  }
`;

export const FormButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  width: 70px;
  height: 24px;
  align-items: center;
  justify-content: space-around;
`;
