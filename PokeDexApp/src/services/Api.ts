import axios, { AxiosInstance } from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = "http://vivaldi.daffre.com:3030";

const jwt = "access_token";

export const defaultAxiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

defaultAxiosInstance.interceptors.request.use(async (request) => {
  const accessToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdpYW5sdWNhQG5vc2VyeW91bmcuY2giLCJpYXQiOjE3MTgxOTA1MjksImV4cCI6MTcxODE5NDEyOSwic3ViIjoiMiJ9.GYwF5uuWucItPw-KBzUKFAoTOYQHfX3cX7KBS8cMX14";

  if (accessToken) {
    request.headers.Authorization = accessToken;
  }
  return request;
});