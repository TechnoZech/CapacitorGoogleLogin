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


// 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

// 426738143380-n76sjua1ilsg3qsdd74c3kio79treh40.apps.googleusercontent.com
// 426738143380-fqf68i8mmmkqdc5u9ikdt41brtqvkbg0.apps.googleusercontent.com
export default config;
