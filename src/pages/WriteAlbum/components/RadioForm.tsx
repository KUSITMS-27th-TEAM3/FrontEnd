import RadioButton from '../../../components/common/RadioButton';
import * as S from './style/WriteFormStyle';

type RadioFormProps = {
  visible: boolean;
  handleIsOpen: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioForm = ({ visible, handleIsOpen }: RadioFormProps) => {
  return (
    <div className="flexBoxStart">
      <div className="write_title littleMargin">공개여부</div>
      <div className="checkbox">
        <RadioButton visible={visible} handleIsOpen={handleIsOpen} text={'공개'} />
      </div>
      <div className="checkbox">
        <RadioButton visible={!visible} handleIsOpen={handleIsOpen} text={'비공개'} />
      </div>
    </div>
  );
};

export default RadioForm;
