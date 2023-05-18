import EmotionTags from '../../../components/EmotionTags';

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

const EmotionForm = () => {
  return (
    <div className="flexBoxEmotion">
      <div className="write_title littleMargin">감정태그</div>
      <EmotionTags width="70vw" fontSize={15} temp={temp} />
    </div>
  );
};

export default EmotionForm;
