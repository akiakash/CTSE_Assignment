// import React in our code
import React from "react";

// import all the components we are going to use
// import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { withNavigation } from "react-navigation";

//import Card
// import { Card } from "react-native-elements";
// import { TouchableOpacity } from "react-native-gesture-handler";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { Card } from "react-native-shadow-cards";

const image = {
  uri: "https://mcdn.wallpapersafari.com/medium/12/95/qb4OiZ.jpg",
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.MainView}>
      <TouchableOpacity
        onPress={() => navigation.push("EmployeeForm")}
        style={{
          width: "90%",
          height: "15%",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "5%",
        }}
      >
        <Card
          style={{
            width: "90%",
            height: "95%",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "5%",
            backgroundColor: "#6c09ed",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              marginRight: 100,
            }}
          >
            Employee Management
          </Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.push("DeliveryForm")}
        style={{
          width: "90%",
          height: "15%",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "5%",
        }}
      >
        <Card
          style={{
            width: "90%",
            height: "95%",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "5%",
            backgroundColor: "#6c09ed",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              marginRight: 110,
            }}
          >
            Delivery Management
          </Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.push("SitesForm")}
        style={{
          width: "90%",
          height: "15%",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "5%",
        }}
      >
        <Card
          style={{
            width: "90%",
            height: "95%",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "5%",
            backgroundColor: "#6c09ed",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              marginRight: 150,
            }}
          >
            Site Management
          </Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.push("StocksForm")}
        style={{
          width: "90%",
          height: "15%",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "5%",
        }}
      >
        <Card
          style={{
            width: "90%",
            height: "95%",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "5%",
            backgroundColor: "#6c09ed",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              marginRight: 150,
            }}
          >
            Stock Management
          </Text>
        </Card>
      </TouchableOpacity>
    </View>

    // <SafeAreaView style={styles.container}>
    //   <View style={styles.container}>
    //     <TouchableOpacity onPress={() => navigation.push("EmployeeForm")}>
    //       <Card title="Local Modules" style={styles.container1}>
    //         {/*react-native-elements Card*/}

    //         <Text style={styles.paragraph}>Employee Management</Text>
    //       </Card>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       onPress={() => navigation.push("StocksForm")}
    //       style={styles.container1}
    //     >
    //       <Card title="Local Modules" style={styles.container1}>
    //         {/*react-native-elements Card*/}

    //         <Text style={styles.paragraph}>Stock Management</Text>
    //       </Card>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={() => navigation.push("SitesForm")}>
    //       <Card title="Local Modules">
    //         {/*react-native-elements Card*/}

    //         <Text style={styles.paragraph}>Site/Place Management</Text>
    //       </Card>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={() => navigation.push("DeliveryForm")}>
    //       <Card title="Local Modules">
    //         {/*react-native-elements Card*/}

    //         <Text style={styles.paragraph}>Delivery Management</Text>
    //       </Card>
    //     </TouchableOpacity>
    //   </View>
    // </SafeAreaView>
  );
};
HomeScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(HomeScreen);

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 40,
    // backgroundColor: 'green',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: 500,
    height: 800,
  },
  card: {
    width: "90%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
    backgroundColor: "#6c09ed",
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingTop: 40,
//     backgroundColor: "#ecf0f1",
//   },
//   container1: {
//     width: 250,
//     backgroundColor: "#ecf0f1",
//     borderRadius: 100,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "#34495e",
//   },
// });
