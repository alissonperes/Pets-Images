import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { getDog } from "../actions";
import { connect } from "react-redux";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";

const Dog = props => {
  const { dog, fetchDog } = props;
  const { fetched, fetching, error } = dog;
  const [image, setImage] = useState({
    uri: "https://reactjs.org/logo-og.png"
  });

  useEffect(() => {
    if (!fetched && !fetching && error === null) {
      fetchDog();
    } else if (fetched) {
      setImage({ uri: dog.dog.url });
    }
  }, [fetching, fetched, error, dog]);

  const onPress = e => {
    fetchDog();
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
  dog: store.dog,
  store
});

const mapDispatchToProps = dispatch => ({
  fetchDog: () => dispatch(getDog())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dog);
