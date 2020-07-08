import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { getDog } from "../actions";
import { connect } from "react-redux";
import {
  TouchableOpacity,
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  Animated,
  PanResponder,
  View
} from "react-native";

const Dog = props => {
  const { dog, fetchDog } = props;
  const { fetched, fetching, error } = dog;
  const [loaded, setLoaded] = useState(false);
  const [image, setImage] = useState();
  const [pan, setPan] = useState(new Animated.ValueXY());

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x,
        dy: pan.y
      }
    ]),
    onPanResponderRelease: (e, gesture) => {
      Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
    }
  });

  useEffect(() => {
    if (!fetched && !fetching && error === null) {
      setImage({ uri: "" });
      fetchDog();
      setLoaded(false);
    } else if (fetching) {
      setLoaded(false);
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
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          pan.getLayout(),
          {
            flex: 1,
            width: "100%",
            flexDirection: "column",
            justifyContent: "space-between"
          }
        ]}
      >
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
      </Animated.View>
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
  dog: store.dog,
  store
});

const mapDispatchToProps = dispatch => ({
  fetchDog: () => dispatch(getDog())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dog);
