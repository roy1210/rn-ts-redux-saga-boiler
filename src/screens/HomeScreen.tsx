import React, { useCallback, useEffect } from "react";
import { Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUserInfoRequest } from "../state/user/actions";

const HomeScreen = (props): JSX.Element => {
  const user = useSelector((state) => state.user);
  const { id, name, email } = user;
  const dispatch = useDispatch();

  const getAllUserInfo = useCallback(() => {
    dispatch(GetAllUserInfoRequest(4));
  }, [dispatch]);

  useEffect(() => {
    getAllUserInfo();
  }, [getAllUserInfo]);

  return (
    <View>
      <Button
        title="Go to about"
        onPress={() => props.navigation.navigate("About")}
      />
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
};

HomeScreen.navigationOptions = () => {
  return {
    headerTitle: "Home",
  };
};

export default HomeScreen;
