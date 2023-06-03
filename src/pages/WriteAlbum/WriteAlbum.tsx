import LayoutContainer from '../../components/Layout/LayoutContainer';
import WriteAlbumContainer from './WriteAlbumContainer';

const WriteAlbum = () => {
  return <LayoutContainer children={<WriteAlbumContainer />} isMain={true} />;
};

export default WriteAlbum;
