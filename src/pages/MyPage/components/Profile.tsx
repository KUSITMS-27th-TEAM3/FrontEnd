import styled from 'styled-components';

const S = {
    ContentWrapper: styled.div`
        width : 100%;
        height : 676px;
        border : 1px solid black;
    `
}

const Profile = () => {
    return (
        <S.ContentWrapper>
            Profile
        </S.ContentWrapper>
    )
}
export default Profile;