import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';
import { FlexContainer } from './CommonStyle';

const SpinnerContainer = styled(FlexContainer)`
  justify-content: center;
  height: 100vh;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <ClipLoader color={'#E59A59'} size={70} />
    </SpinnerContainer>
  );
};

export default Spinner;
