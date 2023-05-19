import styled from "styled-components";
import EmotionTags from '../../../components/EmotionTags';

const temp = [
    { name: '전체', isActive: false },
    { name: '서울', isActive: false },
    { name: '경기', isActive: false },
    { name: '경남', isActive: false },
    { name: '경북', isActive: false },
    { name: '울산', isActive: false },
    { name: '충남', isActive: false },
    { name: '충북', isActive: false },
    { name: '인천', isActive: false },
    { name: '강릉', isActive: false },
];

const RegionTags = () => {
    return (
        <TagsContainer>
            <div className="RegionTagsTitle">장례 정보 알아보기</div>
            <EmotionTags width="50vw" fontSize={15} temp={temp} />
        </TagsContainer>
    )
}
export default RegionTags;

const TagsContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    padding-top : 3.5vw;
    padding-bottom : 2vw;
    background-color : ${({ theme }) => theme.color.grayScale.brightLightGray};
    width : 100%;
    
    div.RegionTagsTitle {
        font-family : ${({ theme }) => theme.font.family.pretendard_bold};
        font-size : 30px;
        margin-bottom : 2.5vw;
    }
`