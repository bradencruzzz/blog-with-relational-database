// ui/MainScreen.js
// Main UI for the mobile app

import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import ProgressBar from './ProgressBar';

const MainScreen = () => {
  const [trustedDevices, setTrustedDevices] = useState([
    { id: '1', name: 'Windows Laptop' },
  ]);
  const [transferProgress, setTransferProgress] = useState(0);

  const handleSendFile = () => {
    // TODO: Implement file picker and sending logic
    // For now, simulate progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setTransferProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vibe Airdrop</Text>
      <Button title="Send File" onPress={handleSendFile} />
      {transferProgress > 0 && <ProgressBar progress={transferProgress} />}
      <Text style={styles.subtitle}>Trusted Devices</Text>
      <FlatList
        data={trustedDevices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.deviceItem}>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  deviceItem: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MainScreen;
