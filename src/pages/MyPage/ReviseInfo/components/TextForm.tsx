import React, { useState, useRef, ChangeEvent, useCallback } from 'react';
import styled from "styled-components";
import { IconButton } from '../../../../components/CommonStyle';

const TextForm = () => {
    const [id, setId] = useState('');
    const [subInfo, setSubInfo] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [nickname, setNickname] = useState('');
    const [profileImg, setProfileImg] = useState('');
    const [mypetImg, setMypetImg] = useState('');

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        console.log(e.target.files[0]);

        const file = e.target.files[0];

        const formData = new FormData();
        formData.append('file', file);
        // formData 서버로 전송
        // axios.post('/upload', formData);
        console.log(formData);
    }, []);

    const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        if (!fileInputRef.current) {
            return;
        }
        fileInputRef.current.click();
    }, []);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('아이디', id);
        console.log('마이펫 한 줄 설명', subInfo);
        console.log('품종', breed);
        console.log('나이', age);
        console.log('별명', nickname);
        console.log('프로필 사진', profileImg);
        console.log('마이펫 사진', mypetImg);

        handleCancel();

    }

    const handleCancel = () => {
        setId('');
        setSubInfo('');
        setBreed('');
        setAge('');
        setNickname('');
        setProfileImg('');
        setMypetImg('');
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
                        <input className='textInput'
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
                        <input className='imgInput'
                            type="file"
                            accept="image/*"
                            value={items.state[0]}
                            placeholder={items.placeholder}
                            ref={fileInputRef}
                            onChange={(e) => {
                                items.state[1](e.target.value);
                                handleFileChange(e);
                            }} />
                        {/* <button onClick={handleClick}>사진 첨부</button> */}
                    </FormWrapper>
                )}
                <BtnWrapper>
                    <button className="backBtn" onClick={handleCancel}>취소</button>
                    <IconButton
                        width="calc(3vw - 36px)"
                        height="1.5vw"
                        maxWidth="100vw"
                        minWidth="6vw"
                    >
                        회원 정보 수정
                    </IconButton>
                    <DeleteBtn>
                        <button><img src="/img/회원탈퇴.svg" /></button>
                    </DeleteBtn>
                </BtnWrapper>
            </Form>
        </TextFormContainer>
    )
}
export default TextForm;

const TextFormContainer = styled.div`
    margin-top : 2vw;   
    // border : 1px solid red;
    width : 80vw;
    font-family : ${(props) => props.theme.font.family.pretendard_bold};
    font-size : 1vw;

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
    position : relative;
    display : flex;
    justify-content : space-between;
    align-items : center;
    height : 3vw;
    input.textInput {
        width : 87%;
        height : 100%;
        border-radius : 10px;
        background-color : ${(props) => props.theme.color.grayScale.lightGray};
        border : none;
    }
    input.imgInput {
        width : 87%;
        height : 100%;
        border-radius : 10px;
        background-color : ${(props) => props.theme.color.grayScale.lightGray};
        border : none;
    }
    button {
        position : absolute;
        right : 0;
        height : 100%;
        color : white;
        background-color : black;
        border-radius : 6px;
        padding-left : 1.5vw;
        padding-right : 1.5vw;
        font-size : 0.8vw;
        font-family : ${(props) => props.theme.font.family.pretendard_bold};
        cursor: pointer;
    }
    imgSrc {
        position : absolute;
        z-index:1000;
    }
`
const BtnWrapper = styled.div`
    display : flex;
    justify-content : center;
    gap : 1vw;
    font-size : 1vw;
    position: relative;

    button.backBtn {
        border : none;
        padding: 12px 18px;
        border-radius : 8px;
        font-size : 1vw;
        background-color : ${(props) => props.theme.color.grayScale.lightGray};
        color: ${(props) => props.theme.color.grayScale.gray};
        font-family: ${(props) => props.theme.font.family.pretendard_medium};
        cursor: pointer;
        &:hover {
            filter: brightness(1.2);
          }
        
    }
`
const DeleteBtn = styled.div`
    position: absolute;
    right: 0;
    button {
        border : none;
        cursor: pointer;
        background-color : white;
    }
    img {
        width : 80%;
        height : auto;
        over-fit : cover;
    }
`