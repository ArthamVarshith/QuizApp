import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Route from "./Routes/Route";
import * as Font from "expo-font";
import React from "react";
import Questions from "./Components/Questions";
import ProgressBar from "./Components/ProgressBar";

let customFonts = {
  NotoSansReg: require('./assets/Fonts/static/NotoSans-Regular.ttf'),
  NotoSansMed: require('./assets/Fonts/static/NotoSans-Medium.ttf'),
  QuickSandBold: require('./assets/Fonts/static/Quicksand-Bold.ttf'),
  QuickSandMed: require('./assets/Fonts/static/Quicksand-Medium.ttf')
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
