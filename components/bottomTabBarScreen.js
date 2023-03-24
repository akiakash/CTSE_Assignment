// import React from "react";
// import { View, Image, Text } from "react-native";
// import { Colors, Fonts } from "../constants/styles";
// import HomeScreen from "../screens/home/homeScreen";
// import MatchesScreen from "../screens/matches/matchesScreen";
// import SearchScreen from "../screens/search/searchScreen";
// import ProfileScreen from "../screens/profile/profileScreen";
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createAppContainer } from 'react-navigation';

// const TabNavigator = createAppContainer(
//     createBottomTabNavigator(
//         {
//             Matches: {
//                 screen: MatchesScreen,
//                 navigationOptions: {
//                     tabBarIcon: ({ focused }) => (
//                         <View style={{ alignItems: 'center' }}>
//                             <Image
//                                 source={
//                                     focused
//                                         ?
//                                         require('../assets/images/icons/selectedMatches.png')
//                                         :
//                                         require('../assets/images/icons/graymatches.png')
//                                 }
//                                 style={{ width: 25.0, height: 25.0, }}
//                                 resizeMode="contain"
//                             />
//                             <Text style={focused ? { ...Fonts.primaryColor14Bold } : { ...Fonts.grayColor14Bold }}>
//                                 Matches
//                             </Text>
//                         </View>
//                     ),
//                 },
//             },
//             Search: {
//                 screen: SearchScreen,
//                 navigationOptions: {
//                     tabBarIcon: ({ focused }) => (
//                         <View style={{ alignItems: 'center' }}>
//                             <Image
//                                 source={
//                                     focused
//                                         ?
//                                         require('../assets/images/icons/selectedSearch.png')
//                                         :
//                                         require('../assets/images/icons/graysearch.png')
//                                 }
//                                 style={{ width: 25.0, height: 25.0, }}
//                                 resizeMode="contain"
//                             />
//                             <Text style={focused ? { ...Fonts.primaryColor14Bold } : { ...Fonts.grayColor14Bold }}>
//                                 Search
//                             </Text>
//                         </View>
//                     ),
//                 }
//             },
//             Profile: {
//                 screen: ProfileScreen,
//                 navigationOptions: {
//                     header: () => null,
//                     tabBarIcon: ({ focused }) => (
//                         <View style={{ alignItems: 'center' }}>
//                             <Image
//                                 source={
//                                     focused
//                                         ?
//                                         require('../assets/images/icons/selectedProfile.png')
//                                         :
//                                         require('../assets/images/icons/grayprofile.png')
//                                 }
//                                 style={{ width: 25.0, height: 25.0, }}
//                                 resizeMode="contain"
//                             />
//                             <Text style={focused ? { ...Fonts.primaryColor14Bold } : { ...Fonts.grayColor14Bold }}>
//                                 Profile
//                             </Text>
//                         </View>
//                     ),
//                 }
//             },
//         },
//         {
//             initialRouteName: "Home",
//             barStyle: {
//                 backgroundColor: Colors.whiteColor,
//             },
//             tabBarOptions: {
//                 showLabel: false,
//                 style: {
//                     height: 65.0,
//                     elevation: 3.0,
//                     borderTopColor: '#F2F2F2',
//                     borderTopWidth: 0.20,
//                 },
//                 activeTintColor: Colors.primaryColor,
//             },
//         },
//     )
// );

// export default TabNavigator;


