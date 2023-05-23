import styled from 'styled-components';

export const DetailBox = styled.div`
  position: relative;

  .profileImg {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 18px;
  }

  .nocontent {
    font-family: ${({ theme }) => theme.font.family.gmarketSans_medium};
    font-size: 20px;
    margin-top: 20px;
  }
`;

export const ImageBox = styled.div`
  position: absolute;
  top: 70px;
  left: 50%;
  width: 765px;
  aspect-ratio: 1;
  transform: translate(-50%, 0);

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DetailWrapper = styled.div`
  width: 80vw;
  height: 100vh;
  margin: 40px 10vw 5vw 10vw;
  display: flex;
  flex-direction: column;

  .userName {
    font-family: ${({ theme }) => theme.font.family.pretendard_bold};
    font-size: 18px;
    margin-bottom: 6px;
  }

  .subName {
    font-family: ${({ theme }) => theme.font.family.pretendard_medium};
    font-size: 16px;
    color: ${({ theme }) => theme.color.grayScale.gray};
  }

  .title {
    font-family: ${({ theme }) => theme.font.family.pretendard_bold};
    font-size: 26px;
  }

  .buttonBox {
    display: flex;
    font-family: ${({ theme }) => theme.font.family.pretendard_medium};
    font-size: 16px;
  }

  .contentBox_content {
    width: 100%;
    font-family: ${({ theme }) => theme.font.family.pretendard_medium};
    color: ${({ theme }) => theme.color.grayScale.gray};
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const TitleBox = styled(FlexBox)`
  justify-content: space-between;
`;

export const ContentBox = styled(FlexBox)`
  justify-content: space-between;
  font-family: ${({ theme }) => theme.font.family.pretendard_medium};
  border-bottom: 1px solid #dddddd;
  padding-bottom: 32px;
`;

export const Tag = styled.span`
  padding: 8px 16px;
  color: ${({ theme }) => theme.color.main.orange};
  background-color: #ffefe2;
  border-radius: 50px;
  font-family: ${({ theme }) => theme.font.family.pretendard_bold};
  font-size: 14px;
  margin-right: 12px;
`;

export const ContentButton = styled.button`
  all: unset;
  border: 1px solid #ffd3bf;
  color: ${({ theme }) => theme.color.main.orange};
  border-radius: 8px;
  padding: 12px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 68px;
`;

export const CommentBox = styled.div`
  overflow: auto;
`;
