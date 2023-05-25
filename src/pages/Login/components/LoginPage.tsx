import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/Image';

const ContentWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
const LoginWrapper = styled.div`
  width: 20vw;
  height: 15vw;
  position: absolute;
  top: 21vw;
  left: 58vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  div.title {
    font-family: ${(props) => props.theme.font.family.pretendard_bold};
    font-size: 1.5vw;
  }
`;
const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5vw;

  button {
    all: unset;
    border: none;
    cursor: pointer;
  }
`;
const LoginPage = () => {
  return (
    <div>
      <ContentWrapper>
        <Image url={'/img/LoginBg.jpg'} />
        <LoginWrapper>
          <div className="title">소셜 로그인</div>
          <ButtonWrapper>
            <button>
              <a href="http://52.78.181.46.nip.io/oauth2/authorization/google">
                <img src="/img/GoogleLogin.svg" />
              </a>
            </button>
          </ButtonWrapper>
        </LoginWrapper>
      </ContentWrapper>
    </div>
  );
};
export default LoginPage;
