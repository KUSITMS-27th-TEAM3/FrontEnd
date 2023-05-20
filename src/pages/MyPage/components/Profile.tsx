import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import * as API from '../../../api/API';
import { useEffect, useState } from 'react';
import Spinner from "../../../components/Spinner";

export type ProfileInfo = {
    petName: string;
    userNickname: string;
    petImageUrl: string;
    description: string;
    petAge: number;
    petType: string;
};

const Profile = () => {
    const [profile, setProfile] = useState<ProfileInfo | null>(null); // Change initial state to null
    const [isLoading, setLoading] = useState(true);

    const getProfile = async () => {
        const data = await API.get('/user/mypet');
        setProfile(data);
        setLoading(false);
    };

    useEffect(() => {
        getProfile();
    }, []);

    const navigate = useNavigate();
    const handleToRevise = (e: React.MouseEvent) => {
        navigate('/ReviseInfo');
    };


    if (isLoading) {
        return <Spinner />; // Display a spinner or loading indicator while fetching data
    }

    if (!profile) {
        return <div>No profile data found.</div>; // Display a message if profile data is empty
    }


    return (
        <ContentWrapper>
            <Blur>
                <img src="img/BlurRectangle.svg" />
            </Blur>
            <ProfileBackImg>
                <img src={`${profile.petImageUrl}`} alt="배경사진" />
            </ProfileBackImg>
            <ProfileWrapper>
                <ProfileImg>
                    <img src={`${profile.petImageUrl}`} alt="프로필사진" />
                </ProfileImg>

                <ProfileInfo>
                    <div className='MyPet'>My Pet</div>
                    <div className='petName'>{`${profile.userNickname}의 ${profile.petName}`}</div>
                    <div className='petSubTitle'>{profile.description}</div>
                    <div className='info'>
                        <div className='subInfo'>{profile.petType}</div>
                        <div className='subInfo'>{`${profile.petAge} 세`}</div>

                    </div>
                    <button onClick={handleToRevise}><img src="/img/setUP.svg" alt="setUpIcon" />수정하기</button>
                </ProfileInfo>

            </ProfileWrapper>
        </ContentWrapper>
    )
}
export default Profile;

const ContentWrapper = styled.div`
width : 100%;
height : 45vw;
border : 1px solid black;
position : relative;
display : flex;
flex-direction : row;
justify-content:center;
`
const Blur = styled.div`
width : 100%;
height : 100%;
background-color: rgba(0,0,0,0.64); // 배경 검정 블러 적용
z-index : 1;
position: absolute;
img {
    opacity: 0.1;
    position: absolute;
    left: 4vw;
    bottom : 0;
    z-index : 1;
    width : 80%;
    height : 80%;
}
`
const ProfileWrapper = styled.div`
    width : 80%;
    z-index: 1;
    display : flex;
    // justify-content : center;
    align-items : center;
    gap : 5vw;
`
const ProfileInfo = styled.div`
    z-index : 2;
    bottom: 0;
    color: white;
    display : flex;
    flex-direction : column;
    justify-content : center;
    position : relative;
    top : 1vw;
    font-family: ${(props) => props.theme.font.family.pretendard_medium};


    div.MyPet {
        margin-bottom: 1.5vw;
        font-size : 1vw;
        font-family: ${(props) => props.theme.font.family.gmarketSans_bold};
    }
    div.petName {
        margin-bottom: 1.5vw;
        font-size : 2vw;
        color : ${(props) => props.theme.color.main.orange};
        font-family: ${(props) => props.theme.font.family.pretendard_bold};
    }
    div.petSubTitle {
        margin-bottom: 1.5vw;
    }
    div.info {
        display: flex;
        text-align : center;
        line-height : 44px;
        margin-left : -10px;
        margin-bottom: 1.5vw;
        font-size : 0.8vw;
    }
    div.subInfo {
        border: 1px solid white;
        border-radius : 10px;
        background-color : rgb(255,255,255,0.12);
        margin : 10px;
        font-size : 0.8vw;
        padding-left : 1vw;
        padding-right : 1vw;
    }
    button {
        border: 1px solid white;
        border-radius : 10px;
        background-color : rgb(255,255,255,0);
        width : 126px;
        height : 46px;
        color :  rgb(255,255,255);
        cursor: pointer;
    }
    img {
        margin-right : 5px;
    }
`
const ProfileBackImg = styled.div`
img {     
    left : 0;
    position : absolute;
    width: 100%;
    height : 100%;
    object-fit : cover;
}
`
const ProfileImg = styled.div`
position :relative;
top : 30px;
width : 28vw;
height : 28vw;
border-radius : 50%;
img {
    border-radius : 50%;
    width : 100%;
    height : 100%;
}
`