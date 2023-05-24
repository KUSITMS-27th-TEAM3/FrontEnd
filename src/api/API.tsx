import axios from 'axios';
import jwtDecode, { JwtPayload } from 'jwt-decode';

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
    const accessToken = getAccessToken();
    // const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2ODQ4ODkwMDYsImV4cCI6MTY4NTQ5MzgwNiwic3ViIjoic3Jmc3JmMDEwM0BnbWFpbC5jb20iLCJUT0tFTl9UWVBFIjoiUkVGUkVTSF9UT0tFTiJ9.II5ilGE2YudWmAM8rybr0sP19eedBpPTA9hwMNf7tEBuFn-qcf6pe-bml55ghJvDOISNedd8dAmkja75cRy3BQ"

    if (!accessToken) {
      window.location.href = '/unauthorized';
    }

    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
  (error: any) => {
    console.log(error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 404) {
      console.log('404 페이지로 넘어가야 함!');
    }
    return response;
  },
  async (error) => {
    if (error.response && error.response?.status === 500) {
      const errorCode = error.response.data.errorCode;
      if (errorCode === 7001) {
        console.log("토큰만료")
        // isTokenExpired() - 토큰 만료 여부를 확인하는 함수
        const isTokenExpired = () => {
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
        };

        // tokenRefresh() - 토큰을 갱신해주는 함수
        const tokenRefresh = async () => {
          try {
            const refreshToken = getRefreshToken(); // 리프레시 토큰을 가져오기

            const requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'RefreshToken': `Bearer ${refreshToken}`
              }
            };

            fetch("http://52.78.181.46/reissue", requestOptions)
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));

            // 새로운 액세스 토큰을 저장소에 업데이트
            const newAccessToken = response.data.accessToken;

            // 새로운 액세스 토큰을 저장소에 설정
            localStorage.setItem('Authorization', newAccessToken);
          } catch (error) {
            // 토큰 갱신 실패를 처리
            console.error('토큰 갱신 실패:', error);
          }
        };

        // if (isTokenExpired()) {
        //   console.log('만료됨');
        // }

        if (isTokenExpired()) await tokenRefresh();

        const accessToken = getAccessToken();

        error.config.headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        };

        // 중단된 요청을(에러난 요청)을 토큰 갱신 후 재요청
        const response = await axios.request(error.config);
        return response;
      }

    }


    //  else if (errorCode === 1000) {
    //   console.log("사용자를 찾을 수 없음");
    // } else if (errorCode === 7000) {
    //   console.log("잘못된 토큰 요청");
    // } else if (errorCode === 2000) {
    //   console.log("요청에 해당하는 앨범 존재하지 않음");
    // } else if (errorCode === 2001) {
    //   console.log("앨범 접근 불가");
    // } else if (errorCode === 2002) {
    //   console.log("잘못된 형식의 파일을 업로드");
    // } else if (errorCode === 2003) {
    //   console.log("이미지 업로드 실패");
    // } else if (errorCode === 2004) {
    //   console.log("이미지 삭제 실패");
    // } else if (errorCode === 3000) {
    //   console.log("요청에 해당하는 공감 존재하지 않음");
    // } else if (errorCode === 4000) {
    //   console.log("답변을 작성할 질문 존재하지 않음");
    // } else if (errorCode === 4001) {
    //   console.log("요청에 해당하는 답변 존재하지 않음");
    // } else if (errorCode === 4002) {
    //   console.log("이미 해당 질문에 대한 답변 작성되어 있음");
    // } else if (errorCode === 5000) {
    //   console.log("요청에 해당하는 댓글 존재하지 않음");
    // } else if (errorCode === 5001) {
    //   console.log("댓글을 작성한 사용자와 수정,삭제하려는 사용자가 서로 다름");
    // } else if (errorCode === 6000) {
    //   console.log("요청에 해당하는 그리드 존재하지 않음");
    // } else if (errorCode === 6001) {
    //   console.log("이미 그리드 존재");
    // }

    return Promise.reject(error);
  }
);

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
        headers: { 'Content-Type': 'multipart/form-data' },
        transformRequest: (data, headers) => {
          return data;
        },
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
