import axios from 'axios';
import { getAccessToken, isTokenExpired, tokenRefresh } from './ApiUtil';

const instance = axios.create();

instance.defaults.withCredentials = true;
instance.defaults.baseURL = 'http://52.78.181.46';

instance.interceptors.request.use(
  (config) => {
    // const accessToken = getAccessToken();
    const accessToken =
      'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2ODYwMjE0ODgsImV4cCI6MTY4NjAyNTA4OCwic3ViIjoibmV3ZGVhczEwMEBnbWFpbC5jb20iLCJUT0tFTl9UWVBFIjoiQUNDRVNTX1RPS0VOIn0.BANpHuZXnYIPQNxNqNpfC-XYnjVoCEiBLdmtw__kVCAX6zh_5MzcC-hdk7qdzYqQxsM9G49WGyrjbUmJ1GGRTw';

    if (!accessToken) {
      window.location.href = '/login';
      return config;
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
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      window.location.href = '/unauthorized';
    } else if (error.response?.status === 404) {
      window.location.href = '/notFound';
    } else if (error.response && error.response?.status === 500) {
      const errorCode = error.response.data.errorCode;
      if (errorCode === 7001) {
        console.log('토큰만료');
        await tokenRefresh(instance);
        const accessToken = getAccessToken();
        error.config.headers.Authorization = `Bearer ${accessToken}`;
        // 중단된 요청을(에러난 요청)을 토큰 갱신 후 재요청
        return instance(error.config);
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
  },
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
    console.log(error);
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
