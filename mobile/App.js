import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Cat from "./src/components/Cat";
import Dog from "./src/components/Dog";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Dog"
      tabBarOptions={{
        activeTintColor: "#e91e63"
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Dog}
        options={{
          tabBarLabel: "Dogs",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dog" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Cat}
        options={{
          tabBarLabel: "Cats",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cat" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;

// import "react-native-gesture-handler";
// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import Cat from "./src/components/Cat";
// import Dog from "./src/components/Dog";
//
// const Stack = createStackNavigator();
//
// const App = props => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Dog" component={Dog} options={{ title: "Dogs" }} />
//         <Stack.Screen name="Cat" component={Cat} options={{ title: "Cats" }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
//
// export default App;
//

// import { StatusBar } from "expo-status-bar";
// import React, { useState, useEffect } from "react";
// import { getCat } from "./src/actions";
// import { connect } from "react-redux";
// import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
//
// // const image = { uri: "https://reactjs.org/logo-og.png" };
//
// const App = props => {
//   const { cat, fetchCat } = props;
//   const { fetched, fetching, error } = cat;
//   const [image, setImage] = useState({
//     uri: "https://reactjs.org/logo-og.png"
//   });
//
//   // console.log(cat);
//
//   useEffect(() => {
//     if (!fetched && !fetching && error === null) {
//       fetchCat();
//     } else if (fetched) {
//       setImage({ uri: cat.cat.url });
//     }
//   }, [fetching, fetched, error, cat]);
//
//   const onPress = e => {
//     fetchCat();
//   };
//
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto"></StatusBar>
//       <Image
//         source={image}
//         style={{
//           flex: 1,
//           width: "100%",
//           flexDirection: "column",
//           justifyContent: "space-between"
//         }}
//       />
//       <TouchableOpacity style={styles.button} onPress={onPress}>
//         <Text>SuperLike</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   button: {
//     alignItems: "center",
//     backgroundColor: "#DDDDDD",
//     padding: 10,
//     marginBottom: 10
//   }
// });
//
// const mapStateToProps = store => ({
//   cat: store.cat,
//   store
// });
//
// const mapDispatchToProps = dispatch => ({
//   fetchCat: () => dispatch(getCat())
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
