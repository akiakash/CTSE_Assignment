import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./components/loadingScreen";
import signinScreen from "./screens/auth/signinScreen";
import signupScreen from "./screens/auth/signupScreen";
import splashScreen from "./screens/splashScreen";
import { LogBox } from "react-native";
import homeScreen from "./screens/home/homeScreen";
import EditTodoScreen from "./screens/editTodo/editTodoScreen";
import FormScreen from "./screens/pages/employeeManagement";
import ProfileDetailScreen from "./screens/pages/employeeManagement";

import Employees from "./screens/pages/employees";
import editEmployee from "./screens/pages/editEmployee";
import EditEmployee from "./screens/pages/editEmployee";
import HomeScreen from "./screens/home/homeScreen";
import StockManagement from "./screens/pages/StockManagement/stockManagement";
import stocks from "./screens/pages/StockManagement/stocks";
import editStock from "./screens/pages/StockManagement/editStock";
import siteManagement from "./screens/pages/SiteManagement/siteManagement";
import sites from "./screens/pages/SiteManagement/sites";
import editSite from "./screens/pages/SiteManagement/editSite";
import DeliveryManagement from "./screens/pages/DeliveryManagement/DeliveryManagement";
import Delivery from "./screens/pages/DeliveryManagement/Delivery";
import editDelivery from "./screens/pages/DeliveryManagement/editDelivery";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
  "Animated: `useNativeDriver` was not specified.",
]);

const switchNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Splash: splashScreen,
    mainFlow: createStackNavigator({
      // Signin: signinScreen,
      // Signup: signupScreen,
      Home: HomeScreen,
      // EditTodo: EditTodoScreen,
      EmployeeForm: Employees,
      EmployeeEdit: EditEmployee,
      AddEmployee: ProfileDetailScreen,
      AddStock: StockManagement,
      StocksForm: stocks,
      StockEdit: editStock,
      AddSites: siteManagement,
      SitesForm: sites,
      SitesEdit: editSite,
      AddDelivery: DeliveryManagement,
      DeliveryForm: Delivery,
      DeliveryEdit: editDelivery,
    }),
  },
  {
    initialRouteName: "Loading",
    transitionSpec: {
      duration: 400,
    },
  }
);

const App = createAppContainer(switchNavigator);

export default () => {
  return <App />;
};
