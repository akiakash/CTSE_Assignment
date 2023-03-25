import { View, Text, Alert } from "react-native";

import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { db } from "../../config/firebase";
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

const EditEmployee = ({ navigation }) => {
  const [empid, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [empAge, setEmpAge] = useState("");
  const [empDesignation, setEmpDesignation] = useState("");
  const [empType, setEmpType] = useState("");
  const [empDob, setEmpDob] = useState("");

  const item = navigation.getParam("item");

  // UseState

  const [state, setState] = useState({
    empid: item.id,
    empName: item.name,
    empAge: item.age,
    empDesignation: item.designation,
    empType: item.type,
    empDob: item.dob,
  });

  const handleSubmit = async () => {
    console.log("empid : ", empid);
    console.log("empName : ", empName);
    console.log("empAge : ", empAge);
    console.log("empDesignation : ", empDesignation);
    console.log("empType : ", empType);
    console.log("empDob : ", empDob);
    await updateDoc(doc(db, "Employees", item.id), {
      id: state.empid,
      name: state.empName,
      age: state.empAge,
      designation: state.empDesignation,
      type: state.empType,
      dob: state.empDob,
    })
      .then((res) => {
        console.log("Todo successfully updated.");
        navigation.push("EmployeeForm");
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
          <Text>Employee Name</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={state.empName}
            onChangeText={(text) => {
              setState({ ...state, empName: text });
            }}
          />
          <Text>Employee Age</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={state.empAge}
            onChangeText={(text) => {
              setState({ ...state, empAge: text });
            }}
          />
          <Text>Employee Designation</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={state.empDesignation}
            onChangeText={(text) => {
              setState({ ...state, empDesignation: text });
            }}
          />
          <Text>Employee Type</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={state.empType}
            onChangeText={(text) => {
              setState({ ...state, empType: text });
            }}
          />
          <Text>Employee Date of Birth</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={state.empDob}
            onChangeText={(text) => {
              setState({ ...state, empDob: text });
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
EditEmployee.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(EditEmployee);
