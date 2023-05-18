import EmotionTags from '../../../components/EmotionTags';

const EmotionForm = () => {
  return (
    <div className="flexBoxEmotion">
      <div className="write_title littleMargin">감정태그</div>
      <EmotionTags width="70vw" fontSize={15} />
    </div>
  );
};

export default EmotionForm;
