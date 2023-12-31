import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const Result = ({ navigation, route }) => {

  const { score } = route.params;

  const showText = () => {
    if (score <= 5) {
      return "You can try better.";
    } else if (score <= 8) {
      return "Good job";
    } else {
      return "Excellent!!!";
    }
  };


  let animationSource;

  if(score==10)
  {
    animationSource=require('../assets/Animation.json');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Your Score</Text>

      <View style={styles.textWrapper}>
        <Text style={styles.scores1}>{score}</Text>
        <Text style={styles.scores2}> / 10</Text>
      </View>

      <Text style={styles.text}>{showText()}</Text>


      {/* <View style={{width: 100,height: 100}}>
      <LottieView
      source={require('../assets/Animation - 1703707343022.json')}
      autoPlay
      loop
      style={{width: '100%',height: '100%'}}
      />
      </View> */}

      
      {/* Retry Quiz button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Welcome");
        }}
        style={styles.btnReset}
      >
        <Text style={styles.btnText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  score: {
    fontFamily: "QuickSandBold",
    alignSelf: "center",
    fontSize: 27,
    marginTop: 60,
  },
  textWrapper: {
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "black",
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginTop: 30,
  },
  scores1: {
    color: "white",
    alignSelf: "center",
    fontFamily: "QuickSandBold",
    fontSize: 30,
    marginLeft: 30,
  },
  scores2: {
    color: "white",
    alignSelf: "center",
    fontFamily: "QuickSandBold",
    fontSize: 30,
  },
  text: {
    alignSelf: "center",
    marginTop: 20,
    fontFamily: "NotoSansMed",
    fontSize: 18,
  },
  btnReset: {
    backgroundColor: "gray",
    marginHorizontal: 120,
    paddingVertical: 7,
    borderColor: "black",
    borderWidth: 2.2,
    borderRadius: 15,
    marginTop: 20,
  },
  btnText: {
    alignSelf: "center",
    color: "white",
    fontSize: 17,
  },
});
