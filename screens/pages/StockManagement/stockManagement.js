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
        // marginHorizontal: Sizes.fixPadding * 20.0,
        paddingTop: 0,
        ...Fonts.blackColor20Bold,
      }}
    ></Text>
  );
};

const StockManagement = ({ navigation }) => {
  const [sId, setId] = useState("");
  const [sName, setName] = useState("");
  const [sQuantity, setQuantity] = useState("");
  const [sMaxQuantity, setMaxQuantity] = useState("");
  const [sDescription, setDescription] = useState("");
  const [sType, setType] = useState("");

  const createEmp = async () => {
    try {
      await addDoc(collection(db, "Stocks"), {
        id: sId,
        name: sName,
        quantity: sQuantity,
        maxQuantity: sMaxQuantity,
        description: sDescription,
        type: sType,
      })
        .then(() => {
          navigation.push("StocksForm");
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
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];
  return (
    <Card style={styles.container}>
      <View style={{ margin: 10 }}>
        {header()}
        {/* <Text>profileDetailScreen</Text> */}

        <SafeAreaView>
          <Text>Stock ID</Text>
          <TextInput
            style={styles.input}
            value={sId}
            onChangeText={(text) => {
              const trimmedText = text.trim();
              if (!trimmedText) {
                setId(null);
              } else {
                setId(trimmedText);
              }
            }}
          />
          <Text>Stock Name</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={sName}
            onChangeText={(text) => {
              const trimmedText = text.trim();
              if (!trimmedText) {
                setName(null);
              } else {
                setName(trimmedText);
              }
            }}
          />
          <Text> Quantity</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={sQuantity}
            onChangeText={(text) => {
              const trimmedText = text.trim();
              if (!trimmedText) {
                setQuantity(null);
              } else {
                setQuantity(trimmedText);
              }
            }}
          />
          <Text>Stock Type</Text>
          {/* <TextInput
          style={styles.input}
          placeholder="useless placeholder"
          keyboardType="numeric"
          value={empDesignation}
          onChangeText={(text) => {
            const trimmedText = text.trim();
            if (!trimmedText) {
              setEmpDesignation(null);
            } else {
              setEmpDesignation(trimmedText);
            }
          }}
        /> */}

          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            onSelect={() => alert(selected)}
            label="Categories"
            onChangeText={({ data }) => {
              const trimmedText = data.trim();
              if (!trimmedText) {
                setEmpDesignation(null);
              } else {
                setEmpDesignation(selected);
              }
            }}
          />
          <Text>Maximum Quantity</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={sMaxQuantity}
            onChangeText={(text) => {
              const trimmedText = text.trim();
              if (!trimmedText) {
                setMaxQuantity(null);
              } else {
                setMaxQuantity(trimmedText);
              }
            }}
          />
          <Text>Description</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={sDescription}
            onChangeText={(text) => {
              const trimmedText = text.trim();
              if (!trimmedText) {
                setDescription(null);
              } else {
                setDescription(trimmedText);
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
StockManagement.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(StockManagement);
