import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../../../constants/styles";
import { Alert } from "react-native";
import { Button } from "react-native-paper";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
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
import { db } from "../../../config/firebase";
import { ScrollView } from "react-native-gesture-handler";

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

const Delivery = ({ navigation }) => {
  const [state, setState] = useState({
    employeeInput: "",
    DeliveryList: null,
  });

  const getDatas = collection(db, "Delivery");

  const getDataFun = async () => {
    const res = await getDocs(getDatas);
    setState({
      ...state,
      DeliveryList: res.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
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
            const userDoc = doc(db, "Delivery", id);
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

      <Text
        style={{
          margin: 10,
          fontSize: 30,
          color: "#6c09ed",
          marginLeft: 120,
        }}
      >
        Delivery List
      </Text>
      <ScrollView>
        <SafeAreaView>
          {state.DeliveryList?.map((item, index) => (
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
                    onPress={() => navigation.push("DeliveryEdit", { item })}
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
            title="ADD Delivery"
            onPress={() => navigation.push("AddDelivery")}
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
});
Delivery.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(Delivery);
