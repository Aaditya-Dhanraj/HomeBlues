/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BluetoothList from './comp/containers/bluetooth-list.js';
import Empty from './comp/components/Empty.js';
import Device from './comp/components/Device.js';
import BtnPage from './comp/components/BtnPage.js';
import BluetoothSerial from 'react-native-bluetooth-serial-next';

const App: () => React$Node = () => {
  const [list, setlist] = useState([]);
  const [blEnable, setBlEnable] = useState(false);
  const [device, setDevice] = useState({});

  const renderEmpty = () => <Empty text="No devices Found" />;

  const renderItem = ({item}) => {
    // console.log(item);
    return (
      <Device
        {...item}
        onPress={onPress}
        iconLeft={require('./comp/icon/laptop.png')}
        iconRight={require('./comp/icon/settings.png')}
      />
    );
  };

  const onPress = async (device) => {
    await setDevice(device);
    const deviceConnect = await BluetoothSerial.connect(device.id);
    if (BluetoothSerial.isConnected) {
      // const sendData = await BluetoothSerial.write('1');
    }
    console.log(deviceConnect, 'yayyayyayyay', device);
  };

  useEffect(() => {
    async function init() {
      const enable = await BluetoothSerial.requestEnable();
      const list = await BluetoothSerial.list();
      setlist(list);
      setBlEnable(enable);
      // console.log(list);
    }

    init();

    return () => {
      async function remove() {
        await BluetoothSerial.stopScanning();
        console.log('Terminate Scan');
      }
      remove();
    };
  }, []);

  const enableBluetooth = async () => {
    try {
      await BluetoothSerial.requestEnable();
      const list = await BluetoothSerial.list();
      await BluetoothSerial.stopScanning();
      setBlEnable(true);
      setlist(list);
    } catch (error) {
      console.log(error);
    }
  };

  const disableBluetooth = async () => {
    try {
      await BluetoothSerial.disable();
      await BluetoothSerial.stopScanning();
      setBlEnable(false);
      setlist([]);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleBluetooth = (value) => {
    if (value) {
      return enableBluetooth();
    }
    disableBluetooth();
  };

  return (
    <View>
      {!device.id ? (
        <BluetoothList
          value={blEnable}
          onValueChange={toggleBluetooth}
          list={list.filter((item) => item.name.includes('Bt'))}
          renderEmpty={renderEmpty}
          renderItem={renderItem}
        />
      ) : (
        <View>
          <BtnPage />
          <TouchableOpacity
            style={styles.btn}
            onPress={async () => {
              const onDisConnect = await BluetoothSerial.disconnect(device.id);
              await setDevice({});
              console.log(device, 'disconnected successfully', onDisConnect);
            }}>
            <View
              style={{
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                padding: 20,
                borderColor: 'black',
                borderWidth: 4,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                All Devices
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
