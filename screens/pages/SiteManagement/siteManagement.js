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

const SiteManagement = ({ navigation }) => {
  const [sId, setId] = useState("");
  const [sName, setName] = useState("");
  const [sPlace, setPlace] = useState("");
  const [sImage, setImage] = useState("");

  const createEmp = async () => {
    try {
      await addDoc(collection(db, "Sites"), {
        id: sId,
        name: sName,
        place: sPlace,
        image: sImage,
      })
        .then(() => {
          navigation.push("SitesForm");
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
    { key: "1", value: "Sites Place", disabled: true },
    { key: "2", value: "Place A" },
    { key: "3", value: "Place B" },
    { key: "4", value: "Place C" },
  ];

  const checkFun = (item) => {
    // console.log(item);
    setPlace(item);
  };

  return (
    <Card style={styles.container}>
      <View style={{ margin: 10 }}>
        {header()}
        {/* <Text>profileDetailScreen</Text> */}

        <SafeAreaView>
          {/* <Text>Site ID</Text>
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
          /> */}
          <Text>Site Name</Text>
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
          <Text> Site Place</Text>
          {/* <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={sPlace}
            onChangeText={(text) => {
              const trimmedText = text.trim();
              if (!trimmedText) {
                setPlace(null);
              } else {
                setPlace(trimmedText);
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
          <Text>Site Description </Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={sImage}
            onChangeText={(text) => {
              const trimmedText = text.trim();
              if (!trimmedText) {
                setImage(null);
              } else {
                setImage(trimmedText);
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
SiteManagement.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(SiteManagement);
