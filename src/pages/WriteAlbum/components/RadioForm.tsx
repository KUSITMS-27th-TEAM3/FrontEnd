import RadioButton from '../../../components/common/RadioButton';

type RadioFormProps = {
  visible: boolean;
  handleIsOpen: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioForm = ({ visible, handleIsOpen }: RadioFormProps) => {
  return (
    <div className="flexBoxStart">
      <div className="write_title littleMargin">공개여부</div>
      <div className="checkbox">
        <RadioButton visible={visible} handleIsOpen={handleIsOpen} text={'공개'} id={'open'} />
      </div>
      <div className="checkbox">
        <RadioButton
          visible={!visible}
          handleIsOpen={handleIsOpen}
          text={'비공개'}
          id={'notOpen'}
        />
      </div>
    </div>
  );
};

export default RadioForm;
