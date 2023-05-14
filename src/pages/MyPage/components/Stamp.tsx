import styled from "styled-components";
import React, { useRef } from 'react';

const StampWrapper = styled.div`
    width : 100%;
    margin-bottom : 20px;
    position : relative;
    display : flex;
    align-items : center;
    justify-content : center;

    img {
        width : 100%;
        height : auto;
        object-fit : cover;
    }
    `
const ContentWrapper = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 85%;
    height : 50%;
    // border : 1px solid black;
    position : absolute;
    bottom : 2vw;
    z-index : 1;

    img {
        width : 1.8vw;
    }
    button {
        all : unset;
        cursor: pointer;
    }
`
const BtnStamp = styled.div`
    display : flex;
    justify-content : space-between;
`
const ContentStamp = styled.div`
    width: 80%;   
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-x: auto;
    gap : 15px;
    img {
        width: 21%;
        height: auto;
        object-fit: contain;
        flex-shrink: 0;
    }
`;

const Stamp = () => {
    const horizontalScrollRef = useRef<HTMLDivElement>(null);

    const handleNextButtonClick = (nextType: 'prev' | 'next') => {
        if (!horizontalScrollRef.current) return;
        if (nextType === 'prev') {
            horizontalScrollRef.current.scrollTo({
                left: horizontalScrollRef.current.scrollLeft - horizontalScrollRef.current.offsetWidth,
                behavior: 'smooth',
            });
        } else {
            horizontalScrollRef.current.scrollTo({
                left: horizontalScrollRef.current.scrollLeft + horizontalScrollRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    };

    const handlePrevButton = () => handleNextButtonClick('prev');
    const handleNextButton = () => handleNextButtonClick('next');

    const VISIBLE_STAMP = "/img/visibleStamp.svg";
    const NONVISIBLE_STAMP = "/img/nonVisibleStamp.svg";

    return (
        <StampWrapper>
            <img src="/img/StampBg.svg" />
            <ContentWrapper>
                <BtnStamp>
                    <button onClick={handlePrevButton}>
                        <img src="/img/CircleLeft.svg"></img>
                    </button>
                    <ContentStamp ref={horizontalScrollRef}>
                        <img src={VISIBLE_STAMP} />
                        <img src={VISIBLE_STAMP} />
                        <img src={VISIBLE_STAMP} />
                        <img src={NONVISIBLE_STAMP} />
                        <img src={NONVISIBLE_STAMP} />
                        <img src={NONVISIBLE_STAMP} />
                        <img src={NONVISIBLE_STAMP} />
                        <img src={NONVISIBLE_STAMP} />
                        <img src={NONVISIBLE_STAMP} />
                        <img src={NONVISIBLE_STAMP} />
                    </ContentStamp>
                    <button onClick={handleNextButton}>
                        <img src="/img/CircleRight.svg"></img>
                    </button>
                </BtnStamp>
            </ContentWrapper>
        </StampWrapper>
    )
}
export default Stamp;