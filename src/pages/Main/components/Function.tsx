import styled from 'styled-components';

const S = {
    Image: styled.div`
    width : 100%;
    img{
      width : 100%;
      height : auto;
      object-fit : contain;
    }
    `

}

const Function = () => {
    return (
        <S.Image>
            <img src="/img/Function.svg" alt="function"></img>
        </ S.Image>
    )
}

export default Function