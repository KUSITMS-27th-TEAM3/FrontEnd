import styled, { css } from 'styled-components';

const hoverCss = css`
  .nav_pageTitle {
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
  top: 700px;
  border-bottom: 2px solid #ebebeb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 10vw;
  border-radius: 16px;
  img {
    cursor: pointer;
  }

  .nav_title {
    font-family: ${(props) => props.theme.font.family.pretendard_bold};
    font-size: 24px;
    flex: 1;
    text-align: center;
    margin-left: 3.75vw;
  }

  .nav_pageTitle {
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
    height: 35px;
  }

  .nav_formControl {
    width: 11vw;
    max-width: 159px;
    border: 'none';
    background-color: '#F4F4F4';
    margin-right: 16px;
    font-family: 'Pretendard Medium';
    padding: 0;
  }

  .nav_selelct {
    border: 'none';
    font-family: 'Pretendard Medium';
    text-align: 'center';
    padding: 0;
  }

  @media screen and (max-width: 1024px) {
    .nav_title {
      font-size: 15px;
    }
    .nav_pageTitle {
      font-size: 12px;
    }
  }
`;

type NavBoxProps = {
  isBorder: boolean;
};

export const NavBox = styled.nav<NavBoxProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-right: ${(props) => (props.isBorder ? '2px solid #dddddd' : 'none')};
  height: 24px;
  flex: 1;

  &:hover {
    ${hoverCss}
  }

  &.active {
    ${hoverCss}
  }
`;
