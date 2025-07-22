// ui/TransferHistoryScreen.js
// Displays a log of sent and received transfers

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TransferHistoryScreen = ({ transfers }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transfer History</Text>
      <FlatList
        data={transfers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transferItem}>
            <Text>{item.fileName}</Text>
            <Text>{item.direction === 'sent' ? 'Sent to' : 'Received from'} {item.deviceName}</Text>
            <Text>{new Date(item.timestamp).toLocaleString()}</Text>
          </View>
        )}
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
  transferItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TransferHistoryScreen;
