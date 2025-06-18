export interface User {
  userId: string;
  email: string;
  username: string;
  fullName: string;
  city: string;
  locality: string;
  sports: string[];
  createdAt: Date;
  phoneNumber?: string;
  eloBySport?: { [sport: string]: number };
  matches?: Match[];
}

export interface Player {
  username: string;
  elo: number;
  gamesPlayed: number;
  wins: number;
  losses: number;
  lastMatchDate: Date;
  city: string;
  locality: string;
}

export interface Match {
  matchId: string;
  timestamp: Date;
  player1: string;
  player2: string;
  winner: string;
  elo1Before: number;
  elo2Before: number;
  elo1After: number;
  elo2After: number;
  location?: string;
}

export interface Message {
  fromUsername: string;
  toUsername: string;
  message: string;
  timestamp: Date;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface RootState {
  auth: AuthState;
  // Add other state slices here
} 