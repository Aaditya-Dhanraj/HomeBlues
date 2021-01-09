import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

function Seperator(props) {
  return (
    <View
      style={[
        styles.seperator,
        {borderColor: props.color ? props.color : 'grey'},
      ]}></View>
  );
}

const styles = StyleSheet.create({
  seperator: {
    flex: 1,
    borderTopWidth: 1,
    marginLeft: 60,
    marginRight: 25,
  },
});

export default Seperator;
