import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from 'react-native';
import BluetoothSerial, {device} from 'react-native-bluetooth-serial-next';
import BluetoothList from '../containers/bluetooth-list.js';

function BtnPage(props) {
  const [disable, setDisable] = useState(false);

  return (
    <ScrollView style={styles.boxone}>
      <Text style={styles.text}>Device 1</Text>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.btn}
          disabled={disable}
          onPress={async () => {
            if (BluetoothSerial.isConnected) {
              setDisable(true);
              setTimeout(function () {
                setDisable(false);
              }, 1500);
              const sendData = await BluetoothSerial.write('2');
              console.log(sendData, 'ooooooooooooooooooooo');
            }
          }}>
          <View
            style={{
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              padding: 20,
            }}>
            <Text style={{color: 'white'}}>ON</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          disabled={disable}
          onPress={async () => {
            if (BluetoothSerial.isConnected) {
              setDisable(true);
              setTimeout(function () {
                setDisable(false);
              }, 1500);
              const sendData = await BluetoothSerial.write('1');
              console.log(sendData, 'ooooooooooooooooooooo');
            }
          }}>
          <View
            style={{
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              padding: 20,
            }}>
            <Text style={{color: 'white'}}>OFF</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Device 2</Text>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.btn}
          disabled={disable}
          onPress={async () => {
            if (BluetoothSerial.isConnected) {
              setDisable(true);
              setTimeout(function () {
                setDisable(false);
              }, 1500);
              const sendData = await BluetoothSerial.write('4');
              console.log(sendData, 'ooooooooooooooooooooo');
            }
          }}>
          <View
            style={{
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              padding: 20,
            }}>
            <Text style={{color: 'white'}}>ON</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          disabled={disable}
          onPress={async () => {
            if (BluetoothSerial.isConnected) {
              setDisable(true);
              setTimeout(function () {
                setDisable(false);
              }, 1500);
              const sendData = await BluetoothSerial.write('3');
              console.log(sendData, 'ooooooooooooooooooooo');
            }
          }}>
          <View
            style={{
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              padding: 20,
            }}>
            <Text style={{color: 'white'}}>OFF</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Device 3</Text>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.btn}
          disabled={disable}
          onPress={async () => {
            if (BluetoothSerial.isConnected) {
              setDisable(true);
              setTimeout(function () {
                setDisable(false);
              }, 1500);
              const sendData = await BluetoothSerial.write('6');
              console.log(sendData, 'ooooooooooooooooooooo');
            }
          }}>
          <View
            style={{
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              padding: 20,
            }}>
            <Text style={{color: 'white'}}>ON</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          disabled={disable}
          onPress={async () => {
            if (BluetoothSerial.isConnected) {
              setDisable(true);
              setTimeout(function () {
                setDisable(false);
              }, 1500);
              const sendData = await BluetoothSerial.write('5');
              console.log(sendData, 'ooooooooooooooooooooo');
            }
          }}>
          <View
            style={{
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              padding: 20,
            }}>
            <Text style={{color: 'white'}}>OFF</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Device 4</Text>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.btn}
          disabled={disable}
          onPress={async () => {
            if (BluetoothSerial.isConnected) {
              setDisable(true);
              setTimeout(function () {
                setDisable(false);
              }, 1500);
              const sendData = await BluetoothSerial.write('8');
              console.log(sendData, 'ooooooooooooooooooooo');
            }
          }}>
          <View
            style={{
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              padding: 20,
            }}>
            <Text style={{color: 'white'}}>ON</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          disabled={disable}
          onPress={async () => {
            if (BluetoothSerial.isConnected) {
              setDisable(true);
              setTimeout(function () {
                setDisable(false);
              }, 1500);
              const sendData = await BluetoothSerial.write('7');
              console.log(sendData, 'ooooooooooooooooooooo');
            }
          }}>
          <View
            style={{
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              padding: 20,
            }}>
            <Text style={{color: 'white'}}>OFF</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  boxone: {
    marginTop: 30,
  },
  view: {
    overflow: 'scroll',
  },
  box: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
    margin: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default BtnPage;
