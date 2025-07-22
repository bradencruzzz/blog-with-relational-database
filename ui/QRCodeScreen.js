// ui/QRCodeScreen.js
// For manual pairing using QR codes

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { RNCamera } from 'react-native-camera';

const QRCodeScreen = ({ pairingData, onQRCodeScanned }) => {
  return (
    <View style={styles.container}>
      {pairingData ? (
        <>
          <Text style={styles.text}>Scan this QR code with your Windows device:</Text>
          <QRCode value={JSON.stringify(pairingData)} size={200} />
        </>
      ) : (
        <>
          <Text style={styles.text}>Scan the QR code on your Windows device:</Text>
          <RNCamera
            style={styles.camera}
            onBarCodeRead={(event) => onQRCodeScanned(event.data)}
            barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  camera: {
    width: 300,
    height: 300,
  },
});

export default QRCodeScreen;
