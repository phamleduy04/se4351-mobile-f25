import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { HomeScreen } from './screens/HomeScreen';
import { CameraScreen } from './screens/CameraScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import '@/global.css';

type Screen = 'home' | 'camera' | 'settings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const navigateToCamera = () => setCurrentScreen('camera');
  const navigateToSettings = () => setCurrentScreen('settings');
  const navigateToHome = () => setCurrentScreen('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <HomeScreen 
            onNavigateToCamera={navigateToCamera}
            onNavigateToSettings={navigateToSettings}
          />
        );
      case 'camera':
        return <CameraScreen onBack={navigateToHome} />;
      case 'settings':
        return <SettingsScreen onBack={navigateToHome} />;
      default:
        return (
          <HomeScreen 
            onNavigateToCamera={navigateToCamera}
            onNavigateToSettings={navigateToSettings}
          />
        );
    }
  };

  return (
    <GluestackUIProvider mode="light">
      <SafeAreaView style={{ flex: 1 }}>
        {renderScreen()}
        <StatusBar style="auto" />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
