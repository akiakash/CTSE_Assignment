import { View, Text, Alert } from "react-native";

import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../../../constants/styles";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { db } from "../../../config/firebase";
// import Firebase
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const header = () => {
  return (
    <Text
      style={{
        marginHorizontal: Sizes.fixPadding * 20.0,
        marginVertical: Sizes.fixPadding + 20.0,
        ...Fonts.blackColor20Bold,
      }}
    ></Text>
  );
};

const EditDelivery = ({ navigation }) => {
  const [dID, setId] = useState("");
  const [dName, setName] = useState("");
  const [dType, setType] = useState("");
  const [dPrice, setPrice] = useState("");

  const item = navigation.getParam("item");

  // UseState

  const [state, setState] = useState({
    dID: item.id,
    dName: item.name,
    dType: item.type,
    dPrice: item.price,
  });

  const handleSubmit = async () => {
    // console.log("empid : ", empid);
    // console.log("empName : ", empName);
    // console.log("empAge : ", empAge);
    // console.log("empDesignation : ", empDesignation);
    // console.log("empType : ", empType);
    // console.log("empDob : ", empDob);
    await updateDoc(doc(db, "Delivery", item.id), {
      id: state.dID,
      name: state.dName,
      type: state.dType,
      price: state.dPrice,
    })
      .then((res) => {
        console.log("Stock successfully updated.");
        navigation.push("DeliveryForm");
      })
      .catch((err) => {
        console.log("Something went wrong");
      });
  };

  const [text, onChangeText] = React.useState([]);
  const [number, onChangeNumber] = React.useState([]);
  return (
    <Card style={styles.container}>
      <View>
        {/* {header()} */}
        {/* <Text>profileDetailScreen</Text> */}

        <SafeAreaView>
          <Text>Delivery Person</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={state.dName}
            onChangeText={(text) => {
              setState({ ...state, dName: text });
            }}
          />
          <Text> Delivery Type</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={state.dType}
            onChangeText={(text) => {
              setState({ ...state, dType: text });
            }}
          />
          <Text>Delivery Price</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={state.dPrice}
            onChangeText={(text) => {
              setState({ ...state, dPrice: text });
            }}
          />

          <Button
            title="Submit"
            color="black"
            onPress={handleSubmit}
            accessibilityLabel="Learn more about this purple button"
          />
        </SafeAreaView>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  container: {
    alignContent: "center",
    margin: 37,
    padding: 20,
    marginTop: 70,
  },
});
EditDelivery.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(EditDelivery);
