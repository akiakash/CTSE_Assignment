import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { Alert } from "react-native";

import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import { useToast } from "react-native-toast-notifications";
import { ToastProvider } from "react-native-toast-notifications";

const header = () => {
  return (
    <View style={{ backgroundColor: "#6c09ed" }}>
      <Text
        style={{
          marginHorizontal: Sizes.fixPadding * 20.0,
          marginVertical: Sizes.fixPadding + 20.0,
          ...Fonts.blackColor20Bold,
        }}
      ></Text>
    </View>
  );
};

const Employees = ({ navigation }) => {
  const toast = useToast();
  const [state, setState] = useState({
    employeeInput: "",
    employeeList: null,
  });

  const getDatas = collection(db, "Employees");

  const getDataFun = async () => {
    const res = await getDocs(getDatas);
    setState({
      ...state,
      employeeList: res.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    });
  };

  useEffect(() => {
    getDataFun();
  }, []);

  const handleDelete = async (id) => {
    Alert.alert(
      "Confirm Action",
      "Are you sure you want to perform this action?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: async () => {
            const userDoc = doc(db, "Employees", id);
            await deleteDoc(userDoc);
            getDataFun();
            toast.show("Hello World");
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View>
      <ToastProvider />
      {header()}
      {/* <Text>profileDetailScreen</Text> */}

      <Text
        style={{
          margin: 10,
          fontSize: 30,
          color: "#6c09ed",
          marginLeft: 120,
        }}
      >
        Employee List
      </Text>
      <ScrollView>
        <SafeAreaView>
          {state.employeeList?.map((item, index) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 10,
                backgroundColor: "#fff",
                borderRadius: "10px",
                alignContent: "center",
                alignItems: "center",
              }}
              key={{ index }}
            >
              <View>
                <Text style={{ fontSize: 19, padding: 10, paddingLeft: 15 }}>
                  ID : {item.id}
                  {"\n"}
                  {"\n"}
                  Name : {item.name}
                  {"\n"}
                  {"\n"}
                  Designation : {item.designation}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                  <FeatherIcon
                    onPress={() => navigation.push("EmployeeEdit", { item })}
                    name="edit"
                    size={23}
                    color={"#24a0ed"}
                    style={{ paddingRight: 15 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialCommunityIcon
                    onPress={() => handleDelete(item.id)}
                    name="delete"
                    size={25}
                    color={"#d11a2a"}
                    style={{ paddingRight: 15 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
          <Button
            style={{
              backgroundColor: "#6c09ed",
              fontColor: "white",
              width: 200,
              borderRadius: 10,
              marginLeft: 120,
              marginTop: 20,
            }}
            mode="contained"
            title="ADD Employee"
            onPress={() => navigation.push("AddEmployee")}
          >
            ADD Employee
          </Button>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  background: {
    color: "black",
  },
});
Employees.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(Employees);
