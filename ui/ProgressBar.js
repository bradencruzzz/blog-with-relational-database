// ui/ProgressBar.js
// AirDrop-style transfer progress bar for mobile app

import React from 'react';
import { View, Text } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View>
      <Text>{progress}%</Text>
      {/* TODO: Implement a visual progress bar */}
    </View>
  );
};

export default ProgressBar;
