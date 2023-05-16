import React, { useState } from 'react';
import styled from "styled-components";

const TextFormContainer = styled.div`
    margin-top : 2vw;   
    // border : 1px solid red;
    width : 80vw;
    font-family : ${(props) => props.theme.font.family.pretendard_bold};
    
    div.border { 
        width : 100%;
        border : 1px solid ${(props) => props.theme.color.grayScale.brightGray};
    }
`
const Form = styled.form`
    display : flex;
    flex-direction : column;
    gap : 2.5vw;
`
const FormWrapper = styled.label`
    display : flex;
    justify-content : space-between;
    align-items : center;
    height : 3vw;
    input {
        width : 80%;
        height : 100%;
        border-radius : 10px;
        background-color : ${(props) => props.theme.color.grayScale.lightGray};
        border : none;
    }
`
const BtnWrapper = styled.div`
    display : flex;
    justify-content : center;
    gap : 2vw;
    position: relative;
`
const DeleteBtn = styled.div`
    position: absolute;
    right: 0;
`

const TextForm = () => {
    const [id, setId] = useState('');
    const [subInfo, setSubInfo] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [nickname, setNickname] = useState('');
    const [profileImg, setProfileImg] = useState('');
    const [mypetImg, setMypetImg] = useState('');


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('아이디', id);
        console.log('마이펫 한 줄 설명', subInfo);
        console.log('품종', breed);
        console.log('나이', age);
        console.log('별명', nickname);
        console.log('프로필 사진', profileImg);
        console.log('마이펫 사진', mypetImg);

    }

    const TextInfo: { name: string; state: [string, React.Dispatch<React.SetStateAction<string>>]; placeholder: string; }[] = [
        { name: "아이디", state: [id, setId], placeholder: "아이디를 수정해주세요." },
        { name: "마이펫 한 줄 설명", state: [subInfo, setSubInfo], placeholder: "한 줄 설명을 적어주세요." },
        { name: "품종", state: [breed, setBreed], placeholder: "품종을 입력해주세요." },
        { name: "나이", state: [age, setAge], placeholder: "나이를 입력해주세요." },
        { name: "별명", state: [nickname, setNickname], placeholder: "별명을 입력해주세요." }
    ]

    const ImgInfo: { name: string; state: [string, React.Dispatch<React.SetStateAction<string>>]; placeholder: string; }[] = [
        { name: "프로필 사진", state: [profileImg, setProfileImg], placeholder: "프로필 사진을 첨부하세요." },
        { name: "마이펫 사진", state: [mypetImg, setMypetImg], placeholder: "마이펫 사진을 첨부하세요." }
    ]

    return (
        <TextFormContainer>
            <Form onSubmit={handleSubmit}>
                {TextInfo.map((items, idx) =>
                    <FormWrapper key={idx}>
                        <div>{items.name}</div>
                        <input
                            type="text"
                            value={items.state[0]}
                            placeholder={items.placeholder}
                            onChange={(e) => items.state[1](e.target.value)} />
                    </FormWrapper>
                )}
                <div className='border' />
                {ImgInfo.map((items, idx) =>
                    <FormWrapper key={idx}>
                        <div>{items.name}</div>
                        <input
                            type="text"
                            value={items.state[0]}
                            placeholder={items.placeholder}
                            onChange={(e) => items.state[1](e.target.value)} />
                        <button>사진 첨부</button>
                    </FormWrapper>
                )}
                <BtnWrapper>
                    <button>취소</button>
                    <button type='submit'>회원 정보 수정</button>
                    <DeleteBtn>
                        <button>회원 탈퇴</button>
                    </DeleteBtn>
                </BtnWrapper>
            </Form>
        </TextFormContainer>
    )
}
export default TextForm;