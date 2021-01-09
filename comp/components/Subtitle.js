import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
function Subtitle(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
  },
  title: {
    marginLeft:10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
  line: {
    borderBottomWidth: 1,
    width: 50,
    marginLeft: 5,
    flex: 1,
    marginTop: 3,
    borderColor: 'grey',
  },
});

export default Subtitle;
