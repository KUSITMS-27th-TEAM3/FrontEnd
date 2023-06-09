import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 560px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

type BannerProps = {
  url: string;
};

const Banner = ({ url }: BannerProps) => {
  return (
    <BannerContainer>
      <img src={`${url}`} alt="앨범배너" />
    </BannerContainer>
  );
};

export default Banner;
