import { StyleSheet, Text, View, Animated } from "react-native";
import React from "react";
import data from "../QuizData";

const ProgressBar = ({ progress }) => {
  const allQuestions = data;

  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.ProgressBared}>
      <Animated.View
        style={[
          {
            height: 10,
            borderRadius: 5,
            backgroundColor: "black",
          },
          {
            width: progressAnim,
          },
        ]}
      ></Animated.View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  ProgressBared: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#00000020",
    marginTop: 40,
    height: 10
  },
});
