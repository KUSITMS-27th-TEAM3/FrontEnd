import { useEffect, useState } from 'react';
import styled from 'styled-components';

const TagButton = styled.button`
  all: unset;
  font-family: ${({ theme }) => theme.font.family.pretendard_medium};
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.grayScale.lightGray};
  font-size: 14px;
  padding: 1em 2em;
  cursor: pointer;
  &.active {
    background-color: ${({ theme }) => theme.color.main.orange};
    color: ${({ theme }) => theme.color.grayScale.white}};
  }
`;

const EmotionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: max(8vw, 100px);
  width: 80vw;
  justify-content: space-between;

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
  { name: '감정태그', isActive: false },
  { name: '감정태그', isActive: false },
  { name: '감정태그', isActive: false },
  { name: '감정태그', isActive: false },
  { name: '감정태그', isActive: false },
  { name: '감정태그', isActive: false },
  { name: '감정태그', isActive: false },
  { name: '감정태그', isActive: false },
  { name: '감정태그', isActive: false },
  { name: '감정태그', isActive: false },
];

const EmotionTags = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);

  const handleTagActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetIdx = Number(e.currentTarget.id);
    setTags((current) =>
      current.map(({ name, isActive }, idx) => {
        if (targetIdx === idx) {
          return { name, isActive: !isActive };
        } else return { name, isActive: false };
      }),
    );
  };

  useEffect(() => {
    setTags([...temp]);
    setLoading(false);
  }, []);

  return (
    <EmotionContainer>
      {loading ? (
        <></>
      ) : (
        tags.map(({ name, isActive }, idx) => (
          <TagButton
            className={isActive ? 'active' : ''}
            key={`${name}${idx}`}
            id={idx.toString()}
            onClick={handleTagActive}
          >
            {name}
          </TagButton>
        ))
      )}
    </EmotionContainer>
  );
};

export default EmotionTags;
