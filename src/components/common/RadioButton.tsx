import styled from 'styled-components';

const CheckBox = styled.input`
  width: 30px;
  height: 30px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 2px solid #666666;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
  box-sizing: border-box;

  &::before {
    content: url('/img/check.svg');
    position: absolute;
    text-align: center;
    line-height: 30px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:checked {
    border: none;
  }

  &:checked::before {
    content: url('/img/checkwhite.svg');
    background-color: ${({ theme }) => theme.color.main.orange};
    line-height: 34px;
  }
`;

type RadioButtonProps = {
  visible: boolean;
  handleIsOpen: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  id: string;
};

const RadioButton = ({ visible, handleIsOpen, text, id }: RadioButtonProps) => {
  return (
    <>
      <CheckBox
        type="radio"
        name="check2"
        value={text}
        onChange={handleIsOpen}
        checked={visible}
        id={id}
      />
      <label htmlFor={id} className="write_content">
        {text}
      </label>
    </>
  );
};

export default RadioButton;
