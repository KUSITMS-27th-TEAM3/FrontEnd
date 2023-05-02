import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import DiaryPage from './pages/DiaryPage/DiaryPage';
import MemoryPage from './pages/MemoryPage/MemoryPage';
import MyPage from './pages/MyPage/MyPage';
import FuneralPage from './pages/FuneralPage/FuneralPage';
import MyAlbum from './pages/MemoryPage/MyAlbum/MemoryPage';
import QuestionAlbum from './pages/MemoryPage/QuestionsAlbum/MemoryPage';
import SharedAlbum from './pages/MemoryPage/SharedAlbum/MemoryPage';
import WriteAlbum from './pages/MemoryPage/WriteAlbum/MemoryPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/memory" element={<MemoryPage />}>
          <Route path="myAlbum" element={<MyAlbum />} />
          <Route path="question" element={<QuestionAlbum />} />
          <Route path="sharedAlbum" element={<SharedAlbum />} />
          <Route path="writeAlbum" element={<WriteAlbum />} />가로 고정 사이즈: 1920PX
        </Route>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/funeral" element={<FuneralPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
