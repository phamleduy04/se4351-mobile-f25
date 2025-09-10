import React, { useEffect } from 'react';
import { Button, ButtonText } from '@/components/ui/button';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { accessibilityHelper } from '@/utils/AccessibilityHelper';

interface HomeScreenProps {
  onNavigateToCamera: () => void;
  onNavigateToSettings: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ 
  onNavigateToCamera, 
  onNavigateToSettings 
}) => {
  
  useEffect(() => {
    // Welcome message when the app loads
    const welcomeMessage = 'Welcome to Everywhere Locator. Your indoor navigation assistant for finding objects. Tap Start Object Search to begin, or tap Settings to customize your experience.';
    accessibilityHelper.speak(welcomeMessage);
  }, []);

  const handleStartSearch = () => {
    accessibilityHelper.announceScreenChange('Camera', 'Opening camera for object detection');
    onNavigateToCamera();
  };

  const handleSettings = () => {
    accessibilityHelper.announceScreenChange('Settings', 'Opening settings to customize your experience');
    onNavigateToSettings();
  };

  const handleHelp = () => {
    const helpMessage = `Everywhere Locator helps you find objects indoors using your camera and voice commands. 
    Here's how to use it:
    1. Tap Start Object Search to open the camera
    2. Use voice commands to specify what object you're looking for
    3. The app will guide you with audio feedback
    4. Vibration patterns will help indicate when objects are found
    
    For best results, ensure good lighting and slowly move your camera around the room.`;
    
    accessibilityHelper.speak(helpMessage);
  };

  return (
    <Box className="flex-1 bg-white">
      <Center className="flex-1 px-6 py-12">
        <VStack space="xl" className="w-full max-w-sm mx-4">
          <VStack space="md" className="mb-12">
            <Heading size="4xl" className="text-center px-4">
              Everywhere Locator
            </Heading>
            <Text size="lg" className="text-center text-gray-600 px-2 leading-relaxed">
              Your personal indoor navigation assistant for finding objects using AI-powered vision
            </Text>
          </VStack>

          <VStack space="lg" className="w-full">
            <Button 
              onPress={handleStartSearch}
              action="primary"
              variant="solid"
              size="xl"
              className="w-full mx-2 py-6"
              accessibilityLabel="Start Object Search - Opens camera to begin finding objects"
              accessibilityRole="button"
            >
              <VStack space="xs" className="py-2">
                <ButtonText size="lg">🔍 Start Object Search</ButtonText>
              </VStack>
            </Button>

            <Button 
              onPress={handleHelp}
              action="positive"
              variant="solid"
              size="xl"
              className="w-full mx-2 py-6"
              accessibilityLabel="Help and Instructions - Learn how to use the app"
              accessibilityRole="button"
            >
              <VStack space="xs" className="py-2">
                <ButtonText size="lg">💡 Help & Instructions</ButtonText>
              </VStack>
            </Button>

            <Button 
              onPress={handleSettings}
              action="secondary"
              variant="solid"
              size="xl"
              className="w-full mx-2 py-6"
              accessibilityLabel="Settings - Customize app preferences and accessibility options"
              accessibilityRole="button"
            >
              <VStack space="xs" className="py-2">
                <ButtonText size="lg">⚙️ Settings</ButtonText>
              </VStack>
            </Button>
          </VStack>

          <Box className="mt-12 mb-8">
            <Text size="sm" className="text-center text-gray-500 px-4">
              Designed for accessibility and ease of use
            </Text>
          </Box>
        </VStack>
      </Center>
    </Box>
  );
};
