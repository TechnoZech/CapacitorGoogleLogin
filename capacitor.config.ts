import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.capTestTwo',
  appName: 'capTestTwo',
  webDir: 'build',
  server: {
    androidScheme: 'https',
    url: process.env.REACT_APP_BASE_URL,
  },
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
