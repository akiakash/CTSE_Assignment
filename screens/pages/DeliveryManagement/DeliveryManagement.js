import { View, Text, Alert } from "react-native";

import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../../../constants/styles";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import { db } from "../../../config/firebase";
import { SelectList } from "react-native-dropdown-select-list";
import { Card, Title, Paragraph } from "react-native-paper";
// import Firebase
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const header = () => {
  return (
    <Text
      style={{
        // marginHorizontal: Sizes.fixPadding * 20.0,x
        paddingTop: 0,
        ...Fonts.blackColor20Bold,
      }}
    ></Text>
  );
};

const DeliveryManagement = ({ navigation }) => {
  const [dID, setId] = useState("");
  const [dName, setName] = useState("");
  const [dType, setType] = useState("");
  const [dPrice, setPrice] = useState("");

  const createEmp = async () => {
    try {
      await addDoc(collection(db, "Delivery"), {
        id: dID,
        name: dName,
        type: dType,
        price: dPrice,
      })
        .then(() => {
          navigation.push("DeliveryForm");
        })
        .catch((error) => alert(error));
      Alert.alert("Success", "Stock addedd Successfully");
    } catch (error) {
      Alert.alert("Error", "Create Chat Failed");
      console.log(error);
    }
  };

  const [text, onChangeText] = React.useState([]);
  const [number, onChangeNumber] = React.useState([]);
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Delivery Type", disabled: true },
    { key: "2", value: "Cash on delivery" },
    { key: "3", value: "Pickup" },
    { key: "4", value: "Door delivery" },
  ];

  const checkFun = (item) => {
    // console.log(item);
    setType(item);
  };

  return (
    <Card style={styles.container}>
      <View style={{ margin: 10 }}>
        {header()}
        {/* <Text>profileDetailScreen</Text> */}

        <SafeAreaView>
          {/* <Text>Delivery ID</Text>
          <TextInput
            style={styles.input}
            value={dID}
            onChangeText={(text) => {
              const trimmedText = text.trim();
              if (!trimmedText) {
                setId(null);
              } else {
                setId(trimmedText);
              }
            }}
          /> */}
          <Text>Delivery Person</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={dName}
            onChangeText={(text) => {
              const trimmedText = text.trim();
              if (!trimmedText) {
                setName(null);
              } else {
                setName(trimmedText);
              }
            }}
          />
          <Text> Delivery Type</Text>
          {/* <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={dType}
            onChangeText={(text) => {
              const trimmedText = text.trim();
              if (!trimmedText) {
                setType(null);
              } else {
                setType(trimmedText);
              }
            }}
          /> */}
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            onSelect={() => checkFun(selected)}
            label="Categories"
            // onChangeText={() => setEmpDesignation(selected)}
          />

          <Text>Delivery Price </Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={dPrice}
            onChangeText={(text) => {
              const trimmedText = text.trim();
              if (!trimmedText) {
                setPrice(null);
              } else {
                setPrice(trimmedText);
              }
            }}
          />

          <Button
            title="Submit"
            color="black"
            onPress={createEmp}
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
DeliveryManagement.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(DeliveryManagement);
