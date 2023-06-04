import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import MemoryPage from './pages/MemoryPage/MemoryPage';
import MyPage from './pages/MyPage/MyPage';
import ReviseInfo from './pages/MyPage/ReviseInfo/ReviseInfo';
import FuneralPage from './pages/FuneralPage/FuneralPage';
import MyAlbumContainer from './pages/MemoryPage/MyAlbum/MyAlbumContainer';
import QuestionAlbumContainer from './pages/MemoryPage/QuestionsAlbum/QuestionAlbumContainer';
import SharedAlbumContainer from './pages/MemoryPage/SharedAlbum/SharedAlbumContainer';
import WriteAlbum from './pages/WriteAlbum/WriteAlbum';
import MemoryDetail from './pages/MemoryDetail/MemoryDetail';
import UnAuthorized from './pages/Unauthorized/Unauthorized';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:username" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/memory" element={<MemoryPage />}>
          <Route path="myAlbum" element={<MyAlbumContainer />} />
          <Route path="question" element={<QuestionAlbumContainer />} />
          <Route path="sharedAlbum" element={<SharedAlbumContainer />} />
          <Route path="notFound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/memory/myAlbum/:id" element={<MemoryDetail />} />
        <Route path="/memory/sharedAlbum/:id" element={<MemoryDetail />} />
        <Route path="/writeAlbum" element={<WriteAlbum />} />
        <Route path="/writeAlbum/:id" element={<WriteAlbum />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/ReviseInfo" element={<ReviseInfo />} />
        <Route path="/funeral" element={<FuneralPage />} />
        <Route path="/unauthorized" element={<UnAuthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
