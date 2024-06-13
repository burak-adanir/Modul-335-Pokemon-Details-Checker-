import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import UserService from "./src/services/UserService";

const AuthHandler = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const hasToken = await UserService().getActiveToken();
      console.log("Has token:", hasToken);
      if (hasToken) {
        navigation.navigate("/navbar");
      } else {
        navigation.navigate("/login");
      }
    };

    checkToken();
    const intervalId = setInterval(checkToken, 1000);
    return () => clearInterval(intervalId);
  }, [navigation]);

  return null;
};

export default AuthHandler;
