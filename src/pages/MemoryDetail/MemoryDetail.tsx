import LayoutContainer from '../../components/Layout/LayoutContainer';
import MemoryDetailContainer from './MemoryDetailContainer';

const MemoryDetail = () => {
  return <LayoutContainer isMain={true} children={<MemoryDetailContainer />} />;
};

export default MemoryDetail;
