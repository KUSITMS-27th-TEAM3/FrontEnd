import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 835px;

  .img_filter {
    position: absolute;
    display: inline;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

type ImageUploadBoxProps = {
  isUpload: boolean;
};

export const ImageUploadBox = styled.button<ImageUploadBoxProps>`
  all: unset;
  position: absolute;
  top: ${(props) => (props.isUpload ? '70px' : '50%')};
  left: 50%;
  width: ${(props) => (props.isUpload ? '765px' : '30%')};
  cursor: pointer;
  aspect-ratio: 1;
  transform: ${(props) => (props.isUpload ? 'translate(-50%, 0)' : 'translate(-50%, -50%)')};
  background-color: rgba(255, 255, 255, 0.12);
  border: ${(props) => (props.isUpload ? 'none' : '3px dashed rgba(255, 255, 255, 0.56)')};
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

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
