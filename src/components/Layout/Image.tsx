import styled from 'styled-components';

const ImageContainer = styled.div`
    width : 100%;
    img {
        width : 100%;
        height : auto;
        content-fit : cover;
    }
`;

type BannerProps = {
    url: string;
};

const Image = ({ url }: BannerProps) => {
    return (
        <ImageContainer>
            <img src={`${url}`} alt="이미지" />
        </ImageContainer>
    );
};

export default Image;
