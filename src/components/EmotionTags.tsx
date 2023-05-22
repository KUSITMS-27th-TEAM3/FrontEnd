import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { activeTagAtom } from '../atom/atom';
import { useSetRecoilState } from 'recoil';

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
  tagId: string;
};

type EmotionTagsProps = {
  width: string;
  isMargin?: boolean;
  fontSize: number;
  temp: Tag[];
};

const EmotionTags = ({ width, isMargin, fontSize, temp }: EmotionTagsProps) => {
  const [tags, setTags] = useState<Tag[]>([]);
  const setActiveTags = useSetRecoilState(activeTagAtom);

  const handleTagActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetIdx = Number(e.currentTarget.id);
    setTags((current) =>
      current.map(({ name, isActive, tagId }, idx) => {
        if (targetIdx === idx) {
          return { name, isActive: !isActive, tagId };
        } else return { name, isActive, tagId };
      }),
    );
  };

  useEffect(() => {
    setTags([...temp]);
  }, []);

  useEffect(() => {
    setActiveTags(tags.filter((tag) => tag.isActive).map((tag) => tag.tagId));
  }, [tags]);

  return (
    <EmotionContainer width={width} isMargin={isMargin}>
      {tags.map(({ name, isActive }, idx) => (
        <TagButton
          className={isActive ? 'active' : ''}
          key={`${name}${idx}`}
          id={idx.toString()}
          onClick={handleTagActive}
          fontSize={fontSize}
        >
          {name}
        </TagButton>
      ))}
    </EmotionContainer>
  );
};

export default EmotionTags;
