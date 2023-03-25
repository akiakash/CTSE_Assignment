import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import { withNavigation } from "react-navigation";
import { Colors } from "../constants/styles";

class SplashScreen extends Component {
  render() {
    setTimeout(() => {
      this.props.navigation.navigate("Home");
    }, 2000);

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <ImageBackground
          source={require("../assets/bg.jpg")}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Image
              source={require("../assets/images/newlogo.png")}
              style={{ width: 120.0, height: 100.0 }}
              resizeMode="contain"
            /> */}
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

SplashScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(SplashScreen);
