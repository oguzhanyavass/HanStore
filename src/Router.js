import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Detail from "./pages/Detail";
import Products from "./pages/Products";

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductPage"
          component={Products}
          options={{
            title: "HanStore",
            headerTitleStyle: { color: "#adb5bd" },
            headerStyle: { backgroundColor: "#283618" },
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: "Detay",
            headerTitleStyle: {
              color: "#adb5bd",
            },
            headerStyle: { backgroundColor: "#283618" },
            headerTintColor: "#adb5bd",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
