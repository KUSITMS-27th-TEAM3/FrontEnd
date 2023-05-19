import styled from 'styled-components';

type ModalWrapperProps = {
  isModal: boolean;
};

const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 12;
  display: ${({ isModal }) => (isModal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const ImgBox = styled.div`
  position: relative;

  .modalImg {
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 242px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.font.family.pretendard_bold};

  .modalText {
    font-size: 18px;
  }

  .btnBox {
    width: 200px;
    display: flex;
    justify-content: space-between;
  }
`;

type ModalButtonProps = {
  backgroundColor: string;
  color: string;
};

const ModalButton = styled.button<ModalButtonProps>`
  all: unset;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  padding: 16px 32px;
  border-radius: 8px;
  cursor: pointer;
`;

type ModalProps = {
  ModalText: {
    text: string;
    btnText1: string;
    btnText2: string;
  };

  isModal: boolean;
  firstBtnHandler: () => void;
  SecondBtnHandler: () => void;
};

const Modal = ({ ModalText, isModal, firstBtnHandler, SecondBtnHandler }: ModalProps) => {
  return (
    <ModalWrapper isModal={isModal}>
      <ImgBox>
        <img src="/img/deleteModal.svg" alt="삭제모달" className="modalImg" />
        <ContentWrapper>
          <div className="modalText">{ModalText.text}</div>
          <div className="btnBox">
            <ModalButton backgroundColor="#F4F4F4" color="#666666" onClick={firstBtnHandler}>
              {ModalText.btnText1}
            </ModalButton>
            <ModalButton backgroundColor="#FF8A33" color="#FFFFFF" onClick={SecondBtnHandler}>
              {ModalText.btnText2}
            </ModalButton>
          </div>
        </ContentWrapper>
      </ImgBox>
    </ModalWrapper>
  );
};

export default Modal;
