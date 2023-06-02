import { AxiosInstance } from 'axios';
import jwtDecode, { JwtPayload } from 'jwt-decode';

export const getAccessToken = () => {
  return sessionStorage.getItem('Authorization');
};

export const getRefreshToken = () => {
  return sessionStorage.getItem('RefreshToken');
};

export const tokenRefresh = async (instance: AxiosInstance) => {
  const refreshToken = getRefreshToken(); // 리프레시 토큰을 가져오기

  const { data } = await instance.get('/reissue', {
    headers: { 'Content-Type': 'application/json', RefreshToken: `Bearer ${refreshToken}` },
  });

  console.log(data.accessToken);
  const newAccessToken = data.accessToken;
  sessionStorage.setItem('Authorization', newAccessToken); // 세션 스토리지에 액세스 토큰 저장
  console.log('Access token stored:', newAccessToken);
}; // tokenRefresh() - 토큰을 갱신해주는 함수

export const isTokenExpired = () => {
  const accessToken = getAccessToken();
  if (!accessToken) {
    return true;
  }
  const decodedToken = jwtDecode<JwtPayload>(accessToken);
  const currentTime = Date.now() / 1000;
  if (decodedToken.exp !== undefined && decodedToken.exp < currentTime) {
    // 토큰이 만료된 경우
    return true;
  }
  return false;
}; // isTokenExpired() - 토큰 만료 여부를 확인하는 함수
