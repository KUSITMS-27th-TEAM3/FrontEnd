import axios from 'axios';

const instance = axios.create();

instance.defaults.withCredentials = true;
// instance.defaults.headers['Content-Type'] = 'application/json';
// instance.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization');
instance.defaults.baseURL = 'http://52.78.181.46';

const getAccessToken = () => {
  return sessionStorage.getItem('Authorization');
};

const getRefreshToken = () => {
  return sessionStorage.getItem('RefreshToken');
};

instance.interceptors.request.use(
  (config) => {
    // const accessToken = getAccessToken();
    const accessToken =
      'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2ODQ2NzA2NDYsImV4cCI6MTY4NDY3NDI0Niwic3ViIjoic3Jmc3JmMDEwM0BnbWFpbC5jb20iLCJUT0tFTl9UWVBFIjoiQUNDRVNTX1RPS0VOIn0.w_CaDds0AmLqrsUrMug2Ijj4_IJR-g9mBOJLGFTwvxtVcKbiDIo_OQANZEk1d_CLF5braPldjS1xjvjYpL_VKQ';

    if (!accessToken) {
      throw new Error('no access token');
    }

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

const put = async (url: string, put: {}) => {
  try {
    const { data } = await instance.put(url, put);
    return data;
  } catch (error) {
    if (error instanceof Error)
      throw new Error(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${error.message}`);
  }
};

export { get, del as delete, post, put };
