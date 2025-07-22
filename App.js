// App.js
// Root component for the mobile app

import React, { useState } from 'react';
import { View, Button } from 'react-native';
import MainScreen from './ui/MainScreen';
import OnboardingScreen from './ui/OnboardingScreen';
import QRCodeScreen from './ui/QRCodeScreen';
import TransferHistoryScreen from './ui/TransferHistoryScreen';

const App = () => {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('main'); // main, qr, history
  const [transfers, setTransfers] = useState([
    { id: '1', fileName: 'document.pdf', direction: 'sent', deviceName: 'Windows Laptop', timestamp: Date.now() },
  ]);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'qr':
        return <QRCodeScreen onQRCodeScanned={() => setCurrentScreen('main')} />;
      case 'history':
        return <TransferHistoryScreen transfers={transfers} />;
      default:
        return <MainScreen />;
    }
  };

  if (!isOnboardingComplete) {
    return <OnboardingScreen onOnboardingComplete={() => setIsOnboardingComplete(true)} />;
  }

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
        <Button title="Main" onPress={() => setCurrentScreen('main')} />
        <Button title="QR Code" onPress={() => setCurrentScreen('qr')} />
        <Button title="History" onPress={() => setCurrentScreen('history')} />
      </View>
    </View>
  );
};

export default App;
