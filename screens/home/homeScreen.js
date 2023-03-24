// import React, { useState, useEffect } from "react";
// import {
//   SafeAreaView,
//   StatusBar,
//   Dimensions,
//   View,
//   BackHandler,
//   ScrollView,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   Text,
//   StyleSheet,
//   TextInput,
// } from "react-native";
// import { withNavigation } from "react-navigation";
// import { Colors, Fonts, Sizes } from "../../constants/styles";
// import * as Progress from "react-native-progress";
// import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { NavigationEvents } from "react-navigation";
// import Icon from "react-native-vector-icons/Ionicons";
// import FeatherIcon from "react-native-vector-icons/Feather";
// import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
// import { Alert } from "react-native";

// // import Firebase
// import {
//   addDoc,
//   collection,
//   deleteDoc,
//   doc,
//   getDocs,
// } from "firebase/firestore";
// import { db } from "../../config/firebase";

// const { width } = Dimensions.get("screen");

// const HomeScreen = ({ navigation }) => {
//   // UseState
//   const [state, setState] = useState({
//     todoInput: "",
//     todoList: null,
//   });

//   // Todo Delete Funtion
//   const handleDelete = async (id) => {
//     Alert.alert(
//       "Confirm Action",
//       "Are you sure you want to perform this action?",
//       [
//         {
//           text: "Cancel",
//           style: "cancel",
//         },
//         {
//           text: "Confirm",
//           onPress: async () => {
//             const userDoc = doc(db, "Todo", id);
//             await deleteDoc(userDoc);
//             getDataFun();
//           },
//         },
//       ],
//       { cancelable: false }
//     );
//   };

//   // Todo Submit Function
//   const handleSubmit = async () => {
//     if (state.todoInput === "") {
//       alert("Please fill input filed");
//     } else {
//       await addDoc(collection(db, "Todo"), {
//         todoDesc: state.todoInput,
//         todoActive: true,
//       })
//         .then((res) => {
//           console.log("Todo successfully added.");
//           setState({ ...state, todoInput: "" });
//           getDataFun();
//         })
//         .catch((err) => {
//           console.log("Something went wrong");
//         });
//     }
//   };

//   // Todo Get Funtion from Firebase
//   const getDatas = collection(db, "Todo");

//   const getDataFun = async () => {
//     const res = await getDocs(getDatas);
//     setState({
//       ...state,
//       todoList: res.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
//     });
//   };

//   useEffect(() => {
//     getDataFun();
//   }, []);

//   const header = () => {
//     return (
//       <Text
//         style={{
//           marginHorizontal: Sizes.fixPadding * 2.0,
//           marginVertical: Sizes.fixPadding + 20.0,
//           ...Fonts.blackColor20Bold,
//         }}
//       >
//         TODO APP
//       </Text>
//     );
//   };

//   const todoForm = () => {
//     return (
//       <View
//         style={{ flexDirection: "row", marginLeft: 12.0, marginRight: 12.0 }}
//       >
//         <View style={{ width: width - 70 }}>
//           <TextInput
//             value={state.todoInput}
//             onChangeText={(text) => {
//               setState({ ...state, todoInput: text });
//             }}
//             placeholder="Add Your TODO"
//             style={styles.textFieldWrapStyle}
//             selectionColor={Colors.primaryColor}
//           />
//         </View>
//         <TouchableOpacity
//           style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//           onPress={handleSubmit}
//         >
//           <Icon name="send" size={30} color={Colors.primaryColor} />
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const todoList = () => {
//     return (
//       <>
//         {state.todoList?.map((item) => (
//           <View
//             style={{
//               backgroundColor: Colors.whiteColor,
//               height: 50,
//               flex: 1,
//               flexDirection: "row",
//               justifyContent: "space-between",
//               alignItems: "center",
//               marginTop: 5.0,
//               marginBottom: 5.0,
//             }}
//             key={`${item.id}`}
//           >
//             <Text style={{ fontSize: 19, padding: 10, paddingLeft: 15 }}>
//               {item.todoDesc}
//             </Text>
//             <View style={{ flexDirection: "row" }}>
//               <TouchableOpacity>
//                 <FeatherIcon
//                   onPress={() => navigation.push("EditTodo", { item })}
//                   name="edit"
//                   size={23}
//                   color={"#24a0ed"}
//                   style={{ paddingRight: 15 }}
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <MaterialCommunityIcon
//                   onPress={() => handleDelete(item.id)}
//                   name="delete"
//                   size={25}
//                   color={"#d11a2a"}
//                   style={{ paddingRight: 15 }}
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>
//         ))}
//       </>
//     );
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
//       <StatusBar backgroundColor={Colors.primaryColor} />
//       <NavigationEvents
//         onDidFocus={() => {
//           // BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
//         }}
//       />
//       <View style={{ flex: 1 }}>
//         {header()}

//         <ScrollView showsVerticalScrollIndicator={false}>
//           {todoList()}
//         </ScrollView>
//         {todoForm()}
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   textFieldWrapStyle: {
//     ...Fonts.blackColor15SemiBold,
//     borderColor: "#ececec",
//     elevation: 3.0,
//     borderWidth: 1.0,
//     backgroundColor: Colors.whiteColor,
//     borderRadius: Sizes.fixPadding - 5.0,
//     marginVertical: Sizes.fixPadding,
//     paddingHorizontal: Sizes.fixPadding,
//     height: 45.0,
//   },
// });

// HomeScreen.navigationOptions = () => {
//   return {
//     header: () => null,
//   };
// };

// export default withNavigation(HomeScreen);

// React Native Card View for Android and IOS
// https://aboutreact.com/react-native-card-view/

// import React in our code
import React from "react";

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { withNavigation } from "react-navigation";

//import Card
import { Card } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.push("EmployeeForm")}>
          <Card title="Local Modules">
            {/*react-native-elements Card*/}

            <Text style={styles.paragraph}>Employee Management</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("StocksForm")}>
          <Card title="Local Modules">
            {/*react-native-elements Card*/}

            <Text style={styles.paragraph}>Stock Management</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("SitesForm")}>
          <Card title="Local Modules">
            {/*react-native-elements Card*/}

            <Text style={styles.paragraph}>Site/Place Management</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("DeliveryForm")}>
          <Card title="Local Modules">
            {/*react-native-elements Card*/}

            <Text style={styles.paragraph}>Delivery Management</Text>
          </Card>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
HomeScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e",
  },
});
