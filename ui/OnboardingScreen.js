// ui/OnboardingScreen.js
// Onboarding/setup screen for the mobile app

import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const OnboardingScreen = ({ onOnboardingComplete }) => {
  const [step, setStep] = useState(1);
  const [nickname, setNickname] = useState('');

  const handleNextStep = () => {
    if (step === 1 && nickname) {
      setStep(2);
    } else if (step === 2) {
      // TODO: Perform account verification
      setStep(3);
    } else if (step === 3) {
      onOnboardingComplete();
    }
  };

  return (
    <View style={styles.container}>
      {step === 1 && (
        <>
          <Text style={styles.title}>Welcome to Vibe Airdrop!</Text>
          <Text style={styles.text}>Let's get you set up. First, choose a nickname for this device.</Text>
          <TextInput
            style={styles.input}
            placeholder="My iPhone"
            value={nickname}
            onChangeText={setNickname}
          />
          <Button title="Next" onPress={handleNextStep} />
        </>
      )}
      {step === 2 && (
        <>
          <Text style={styles.title}>Verify Your Identity</Text>
          <Text style={styles.text}>To keep your transfers secure, we need to verify your identity.</Text>
          {/* TODO: Add account verification UI (e.g., phone number, email) */}
          <Button title="Verify" onPress={handleNextStep} />
        </>
      )}
      {step === 3 && (
        <>
          <Text style={styles.title}>All Set!</Text>
          <Text style={styles.text}>You're ready to start sharing files. You can now download the Windows receiver app on your computer.</Text>
          <Button title="Finish" onPress={handleNextStep} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
});

export default OnboardingScreen;
