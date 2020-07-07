import { registerRootComponent } from "expo";
import { AppRegistry } from "react-native";
import React from "react";
import App from "./App";
import Cat from "./src/components/Cat";
import Dog from "./src/components/Dog";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";

import store from "./store";

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(RNRedux);
