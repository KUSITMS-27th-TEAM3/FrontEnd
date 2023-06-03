import EmotionTags from '../../../components/Tags/EmotionTags';

const temp = [
  { name: ' 아늑함', isActive: false, tagId: 'COZY' },
  { name: '행복함', isActive: false, tagId: 'HAPPY' },
  { name: '즐거움', isActive: false, tagId: 'JOY' },
  { name: '그리움', isActive: false, tagId: 'MISS' },
  { name: '감동적', isActive: false, tagId: 'TOUCHING' },
  { name: '편안함', isActive: false, tagId: 'COMFORTABLE' },
  { name: '유쾌함', isActive: false, tagId: 'CHEERFUL' },
  { name: '자랑스러움', isActive: false, tagId: 'PROUD' },
  { name: '외로움', isActive: false, tagId: 'LONELY' },
  { name: '사랑스러움', isActive: false, tagId: 'LOVELY' },
];

type EmotionFormProps = {
  emotionTagList?: string[];
};

const EmotionForm = ({ emotionTagList }: EmotionFormProps) => {
  const emotionTags = temp.map((tag) => {
    if (emotionTagList?.includes(tag.tagId)) {
      return { ...tag, isActive: true };
    } else return tag;
  });

  return (
    <div className="flexBoxEmotion">
      <div className="write_title littleMargin">감정태그</div>
      <EmotionTags width="70vw" fontSize={15} temp={emotionTags} />
    </div>
  );
};

export default EmotionForm;
