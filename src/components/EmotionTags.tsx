import { useEffect, useState } from 'react';
import styled from 'styled-components';

type TagButtonProps = {
  fontSize: number;
};

const TagButton = styled.button<TagButtonProps>`
  all: unset;
  font-family: ${({ theme }) => theme.font.family.pretendard_medium};
  color: ${({ theme }) => theme.color.grayScale.gray};
  border-radius: 50px;
  border: 1px solid #9d9d9d;
  background-color: ${({ theme }) => theme.color.grayScale.white};
  font-size: ${(props) => props.fontSize}px;
  padding: 1em 2em;
  text-align: center;
  cursor: pointer;
  &.active {
    background-color: ${({ theme }) => theme.color.grayScale.black};
    color: ${({ theme }) => theme.color.grayScale.white};
  }
`;

type EmotionContainerProps = {
  width: string;
  isMargin?: boolean;
};

const EmotionContainer = styled.div<EmotionContainerProps>`
  display: flex;
  align-items: center;
  margin-top: ${(props) => (props.isMargin ? 'max(8vw, 100px)' : '0')};
  width: ${(props) => props.width};
  justify-content: space-between;

  @media screen and (max-width: 1420px) and (min-width: 1024px) {
    ${TagButton} {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 1024px) {
    ${TagButton} {
      font-size: 7px;
    }
  }
`;

type Tag = {
  name: string;
  isActive: boolean;
};

const temp = [
  { name: ' 아늑함', isActive: false },
  { name: '행복함', isActive: false },
  { name: '즐거움', isActive: false },
  { name: '그리움', isActive: false },
  { name: '감동적', isActive: false },
  { name: '편안함', isActive: false },
  { name: '유쾌함', isActive: false },
  { name: '자랑스러움', isActive: false },
  { name: '외로움', isActive: false },
  { name: '사랑스러움', isActive: false },
];

type EmotionTagsProps = {
  width: string;
  isMargin?: boolean;
  fontSize: number;
};

const EmotionTags = ({ width, isMargin, fontSize }: EmotionTagsProps) => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);

  const handleTagActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetIdx = Number(e.currentTarget.id);
    setTags((current) =>
      current.map(({ name, isActive }, idx) => {
        if (targetIdx === idx) {
          return { name, isActive: !isActive };
        } else return { name, isActive };
      }),
    );
  };

  useEffect(() => {
    setTags([...temp]);
    setLoading(false);
  }, []);

  return (
    <EmotionContainer width={width} isMargin={isMargin}>
      {loading ? (
        <></>
      ) : (
        tags.map(({ name, isActive }, idx) => (
          <TagButton
            className={isActive ? 'active' : ''}
            key={`${name}${idx}`}
            id={idx.toString()}
            onClick={handleTagActive}
            fontSize={fontSize}
          >
            {name}
          </TagButton>
        ))
      )}
    </EmotionContainer>
  );
};

export default EmotionTags;
