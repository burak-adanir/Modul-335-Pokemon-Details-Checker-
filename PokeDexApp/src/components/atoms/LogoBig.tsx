import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

const LogoBig = () => {
  return (
    <Image
      source={require("../../../assets/International_Pokémon_logo.png")}
      style={styles.bigLogo}
    />
  );
};

const styles = StyleSheet.create({
  bigLogo: {
    position: 'absolute',
    top: '7%',
    alignSelf: 'center',
    height: undefined,
    aspectRatio: 3,
  },
});

export default LogoBig;
