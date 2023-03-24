import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  Dimensions,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { NavigationEvents } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

// import Firebase
import {
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";

const { width } = Dimensions.get("screen");

const EditScreen = ({navigation}) => {

    const item = navigation.getParam("item");

  // UseState
  const [state, setState] = useState({
    todoInput: item.todoDesc,
    todoList: null,
  });

  // Todo Submit Function
  const handleSubmit = async () => {
    await updateDoc(doc(db, "Todo", item.id), {
      todoDesc: state.todoInput,
      todoActive: true,
    })
      .then((res) => {
        console.log("Todo successfully updated.");
        navigation.push("Home")
      })
      .catch((err) => {
        console.log("Something went wrong");
      });
  };

  const header = () => {
    return (
      <Text
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginVertical: Sizes.fixPadding + 5.0,
          ...Fonts.blackColor20Bold,
        }}
      >
        Edit ToDo
      </Text>
    );
  };

  const todoForm = () => {
    return (
      <View
        style={{ flexDirection: "row", marginLeft: 10.0, marginRight: 10.0 }}
      >
        <View style={{ width: width - 70 }}>
          <TextInput
            value={state.todoInput}
            onChangeText={(text) => {
              setState({ ...state, todoInput: text });
            }}
            placeholder="Add Your ToDo"
            style={styles.textFieldWrapStyle}
            selectionColor={Colors.primaryColor}
          />
        </View>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          onPress={handleSubmit}
        >
          <Icon name="send" size={30} color={Colors.primaryColor} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <NavigationEvents
        onDidFocus={() => {
          // BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
        }}
      />
      <View style={{ flex: 1 }}>
        {header()}
        {todoForm()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
});

EditScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(EditScreen);
