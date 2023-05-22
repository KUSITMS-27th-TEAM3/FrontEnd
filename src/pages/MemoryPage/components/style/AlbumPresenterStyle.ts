import styled from 'styled-components';

export const AlbumContainer = styled.section`
  margin: 5vw 10vw 5vw 10vw;
  width: 80vw;
  height: 100vh;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;

  img {
    border-radius: 8px;
    object-fit: cover;
    aspect-ratio: 1;
    width: 100%;
  }

  figcaption {
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    opacity: 0;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 8px;
    width: 90%;
    aspect-ratio: 1;
    border: 1px solid ${({ theme }) => theme.color.grayScale.white};
    box-sizing: content-box;
  }

  .figBox {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 8px;
    width: 100%;
    aspect-ratio: 1;
  }

  .figItemBox {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .figItemImg {
    margin-bottom: 15px;
  }

  .imgLink {
    all: unset;
    position: relative;
    color: ${({ theme }) => theme.color.grayScale.white};
    font-family: ${({ theme }) => theme.font.family.gmarketSans_medium};
    font-size: 20px;
    aspect-ratio: 1;

    &:hover {
      cursor: pointer;

      .figBox {
        background-color: rgba(255, 138, 51, 0.6);
      }

      figcaption {
        opacity: 1;
      }
    }

    @media screen and (max-width: 1024px) {
      &.imgLink {
        font-size: 10px;
      }

      &.figItemImg {
        margin-bottom: 10px;
      }
    }
  }
`;
