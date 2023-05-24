import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 835px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  overflow: hidden;

  .img_filter {
    position: absolute;
    display: inline;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

type ImageUploadModalProps = {
  backgroundUrl: string;
};

export const ImageBackground = styled.div<ImageUploadModalProps>`
  position: absolute;
  top: -20px;
  left: -20px;
  background-image: url(${(props) => props.backgroundUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  padding: 20px;
  filter: blur(16px);
`;

type ImageUploadBoxProps = {
  isUpload: boolean;
};

export const ImageUploadBox = styled.button<ImageUploadBoxProps>`
  all: unset;
  position: absolute;
  z-index: 2;
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
