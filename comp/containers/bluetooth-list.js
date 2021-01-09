import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import BluetoothListLayout from '../components/BluetoothListLayout.js';
// import Empty from '../components/Empty.js';
import Toggle from '../components/Toggle.js';
import Subtitle from '../components/Subtitle.js';
// import Device from '../components/Device.js';
// import BtnPage from '../components/BtnPage.js';
// import BluetoothSerial from 'react-native-bluetooth-serial-next';

function BluetoothList(props) {
  return (
    <BluetoothListLayout title="Bluetooth">
      {/* {console.log(props)} */}
      <Toggle value={props.value} onValueChange={props.onValueChange} />
      <Subtitle title={'Listed Devices'} />
      <FlatList
        style={{marginBottom: 300}}
        data={props.list}
        ListEmptyComponent={props.renderEmpty}
        renderItem={props.renderItem}
      />
    </BluetoothListLayout>
  );
}
export default BluetoothList;

// npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
