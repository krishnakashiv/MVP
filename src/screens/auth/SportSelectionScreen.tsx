import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { AVAILABLE_SPORTS, Sport } from '../../constants/sports';
import { setUser, setToken } from '../../store/slices/authSlice';
import { RootStackScreenProps } from '../../navigation/types';

type SportSelectionScreenProps = RootStackScreenProps<'SportSelection'>;

const SportSelectionScreen: React.FC<SportSelectionScreenProps> = ({
  navigation,
  route,
}) => {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const dispatch = useDispatch();

  const toggleSport = (sportId: string) => {
    setSelectedSports((prev) =>
      prev.includes(sportId)
        ? prev.filter((id) => id !== sportId)
        : [...prev, sportId]
    );
  };

  const handleContinue = () => {
    if (selectedSports.length === 0) {
      Alert.alert('Error', 'Please select at least one sport');
      return;
    }

    // Create the complete user object
    const userData = {
      ...route.params.userData,
      userId: Math.random().toString(36).substr(2, 9), // Generate a random ID for now
      sports: selectedSports,
      createdAt: new Date(),
    };

    // TODO: Implement actual API call
    // For now, we'll simulate a successful registration
    dispatch(setUser(userData));
    dispatch(setToken('mock-token'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Sports</Text>
      <Text style={styles.subtitle}>
        Choose the sports you want to play and find players for
      </Text>

      <ScrollView style={styles.sportsContainer}>
        {AVAILABLE_SPORTS.map((sport) => (
          <TouchableOpacity
            key={sport.id}
            style={[
              styles.sportItem,
              selectedSports.includes(sport.id) && styles.selectedSport,
            ]}
            onPress={() => toggleSport(sport.id)}
          >
            <MaterialIcons
              name={sport.icon as any}
              size={24}
              color={selectedSports.includes(sport.id) ? '#fff' : '#007AFF'}
            />
            <Text
              style={[
                styles.sportName,
                selectedSports.includes(sport.id) && styles.selectedSportText,
              ]}
            >
              {sport.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.continueButton,
          selectedSports.length === 0 && styles.disabledButton,
        ]}
        onPress={handleContinue}
        disabled={selectedSports.length === 0}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
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
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  sportsContainer: {
    flex: 1,
  },
  sportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedSport: {
    backgroundColor: '#007AFF',
  },
  sportName: {
    fontSize: 16,
    marginLeft: 10,
    color: '#007AFF',
  },
  selectedSportText: {
    color: '#fff',
  },
  continueButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SportSelectionScreen; 