import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  SportSelection: {
    userData: {
      email: string;
      username: string;
      fullName: string;
      city: string;
      locality: string;
    };
  };
  MainApp: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>; 