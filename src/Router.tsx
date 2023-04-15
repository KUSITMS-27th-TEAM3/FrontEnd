import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Spinner from './components/Spinner';
import NotFound from './pages/NotFound/NotFound';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import DiaryPage from './pages/DiaryPage/DiaryPage';
import MemoryPage from './pages/MemoryPage/MemoryPage';
import MyPage from './pages/MyPage/MyPage';
import FuneralPage from './pages/FuneralPage/FuneralPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/memory" element={<MemoryPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/funeral" element={<FuneralPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
