import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Seperator from './Seperator';
function Device(props) {
  return (
    <>
    {/* {console.log(props)} */}
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          props.onPress({id: props.id, address: props.address});
        }}>
        <View style={styles.wrapperLeft}>
          <Image style={styles.leftIcon} source={props.iconLeft} />
        </View>
        <View style={styles.wrapperName}>
          <Text style={styles.name}>{props.name}</Text>
        </View>
        <View style={styles.wrapperRight}>
          <Image style={styles.iconRight} source={props.iconRight} />
        </View>
      </TouchableOpacity>
      <Seperator color="black" />
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  wrapperLeft: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperRight: {
    width: 40,
    height: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperName: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 15,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  iconLeft: {
    width: 20,
    height: 20,
  },
  iconRight: {
    width: 20,
    height: 20,
  },
});

export default Device;
