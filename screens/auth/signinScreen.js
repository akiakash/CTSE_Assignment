import React, { Component, useState } from "react";
import {
  SafeAreaView,
  View,
  Dimensions,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationEvents } from "react-navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

const { width } = Dimensions.get("screen");

const SigninScreen = ({ navigation }) => {
  const [state, setState] = useState({
    userEmail: "",
    password: "",
    isLoading: false,
  });

  const handleSubmit = async () => {
    setState({ ...state, isLoading: true });
    if (state.userEmail === "" || state.password === "") {
      alert("Please fill all required fields");
      setState({ ...state, isLoading: false });
    } else {
      try {
        await signInWithEmailAndPassword(auth, state.userEmail, state.password);
        navigation.navigate("Home");
        setState({ ...state, isLoading: false });
      } catch (error) {
        alert("Something went wrong, Please try again later.");
        setState({ ...state, isLoading: false });
      }
    }
  };

  const signinButton = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => handleSubmit()}
        style={styles.signinButtonWrapStyle}
      >
        <Text style={{ ...Fonts.whiteColor17Bold }}>
          {state.isLoading ? "Loading..." : "SIGN IN"}
        </Text>
      </TouchableOpacity>
    );
  };

  const signupText = () => {
    return (
      <Text style={{ ...Fonts.grayColor14Bold, textAlign: "center" }}>
        Don't have account? {` `}
        <Text
          onPress={() => navigation.navigate("Signup")}
          style={{ ...Fonts.primaryColor14Bold }}
        >
          Sign Up
        </Text>
      </Text>
    );
  };

  const signinWithOptions = () => {
    return (
      <View style={styles.signinWithOptionsWrapStyle}>
        <View
          style={{
            ...styles.googleFacebookButtonWrapStyle,
            backgroundColor: "#4267B2",
            marginRight: Sizes.fixPadding,
          }}
        >
          <Image
            source={require("../../assets/images/icons/facebook.png")}
            style={{ width: 15.0, height: 15.0 }}
            resizeMode="contain"
          />
          <Text
            numberOfLines={1}
            style={{
              maxWidth: width / 3.7,
              marginLeft: Sizes.fixPadding - 8.0,
              ...Fonts.whiteColor12SemiBold,
            }}
          >
            SignIn with facebook
          </Text>
        </View>
        <View
          style={{
            ...styles.googleFacebookButtonWrapStyle,
            backgroundColor: "#EA4335",
            marginLeft: Sizes.fixPadding,
          }}
        >
          <Image
            source={require("../../assets/images/icons/google.png")}
            style={{ width: 15.0, height: 15.0 }}
            resizeMode="contain"
          />
          <Text
            numberOfLines={1}
            style={{
              maxWidth: width / 3.7,
              marginLeft: Sizes.fixPadding - 5.0,
              ...Fonts.whiteColor12SemiBold,
            }}
          >
            SignIn with Google
          </Text>
        </View>
      </View>
    );
  };

  const forgotPasswordText = () => {
    return (
      <Text
        style={{
          marginTop: Sizes.fixPadding - 17.0,
          textAlign: "right",
          ...Fonts.grayColor13SemiBold,
        }}
      >
        Forget password?
      </Text>
    );
  };

  const passwordTextField = () => {
    return (
      <TextInput
        value={state.password}
        onChangeText={(text) => {
          setState({ ...state, password: text });
        }}
        placeholder="Password"
        style={styles.textFieldWrapStyle}
        selectionColor={Colors.primaryColor}
        secureTextEntry={true}
      />
    );
  };

  const userNameTextField = () => {
    return (
      <TextInput
        value={state.userEmail}
        onChangeText={(text) => {
          setState({ ...state, userEmail: text });
        }}
        placeholder="User Email"
        style={styles.textFieldWrapStyle}
        selectionColor={Colors.primaryColor}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <NavigationEvents
      // onDidFocus={() => {
      //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
      // }}
      />
      <ImageBackground
        source={require("../../assets/images/bg.png")}
        style={{ flex: 1 }}
      >
        <Text
          style={{ margin: Sizes.fixPadding * 2.0, ...Fonts.whiteColor20Bold }}
        >
          Sign In
        </Text>
        <View style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={styles.pageWrapStyle}>
            <View style={styles.signinInfoWrapStyle}>
              {userNameTextField()}
              {passwordTextField()}
              {forgotPasswordText()}
              {signinWithOptions()}
              {signupText()}
              {signinButton()}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageWrapStyle: {
    flexGrow: 1,
    justifyContent: "center",
    marginBottom: Sizes.fixPadding * 4.0,
    paddingBottom: Sizes.fixPadding * 2.0,
  },
  signinInfoWrapStyle: {
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding - 5.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
    padding: Sizes.fixPadding * 2.0,
  },
  textFieldWrapStyle: {
    ...Fonts.blackColor15SemiBold,
    borderColor: "#ececec",
    elevation: 3.0,
    borderWidth: 1.0,
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding - 5.0,
    marginVertical: Sizes.fixPadding,
    paddingHorizontal: Sizes.fixPadding,
    height: 45.0,
  },
  googleFacebookButtonWrapStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Sizes.fixPadding - 5.0,
    paddingVertical: Sizes.fixPadding + 5.0,
    paddingHorizontal: Sizes.fixPadding,
  },
  signinWithOptionsWrapStyle: {
    marginBottom: Sizes.fixPadding + 5.0,
    marginTop: Sizes.fixPadding + 10.0,
    flexDirection: "row",
    alignItems: "center",
  },
  signinButtonWrapStyle: {
    backgroundColor: Colors.primaryColor,
    borderRadius: Sizes.fixPadding - 5.0,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Sizes.fixPadding + 3.0,
    marginTop: Sizes.fixPadding * 3.0,
    marginBottom: Sizes.fixPadding,
  },
});

SigninScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(SigninScreen);
