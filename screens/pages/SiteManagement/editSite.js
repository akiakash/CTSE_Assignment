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

const EditSite = ({ navigation }) => {
  const [sId, setId] = useState("");
  const [sName, setName] = useState("");
  const [sPlace, setPlace] = useState("");
  const [sImage, setImage] = useState("");

  const item = navigation.getParam("item");

  // UseState

  const [state, setState] = useState({
    sId: item.id,
    sName: item.name,
    sPlace: item.place,
    sImage: item.image,
  });

  const handleSubmit = async () => {
    // console.log("empid : ", empid);
    // console.log("empName : ", empName);
    // console.log("empAge : ", empAge);
    // console.log("empDesignation : ", empDesignation);
    // console.log("empType : ", empType);
    // console.log("empDob : ", empDob);
    await updateDoc(doc(db, "Sites", item.id), {
      id: state.sId,
      name: state.sName,
      place: state.sPlace,
      image: state.sImage,
    })
      .then((res) => {
        console.log("Stock successfully updated.");
        navigation.push("SitesForm");
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
          <Text>Site Id</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={state.sId}
            onChangeText={(text) => {
              setState({ ...state, sId: text });
            }}
          />
          <Text>Site Name</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={state.sName}
            onChangeText={(text) => {
              setState({ ...state, sName: text });
            }}
          />
          <Text> Site Place</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={state.sPlace}
            onChangeText={(text) => {
              setState({ ...state, sPlace: text });
            }}
          />
          <Text>Site Image</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value={state.sImage}
            onChangeText={(text) => {
              setState({ ...state, sImage: text });
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
EditSite.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(EditSite);
