import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
};

AboutScreen.navigationOptions = () => {
  return {
    headerTitle: "About",
  };
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans-bold",
  },
});

export default AboutScreen;
