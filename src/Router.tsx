import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import DiaryPage from './pages/DiaryPage/DiaryPage';
import MemoryPage from './pages/MemoryPage/MemoryPage';
import MyPage from './pages/MyPage/MyPage';
import FuneralPage from './pages/FuneralPage/FuneralPage';
import MyAlbumContainer from './pages/MemoryPage/MyAlbum/MyAlbumContainer';
import QuestionAlbumContainer from './pages/MemoryPage/QuestionsAlbum/QuestionAlbumContainer';
import SharedAlbumContainer from './pages/MemoryPage/SharedAlbum/SharedAlbumContainer';
import WriteAlbum from './pages/WriteAlbum/WriteAlbum';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/memory" element={<MemoryPage />}>
          <Route path="myAlbum" element={<MyAlbumContainer />} />
          <Route path="question" element={<QuestionAlbumContainer />} />
          <Route path="sharedAlbum" element={<SharedAlbumContainer />} />
        </Route>
        <Route path="/writeAlbum" element={<WriteAlbum />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/funeral" element={<FuneralPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
