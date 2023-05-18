import LayoutContainer from '../../components/LayoutContainer';
import WriteAlbumContainer from './WriteAlbumContainer';

const WriteAlbum = () => {
  return <LayoutContainer children={<WriteAlbumContainer />} isMain={true} />;
};

export default WriteAlbum;
