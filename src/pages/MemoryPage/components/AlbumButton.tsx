import { IconButton } from '../../../components/CommonStyle';

type AlbumButtonProps = {
  text: string;
};

const AlbumButton = ({ text }: AlbumButtonProps) => {
  return (
    <IconButton width="12vw" height="41px" minWidth="130px" maxWidth="171px">
      <div style={{ marginLeft: '15px' }}>{text}</div>
      <img src="/img/arrow.svg" alt="arrow" />
    </IconButton>
  );
};

export default AlbumButton;
