import LayoutContainer from '../../components/layout/LayoutContainer';
import MemoryDetailContainer from './MemoryDetailContainer';

const MemoryDetail = () => {
  return <LayoutContainer isMain={true} children={<MemoryDetailContainer />} />;
};

export default MemoryDetail;
