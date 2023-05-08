import styled, { css } from 'styled-components';

const hoverCss = css`
  .nav_pageTittle {
    color: ${(props) => props.theme.color.main.orange};
  }
  .navIcon {
    filter: invert(67%) sepia(15%) saturate(5627%) hue-rotate(336deg) brightness(103%)
      contrast(101%);
  }
`;

export const NavBarContainer = styled.nav`
  display: flex;
  width: 80vw;
  height: 132px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.color.grayScale.white};
  align-items: center;
  color: black;
  border-bottom: 2px solid #ebebeb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 560px;
  left: 10vw;
  border-radius: 16px;
  img {
    cursor: pointer;
  }

  .navbox {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-right: 2px solid #dddddd;
    height: 24px;
    flex: 1;

    &:hover {
      ${hoverCss}
    }

    &.active {
      ${hoverCss}
    }
  }

  .nav_title {
    font-family: ${(props) => props.theme.font.family.pretendard_bold};
    font-size: 24px;
    flex: 1;
    text-align: center;
    margin-left: 3.75vw;
  }

  .nav_pageTittle {
    color: ${(props) => props.theme.color.grayScale.gray};
    font-size: 16px;
    font-family: ${(props) => props.theme.font.family.pretendard_medium};
    margin-left: 1vw;
  }

  .nav_form {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 3.75vw;
  }

  @media screen and (max-width: 1460px) {
    .nav_title {
      font-size: 16px;
    }
    .nav_pageTittle {
      font-size: 12px;
    }
  }
`;
