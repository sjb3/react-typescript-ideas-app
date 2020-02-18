import Axios, { AxiosRequestConfig } from "axios";

export interface ICredentials {
  username: string;
  password: string;
}

export interface LoginApiResponse {
  created: string;
  id: string;
  token: string;
  username: string;
}

export const onLogin = async (data: ICredentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: process.env.REACT_APP_API_BASE_URL + "/login",
    data
  };

  try {
    const {
      data: { token }
    } = await Axios.request<LoginApiResponse>(requestConfig);
    storeToken(token);
    return {
      token
    };
    // console.log(response);
  } catch (err) {
    // console.error(err);
    return { error: err.response.data.message };
  }
};

export const onRegister = async (data: ICredentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: process.env.REACT_APP_API_BASE_URL + "/register",
    data
  };

  try {
    const { data: response } = await Axios.request(requestConfig);
    console.log(response);
  } catch (err) {
    // console.error(err);
    return { error: err.response.data.message };
  }
};

export const BOUNCE_IT_TOKEN_KEY = "bounce_it_toekn_key";

const storeToken = (token: string) => {
  localStorage.setItem(BOUNCE_IT_TOKEN_KEY, token);
};
