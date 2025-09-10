import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Speech from 'expo-speech';
import { Button, ButtonText } from '@/components/ui/button';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { Switch } from '@/components/ui/switch';
import { 
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogBody,
} from '@/components/ui/alert-dialog';

interface SettingsScreenProps {
  onBack: () => void;
}

interface SettingsState {
  speechRate: number;
  speechPitch: number;
  vibrationEnabled: boolean;
  voiceFeedback: boolean;
  cameraFlash: boolean;
  language: string;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ onBack }) => {
  const [settings, setSettings] = useState<SettingsState>({
    speechRate: 0.8,
    speechPitch: 1.0,
    vibrationEnabled: true,
    voiceFeedback: true,
    cameraFlash: true,
    language: 'en'
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSettings();
    Speech.speak('Settings screen loaded. Use the switches to customize your experience.', { 
      language: 'en' 
    });
  }, []);

  const loadSettings = async () => {
    try {
      const savedSettings = await AsyncStorage.getItem('everywhereLocatorSettings');
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings));
      }
    } catch (error) {
      console.error('Failed to load settings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveSettings = async (newSettings: SettingsState) => {
    try {
      await AsyncStorage.setItem('everywhereLocatorSettings', JSON.stringify(newSettings));
      setSettings(newSettings);
    } catch (error) {
      console.error('Failed to save settings:', error);
      // Could replace with toast or inline error message
      console.error('Failed to save settings');
    }
  };

  const updateSetting = (key: keyof SettingsState, value: any) => {
    const newSettings = { ...settings, [key]: value };
    saveSettings(newSettings);
    
    // Provide audio feedback for the change
    const settingNames: Record<string, string> = {
      vibrationEnabled: 'Vibration',
      voiceFeedback: 'Voice feedback',
      cameraFlash: 'Camera flash'
    };
    
    if (settingNames[key]) {
      Speech.speak(`${settingNames[key]} ${value ? 'enabled' : 'disabled'}`, { 
        language: 'en' 
      });
    }
  };

  const testSpeech = () => {
    Speech.speak('This is how speech sounds with your current settings', {
      language: settings.language,
      rate: settings.speechRate,
      pitch: settings.speechPitch
    });
  };

  const [showResetDialog, setShowResetDialog] = useState(false);

  const handleResetConfirm = () => {
    const defaultSettings: SettingsState = {
      speechRate: 0.8,
      speechPitch: 1.0,
      vibrationEnabled: true,
      voiceFeedback: true,
      cameraFlash: true,
      language: 'en'
    };
    saveSettings(defaultSettings);
    Speech.speak('Settings have been reset to defaults', { language: 'en' });
    setShowResetDialog(false);
  };

  const adjustSpeechRate = (increase: boolean) => {
    const newRate = increase 
      ? Math.min(2.0, settings.speechRate + 0.1)
      : Math.max(0.1, settings.speechRate - 0.1);
    updateSetting('speechRate', Math.round(newRate * 10) / 10);
  };

  const adjustSpeechPitch = (increase: boolean) => {
    const newPitch = increase 
      ? Math.min(2.0, settings.speechPitch + 0.1)
      : Math.max(0.1, settings.speechPitch - 0.1);
    updateSetting('speechPitch', Math.round(newPitch * 10) / 10);
  };

  if (isLoading) {
    return (
      <Box className="flex-1 bg-white">
        <Center className="flex-1 px-8 py-12">
          <Text className="text-lg text-center">Loading settings...</Text>
        </Center>
      </Box>
    );
  }

  return (
    <Box className="flex-1 bg-white">
      {/* Header */}
      <Box className="bg-blue-600 pt-12 pb-6 px-6">
        <HStack className="items-center justify-between">
          <Button onPress={onBack} className="bg-blue-500 px-4 py-2 rounded-lg">
            <ButtonText className="text-white font-bold">← Back</ButtonText>
          </Button>
          <Heading size="2xl" className="text-white">Settings</Heading>
          <Box style={{ width: 60 }} />
        </HStack>
      </Box>

      <Box className="flex-1 px-8 py-8">
        {/* Audio Settings */}
        <VStack space="lg" className="mb-8">
          <Heading size="xl" className="text-gray-800">Audio Settings</Heading>
          
          <Box className="bg-gray-50 p-4 rounded-lg">
            <HStack className="justify-between items-center mb-2">
              <Text className="text-lg font-medium">Voice Feedback</Text>
              <Switch
                value={settings.voiceFeedback}
                onValueChange={(value) => updateSetting('voiceFeedback', value)}
                accessibilityLabel="Toggle voice feedback on or off"
              />
            </HStack>
            <Text className="text-gray-600 text-sm">
              Enable or disable audio instructions and feedback
            </Text>
          </Box>

          <Box className="bg-gray-50 p-4 rounded-lg">
            <Text className="text-lg font-medium mb-3">Speech Rate: {settings.speechRate}</Text>
            <HStack className="justify-between">
              <Button 
                onPress={() => adjustSpeechRate(false)}
                className="bg-red-500 px-4 py-2 rounded-lg flex-1 mr-2"
              >
                <ButtonText className="text-white text-center">Slower</ButtonText>
              </Button>
              <Button 
                onPress={testSpeech}
                className="bg-blue-500 px-4 py-2 rounded-lg flex-1 mx-1"
              >
                <ButtonText className="text-white text-center">Test</ButtonText>
              </Button>
              <Button 
                onPress={() => adjustSpeechRate(true)}
                className="bg-green-500 px-4 py-2 rounded-lg flex-1 ml-2"
              >
                <ButtonText className="text-white text-center">Faster</ButtonText>
              </Button>
            </HStack>
          </Box>

          <Box className="bg-gray-50 p-4 rounded-lg">
            <Text className="text-lg font-medium mb-3">Speech Pitch: {settings.speechPitch}</Text>
            <HStack className="justify-between">
              <Button 
                onPress={() => adjustSpeechPitch(false)}
                className="bg-red-500 px-4 py-2 rounded-lg flex-1 mr-2"
              >
                <ButtonText className="text-white text-center">Lower</ButtonText>
              </Button>
              <Button 
                onPress={testSpeech}
                className="bg-blue-500 px-4 py-2 rounded-lg flex-1 mx-1"
              >
                <ButtonText className="text-white text-center">Test</ButtonText>
              </Button>
              <Button 
                onPress={() => adjustSpeechPitch(true)}
                className="bg-green-500 px-4 py-2 rounded-lg flex-1 ml-2"
              >
                <ButtonText className="text-white text-center">Higher</ButtonText>
              </Button>
            </HStack>
          </Box>
        </VStack>

        {/* Interaction Settings */}
        <VStack space="lg" className="mb-8">
          <Heading size="xl" className="text-gray-800">Interaction</Heading>
          
          <Box className="bg-gray-50 p-4 rounded-lg">
            <HStack className="justify-between items-center mb-2">
              <Text className="text-lg font-medium">Vibration</Text>
              <Switch
                value={settings.vibrationEnabled}
                onValueChange={(value) => updateSetting('vibrationEnabled', value)}
                accessibilityLabel="Toggle haptic feedback vibration"
              />
            </HStack>
            <Text className="text-gray-600 text-sm">
              Enable haptic feedback when objects are detected
            </Text>
          </Box>

          <Box className="bg-gray-50 p-4 rounded-lg">
            <HStack className="justify-between items-center mb-2">
              <Text className="text-lg font-medium">Camera Flash</Text>
              <Switch
                value={settings.cameraFlash}
                onValueChange={(value) => updateSetting('cameraFlash', value)}
                accessibilityLabel="Toggle camera flash for better lighting"
              />
            </HStack>
            <Text className="text-gray-600 text-sm">
              Use camera flash automatically for better object detection
            </Text>
          </Box>
        </VStack>

        {/* Reset Button */}
        <Button 
          onPress={() => setShowResetDialog(true)}
          className="bg-red-600 py-4 rounded-lg"
        >
          <ButtonText className="text-white text-lg font-bold text-center">
            Reset to Defaults
          </ButtonText>
        </Button>
      </Box>

      <AlertDialog
        isOpen={showResetDialog}
        onClose={() => setShowResetDialog(false)}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading size="lg">Reset Settings</Heading>
            <AlertDialogCloseButton />
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text>This will restore all settings to their default values. Continue?</Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <HStack space="md">
              <Button 
                variant="outline" 
                onPress={() => setShowResetDialog(false)}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button 
                onPress={handleResetConfirm}
                className="bg-red-600"
              >
                <ButtonText className="text-white">Reset</ButtonText>
              </Button>
            </HStack>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
};
