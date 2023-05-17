import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const ImageUploadBox = styled.button`
  all: unset;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  cursor: pointer;
  aspect-ratio: 1;                    

  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.12);
  border: 3px dashed rgba(255, 255, 255, 0.56);
  box-sizing: border-box;
  color: ${(props) => props.theme.color.grayScale.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .imageAlbum {
    width: 30%;
    height: 30%;
  }

  .imageCaption {
    font-size: 26px;
    font-family: ${(props) => props.theme.font.family.pretendard_bold};
    margin-top: 35px;
  }
`;
