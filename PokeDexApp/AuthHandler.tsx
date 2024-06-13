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
        navigation.navigate("/pokedex");
      } else {
        navigation.navigate("/login");
      }
    };

    checkToken();
  }, [navigation]);

  return null;
};

export default AuthHandler;
