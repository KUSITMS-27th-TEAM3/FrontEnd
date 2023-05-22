import styled from 'styled-components';
import RegionTag from '../../../components/RegionTag';

const temp = [
  { name: '전체', isActive: true, tagId: '전체' },
  { name: '서울', isActive: false, tagId: '서울' },
  { name: '경기', isActive: false, tagId: '경기' },
  { name: '경남', isActive: false, tagId: '경남' },
  { name: '경북', isActive: false, tagId: '경북' },
  { name: '울산', isActive: false, tagId: '울산' },
  { name: '충남', isActive: false, tagId: '충남' },
  { name: '충북', isActive: false, tagId: '충북' },
  { name: '인천', isActive: false, tagId: '인천' },
  { name: '강릉', isActive: false, tagId: '강릉' },
];

const RegionTags = () => {
  return (
    <TagsContainer>
      <div className="RegionTagsTitle">장례 정보 알아보기</div>
      <RegionTag width="50vw" fontSize={15} temp={temp} />
    </TagsContainer>
  );
};
export default RegionTags;

const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3.5vw;
  padding-bottom: 2vw;
  background-color: ${({ theme }) => theme.color.grayScale.brightLightGray};
  width: 100%;

  div.RegionTagsTitle {
    font-family: ${({ theme }) => theme.font.family.pretendard_bold};
    font-size: 30px;
    margin-bottom: 2.5vw;
  }
`;
