import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const sportsList = ['Tennis', 'Badminton', 'Football'];

const SubmitMatchScreen = () => {
  const [sport, setSport] = useState(sportsList[0]);
  const [opponent, setOpponent] = useState('');
  const [score, setScore] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigation.goBack();
    }, 1200);
  };

  return (
    <View style={styles.container}>
      {showSuccess && (
        <View style={styles.successBlock}>
          <Text style={styles.successText}>Match submitted!</Text>
        </View>
      )}
      <Text style={styles.title}>Submit Match Result</Text>
      <Text style={styles.label}>Sport</Text>
      <View style={styles.pickerContainer}>
        {sportsList.map((s) => (
          <Text
            key={s}
            style={[styles.pickerItem, sport === s && styles.selectedPickerItem]}
            onPress={() => setSport(s)}
          >
            {s}
          </Text>
        ))}
      </View>
      <Text style={styles.label}>Opponent Name</Text>
      <TextInput
        style={styles.input}
        value={opponent}
        onChangeText={setOpponent}
        placeholder="Enter opponent's name"
      />
      <Text style={styles.label}>Score (optional)</Text>
      <TextInput
        style={styles.input}
        value={score}
        onChangeText={setScore}
        placeholder="e.g. 6-3, 6-4"
      />
      <Button title="Submit" onPress={handleSubmit} />
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
  label: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  pickerItem: {
    fontSize: 16,
    padding: 8,
    marginRight: 10,
    color: '#007AFF',
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 5,
  },
  selectedPickerItem: {
    backgroundColor: '#007AFF',
    color: '#fff',
  },
  successBlock: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    backgroundColor: '#4BB543',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    zIndex: 10,
  },
  successText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SubmitMatchScreen; 