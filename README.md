# MVP Sports Matchmaking App

A competitive matchmaking app for sports and games like Tennis, Pickleball, and FIFA.

## Features

- User authentication (signup/login)
- Sport selection and player matching
- Distance-based player finding
- ELO rating system
- Match history tracking
- Leaderboards
- Real-time messaging (coming in V2)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd MVP
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR code with Expo Go app on your physical device

## Project Structure

```
src/
  ├── navigation/     # Navigation configuration
  ├── screens/        # Screen components
  │   ├── auth/      # Authentication screens
  │   └── main/      # Main app screens
  ├── store/         # Redux store configuration
  │   └── slices/    # Redux slices
  └── types/         # TypeScript type definitions
```

## Development

- The app uses TypeScript for type safety
- Redux for state management
- React Navigation for routing
- Expo for development and building

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 