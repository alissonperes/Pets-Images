import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { getCat } from "../actions";
import { connect } from "react-redux";
import {
  TouchableOpacity,
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";

const Cat = props => {
  const { cat, fetchCat } = props;
  const { fetched, fetching, error } = cat;
  const [loaded, setLoaded] = useState(false);
  const [image, setImage] = useState();

  useEffect(() => {
    if (!fetched && !fetching && error === null) {
      setImage({ uri: "" });
      fetchCat();
      setLoaded(false);
    } else if (fetching) {
      setLoaded(false);
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
        onLoad={() => setLoaded(true)}
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          resizeMode: "contain"
        }}
      />
      {loaded ? null : (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.indicator}
        />
      )}
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
  },
  indicator: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1
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
