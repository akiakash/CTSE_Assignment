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

const EditStock = ({ navigation }) => {
  const [sId, setId] = useState("");
  const [sName, setName] = useState("");
  const [sQuantity, setQuantity] = useState("");
  const [sMaxQuantity, setMaxQuantity] = useState("");
  const [sDescription, setDescription] = useState("");
  const [sType, setType] = useState("");

  const item = navigation.getParam("item");

  // UseState

  const [state, setState] = useState({
    sId: item.id,
    sName: item.name,
    sQuantity: item.quantity,
    sMaxQuantity: item.maxQuantity,
    sDescription: item.description,
    sType: item.type,
  });

  const handleSubmit = async () => {
    // console.log("empid : ", empid);
    // console.log("empName : ", empName);
    // console.log("empAge : ", empAge);
    // console.log("empDesignation : ", empDesignation);
    // console.log("empType : ", empType);
    // console.log("empDob : ", empDob);
    await updateDoc(doc(db, "Stocks", item.id), {
      id: state.sId,
      name: state.sName,
      quantity: state.sQuantity,
      maxQuantity: state.sMaxQuantity,
      description: state.sDescription,
      type: state.sType,
    })
      .then((res) => {
        console.log("Stock successfully updated.");
        navigation.push("StocksForm");
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
          {/* <Text>Employee ID</Text>
        <TextInput
          style={styles.input}
          value={state.empid}
          onChangeText={(text) => {
            setState({ ...state, empid: text });
          }}
        /> */}
          <Text>Stock Name</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={state.sName}
            onChangeText={(text) => {
              setState({ ...state, sName: text });
            }}
          />
          <Text> Quantity</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={state.sQuantity}
            onChangeText={(text) => {
              setState({ ...state, sQuantity: text });
            }}
          />
          <Text>Maximum Quantity</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={state.sMaxQuantity}
            onChangeText={(text) => {
              setState({ ...state, sMaxQuantity: text });
            }}
          />
          <Text> Description</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={state.sDescription}
            onChangeText={(text) => {
              setState({ ...state, sDescription: text });
            }}
          />
          <Text>Stock Type</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={state.sType}
            onChangeText={(text) => {
              setState({ ...state, sType: text });
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
EditStock.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(EditStock);
