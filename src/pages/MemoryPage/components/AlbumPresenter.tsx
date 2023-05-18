import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AlbumContainer = styled.section`
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

const AlbumPresenter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleToDetail = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    navigate(`${pathname}/1`);
  };

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
  ];

  return (
    <AlbumContainer>
      {itemData.map((item) => (
        <button className="imgLink" onClick={handleToDetail}>
          <figure>
            <img src={item.img} alt={item.title} loading="lazy" />
            <div className="figBox">
              <figcaption>
                <div className="figItemBox">
                  <img src="/img/HeartDog.svg" alt="HeartDog" className="figItemImg" />
                  <div>1234</div>
                </div>
                <div className="figItemBox">
                  <img src="/img/Comment.svg" alt="Comment" className="figItemImg" />
                  <div>1234</div>
                </div>
              </figcaption>
            </div>
          </figure>
        </button>
      ))}
    </AlbumContainer>
  );
};

export default AlbumPresenter;
