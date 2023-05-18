import LayoutContainer from '../../components/LayoutContainer';
import WriteUpload from './WriteUpload ';

const WriteAlbum = () => {
  return <LayoutContainer children={<WriteUpload />} isMain={true} />;
};

export default WriteAlbum;
