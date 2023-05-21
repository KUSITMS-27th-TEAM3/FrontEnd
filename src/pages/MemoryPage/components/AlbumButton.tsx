import { MouseEventHandler } from 'react';
import { IconButton } from '../../../components/CommonStyle';

type AlbumButtonProps = {
  text: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

const AlbumButton = ({ text, handleClick }: AlbumButtonProps) => {
  return (
    <IconButton width="12vw" height="41px" minWidth="130px" maxWidth="171px" onClick={handleClick}>
      <div style={{ marginLeft: '15px' }}>{text}</div>
      <img src="/img/arrow.svg" alt="arrow" />
    </IconButton>
  );
};

export default AlbumButton;
