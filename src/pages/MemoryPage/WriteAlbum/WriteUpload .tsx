import styled from 'styled-components';
import { FlexContainer } from '../../../components/CommonStyle';
import ImageUpload from './components/ImageUpload';
import { EmotionTags } from '../components';

const WriteUploadContainer = styled(FlexContainer)``;

const WriteBox = styled.div`
  width: 80vw;
`;

const WriteUpload = () => {
  return (
    <WriteUploadContainer>
      <ImageUpload />
      <WriteBox>
        <div>hi</div>
        <EmotionTags />
      </WriteBox>
    </WriteUploadContainer>
  );
};

export default WriteUpload;
