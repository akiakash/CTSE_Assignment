import React from "react";
import { View, Image, Text } from "react-native";
import { Colors, Fonts } from "../constants/styles";

import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Employees from "../screens/pages/employees";
import HomeScreen from "../screens/home/homeScreen";
import Sites from "../screens/pages/SiteManagement/sites";
import Delivery from "../screens/pages/DeliveryManagement/Delivery";
import Stocks from "../screens/pages/StockManagement/stocks";

const TabNavigator = createAppContainer(
  createBottomTabNavigator(
    {
      Employees: {
        screen: Employees,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              {/* <Image
                source={
                  focused
                    ? require("../assets/images/icons/selectedMatches.png")
                    : require("../assets/images/icons/graymatches.png")
                }
                style={{ width: 25.0, height: 25.0 }}
                resizeMode="contain"
              /> */}
              <Text
                style={
                  focused
                    ? { ...Fonts.primaryColor14Bold }
                    : { ...Fonts.grayColor14Bold }
                }
              >
                Employee
              </Text>
            </View>
          ),
        },
      },
      Sites: {
        screen: Sites,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              {/* <Image
                source={
                  focused
                    ? require("../assets/images/icons/selectedMatches.png")
                    : require("../assets/images/icons/graymatches.png")
                }
                style={{ width: 25.0, height: 25.0 }}
                resizeMode="contain"
              /> */}
              <Text
                style={
                  focused
                    ? { ...Fonts.primaryColor14Bold }
                    : { ...Fonts.grayColor14Bold }
                }
              >
                Sites
              </Text>
            </View>
          ),
        },
      },
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              {/* <Image
                source={
                  focused
                    ? require("../assets/images/icons/selectedMatches.png")
                    : require("../assets/images/icons/graymatches.png")
                }
                style={{ width: 25.0, height: 25.0 }}
                resizeMode="contain"
              /> */}
              <Text
                style={
                  focused
                    ? { ...Fonts.primaryColor14Bold }
                    : { ...Fonts.grayColor14Bold }
                }
              >
                HOME
              </Text>
            </View>
          ),
        },
      },
      Delivery: {
        screen: Delivery,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              {/* <Image
                source={
                  focused
                    ? require("../assets/images/icons/selectedMatches.png")
                    : require("../assets/images/icons/graymatches.png")
                }
                style={{ width: 25.0, height: 25.0 }}
                resizeMode="contain"
              /> */}
              <Text
                style={
                  focused
                    ? { ...Fonts.primaryColor14Bold }
                    : { ...Fonts.grayColor14Bold }
                }
              >
                Delivery
              </Text>
            </View>
          ),
        },
      },
      Stocks: {
        screen: Stocks,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              {/* <Image
                source={
                  focused
                    ? require("../assets/images/icons/selectedMatches.png")
                    : require("../assets/images/icons/graymatches.png")
                }
                style={{ width: 25.0, height: 25.0 }}
                resizeMode="contain"
              /> */}
              <Text
                style={
                  focused
                    ? { ...Fonts.primaryColor14Bold }
                    : { ...Fonts.grayColor14Bold }
                }
              >
                Stocks
              </Text>
            </View>
          ),
        },
      },
    },
    {
      initialRouteName: "Home",
      barStyle: {
        backgroundColor: Colors.whiteColor,
      },
      tabBarOptions: {
        showLabel: false,
        style: {
          height: 65.0,
          elevation: 3.0,
          borderTopColor: "#F2F2F2",
          borderTopWidth: 0.2,
        },
        activeTintColor: Colors.primaryColor,
      },
    }
  )
);

export default TabNavigator;
