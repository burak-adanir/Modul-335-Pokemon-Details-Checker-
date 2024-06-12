import { AxiosInstance, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "./Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  accessToken: string;
  user: {
    id?: number;
    email: string;
    firstName?: string;
    lastName?: string;
    age: number;
  };
};

const UserService = (api: AxiosInstance = defaultAxiosInstance) => ({
  getActiveToken: async () => {
    const accessToken = await AsyncStorage.getItem("acces_token");
    if (accessToken) {
      return true;
    }
    return false;
  },

  signUp: async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    age: string
  ) => {
    const input = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    const data: AxiosResponse<User> = await api.post("/register", input);
    await AsyncStorage.setItem("access_token", data.data.accessToken);
    await AsyncStorage.setItem("user_details", JSON.stringify(data.data.user));
    return data.data.accessToken;
  },

  logIn: async (email: string, password: string) => {
    const input = {
      email: email,
      password: password,
    };
    const data: AxiosResponse<User> = await api.post("/login", input);
    await AsyncStorage.setItem("access_token", data.data.accessToken);
    await AsyncStorage.setItem("user_details", JSON.stringify(data.data.user));
    return data.data.accessToken;
  },

  logOut: async () => {
    const accessToken = await AsyncStorage.getItem("access_token");
    if (accessToken) {
      await AsyncStorage.removeItem("access_token");
      await AsyncStorage.removeItem("user_details");
    }
  },
});

export default UserService;
