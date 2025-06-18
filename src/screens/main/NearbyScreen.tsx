import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NearbyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearby Players</Text>
      <Text style={styles.subtitle}>Coming soon...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default NearbyScreen; 