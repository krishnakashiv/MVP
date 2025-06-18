import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Match } from '../types';
import { ScrollView, Text, View } from 'react-native';
import SettingsScreen from '../screens/main/SettingsScreen';

// Import screens (we'll create these next)
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import SportSelectionScreen from '../screens/auth/SportSelectionScreen';
import HomeScreen from '../screens/main/HomeScreen';
import MatchesScreen from '../screens/main/MatchesScreen';
import NearbyScreen from '../screens/main/NearbyScreen';
import LeaderboardScreen from '../screens/main/LeaderboardScreen';
import MessagesScreen from '../screens/main/MessagesScreen';
import SubmitMatchScreen from '../screens/main/SubmitMatchScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const mockMatches: Match[] = [
  {
    matchId: '1',
    timestamp: new Date('2024-06-01T10:00:00Z'),
    player1: 'user1',
    player2: 'user2',
    winner: 'user1',
    elo1Before: 1200,
    elo2Before: 1250,
    elo1After: 1215,
    elo2After: 1235,
    location: 'Court 1',
  },
  {
    matchId: '2',
    timestamp: new Date('2024-06-10T15:30:00Z'),
    player1: 'user1',
    player2: 'user3',
    winner: 'user3',
    elo1Before: 1215,
    elo2Before: 1300,
    elo1After: 1200,
    elo2After: 1315,
    location: 'Court 2',
  },
];

const mockEloBySport = {
  Tennis: 1200,
  Badminton: 1100,
  Football: 1300,
};

const ProfileScreen = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const matches = user?.matches || mockMatches;
  const eloBySport = user?.eloBySport || mockEloBySport;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Profile</Text>
      <Text style={{ fontSize: 18 }}>Username: {user?.username}</Text>
      <Text style={{ fontSize: 18 }}>Email: {user?.email}</Text>
      <Text style={{ fontSize: 18 }}>Phone: {user?.phoneNumber || '+1234567890'}</Text>
      <Text style={{ fontSize: 18, marginTop: 20, fontWeight: 'bold' }}>ELO Ratings</Text>
      {Object.entries(eloBySport).map(([sport, elo]) => (
        <Text key={sport} style={{ fontSize: 16 }}>{sport}: {elo}</Text>
      ))}
      <Text style={{ fontSize: 18, marginTop: 20, fontWeight: 'bold' }}>Past Matches</Text>
      <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginTop: 10 }}>
        <View style={{ flexDirection: 'row', backgroundColor: '#f5f5f5', padding: 8 }}>
          <Text style={{ flex: 2, fontWeight: 'bold' }}>Date</Text>
          <Text style={{ flex: 2, fontWeight: 'bold' }}>Sport</Text>
          <Text style={{ flex: 2, fontWeight: 'bold' }}>Opponent</Text>
          <Text style={{ flex: 1, fontWeight: 'bold' }}>Result</Text>
        </View>
        {matches.map((match) => (
          <View key={match.matchId} style={{ flexDirection: 'row', padding: 8, borderTopWidth: 1, borderTopColor: '#eee' }}>
            <Text style={{ flex: 2 }}>{match.timestamp.toLocaleDateString()}</Text>
            <Text style={{ flex: 2 }}>{'Tennis'}</Text>
            <Text style={{ flex: 2 }}>{match.player1 === user?.username ? match.player2 : match.player1}</Text>
            <Text style={{ flex: 1 }}>{match.winner === user?.username ? 'Win' : 'Loss'}</Text>
          </View>
        ))}
      </View>
      <SettingsScreen />
    </ScrollView>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          // Auth Stack
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="SportSelection" component={SportSelectionScreen} />
          </>
        ) : (
          // Main App Stack
          <>
            <Stack.Screen name="MainApp" component={MainTabs} />
            <Stack.Screen name="SubmitMatch" component={SubmitMatchScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation; 