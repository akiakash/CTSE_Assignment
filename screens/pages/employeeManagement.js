import { View, Text, Alert } from "react-native";

import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import { db } from "../../config/firebase";
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

const ProfileDetailScreen = ({ navigation }) => {
  const [empid, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [empAge, setEmpAge] = useState("");
  const [empDesignation, setEmpDesignation] = useState("");
  const [empType, setEmpType] = useState("");
  const [empDob, setEmpDob] = useState("");

  const createEmp = async () => {
    try {
      await addDoc(collection(db, "Employees"), {
        id: empid,
        name: empName,
        age: empAge,
        designation: empDesignation,
        type: empType,
        dob: empDob,
      })
        .then(() => {
          navigation.push("EmployeeForm");
        })
        .catch((error) => alert(error));
      Alert.alert("Success", "employee addedd Successfully");
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
          <Text>Employee ID</Text>
          <TextInput
            style={styles.input}
            value={empid}
            onChangeText={(text) => {
              const trimmedText = text.trim();
              if (!trimmedText) {
                setEmpId(null);
              } else {
                setEmpId(trimmedText);
              }
            }}
          />
          <Text>Employee Name</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={empName}
            onChangeText={(text) => {
              const trimmedText = text.trim();
              if (!trimmedText) {
                setEmpName(null);
              } else {
                setEmpName(trimmedText);
              }
            }}
          />
          <Text>Employee Age</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={empAge}
            onChangeText={(text) => {
              const trimmedText = text.trim();
              if (!trimmedText) {
                setEmpAge(null);
              } else {
                setEmpAge(trimmedText);
              }
            }}
          />
          <Text>Employee Designation</Text>
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
          <Text>Employee Type</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={empType}
            onChangeText={(text) => {
              const trimmedText = text.trim();
              if (!trimmedText) {
                setEmpType(null);
              } else {
                setEmpType(trimmedText);
              }
            }}
          />
          <Text>Employee Date of Birth</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={empDob}
            onChangeText={(text) => {
              const trimmedText = text.trim();
              if (!trimmedText) {
                setEmpDob(null);
              } else {
                setEmpDob(trimmedText);
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
ProfileDetailScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(ProfileDetailScreen);
