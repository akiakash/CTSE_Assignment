import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { Alert } from "react-native";

import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
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

const Employees = ({ navigation }) => {
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
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View>
      {header()}
      {/* <Text>profileDetailScreen</Text> */}

      <Button
        title="Add Employee"
        color="black"
        onPress={() => navigation.push("AddEmployee")}
        accessibilityLabel="Learn more about this purple button"
      />
      <Text style={{ margin: 10, fontSize: 20 }}>Employee List</Text>
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
                  {item.name}
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
});
Employees.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(Employees);
