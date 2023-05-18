import axios from 'axios';

const instance = axios.create();

instance.defaults.withCredentials = true;
// instance.defaults.headers['Content-Type'] = 'application/json';
// instance.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization');
instance.defaults.baseURL = 'http://52.78.181.46';

const getAccessToken = () => {
  return localStorage.getItem('Authorization');
};

const getRefreshToken = () => {
  return localStorage.getItem('RefreshToken');
};

instance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();

    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

// instance.interceptors.response.use(
//   (response) => {
//     if (response.status === 404) {
//       console.log('404 페이지로 넘어가야 함!');
//     }

//     return response;
//   },
//   async (error) => {
//     if (error.response?.status === 401) {
//       // isTokenExpired() - 토큰 만료 여부를 확인하는 함수
//       // tokenRefresh() - 토큰을 갱신해주는 함수
//       if (isTokenExpired()) await tokenRefresh();

//       const accessToken = getToken();

//       error.config.headers = {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${accessToken}`,
//       };

//       // 중단된 요청을(에러난 요청)을 토큰 갱신 후 재요청
//       const response = await axios.request(error.config);
//       return response;
//     }
//     return Promise.reject(error);
//   }
// );

const get = async (url: string) => {
  try {
    const { data } = await instance.get(url);
    return data;
  } catch (error) {
    console.log(error);
    if (error instanceof Error)
      throw new Error(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${error.message}`);
  }
};

const del = async (url: string) => {
  try {
    const { data } = await instance.delete(url);
    return data;
  } catch (error) {
    if (error instanceof Error)
      throw new Error(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${error.message}`);
  }
};

/**
 *
 * @param url : url주소 ex) /api/shops
 * @param post : body
 * @param config : default = null, 이미지 보낼때만 "imgPost" 설정 > 'Content-Type': 'multipart/form-data' 설정
 * @returns : res.data 반환
 */
const post = async (url: string, post: {}, config: 'imgPost' | null = null) => {
  try {
    if (config === 'imgPost') {
      const result = await instance.post(url, post, {
        headers: { 'Content-Type': `multipart/form-data` },
      });
      return result.data;
    }
    const result = await instance.post(url, post);
    return result.data;
  } catch (error) {
    if (error instanceof Error)
      throw new Error(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${error.message}`);
  }
};

const patch = async (url: string, patch: {}) => {
  try {
    const { data } = await instance.patch(url, patch);
    return data;
  } catch (error) {
    if (error instanceof Error)
      throw new Error(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${error.message}`);
  }
};

export { get, del as delete, post, patch };
