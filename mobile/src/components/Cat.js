import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { getCat } from "../actions";
import { connect } from "react-redux";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";

const Cat = props => {
  const { cat, fetchCat } = props;
  const { fetched, fetching, error } = cat;
  const [image, setImage] = useState({
    uri: "https://reactjs.org/logo-og.png"
  });

  useEffect(() => {
    if (!fetched && !fetching && error === null) {
      fetchCat();
    } else if (fetched) {
      setImage({ uri: cat.cat.url });
    }
  }, [fetching, fetched, error, cat]);

  const onPress = e => {
    fetchCat();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <Image
        source={image}
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>SuperLike</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10
  }
});

const mapStateToProps = store => ({
  cat: store.cat,
  store
});

const mapDispatchToProps = dispatch => ({
  fetchCat: () => dispatch(getCat())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cat);
