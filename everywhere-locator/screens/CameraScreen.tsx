import React, { useState, useEffect, useRef } from 'react';
import { Vibration } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as Speech from 'expo-speech';
import { Button, ButtonText } from '@/components/ui/button';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';
import { objectDetectionService, DetectionResult } from '../services/ObjectDetectionService';
import { useVoiceRecorder, VoiceRecognitionResult } from '../services/VoiceRecognitionService';

interface CameraScreenProps {
  onBack: () => void;
}

export const CameraScreen: React.FC<CameraScreenProps> = ({ onBack }) => {
  const [permission, requestPermission] = useCameraPermissions();
  const [targetObject, setTargetObject] = useState<string>('');
  const [isDetecting, setIsDetecting] = useState(false);
  const cameraRef = useRef<CameraView | null>(null);
  
  // Use the new voice recorder hook
  const { isInitialized, isRecording, isProcessing, startRecording, stopRecording } = useVoiceRecorder();

  useEffect(() => {
    // Announce screen when loaded
    Speech.speak('Camera screen loaded. Tap the microphone button to record your target object, then tap start detection to begin searching.', {
      language: 'en'
    });
  }, []);

  const handleVoiceRecording = async () => {
    if (isRecording) {
      // Stop recording and process
      Speech.speak('Processing your recording...', { language: 'en' });
      const result: VoiceRecognitionResult = await stopRecording();
      
      if (result.success && result.text) {
        setTargetObject(result.text);
        Speech.speak(`Looking for ${result.text}`, { language: 'en' });
        Vibration.vibrate(100); // Haptic feedback
      } else {
        Speech.speak('Could not understand your recording. Please try again.', { language: 'en' });
        Vibration.vibrate([100, 100, 100]); // Error pattern
      }
    } else {
      // Start recording
      Speech.speak('Recording... Please say the object you want to find clearly.', { language: 'en' });
      const success = await startRecording();
      if (!success) {
        Speech.speak('Failed to start recording. Please check your microphone permissions.', { language: 'en' });
      }
    }
  };

  const startDetection = async () => {
    if (!targetObject) {
      Speech.speak('Please specify an object to search for first.', { language: 'en' });
      return;
    }

    setIsDetecting(true);
    Speech.speak(`Starting detection for ${targetObject}`, { language: 'en' });
    
    try {
      // Use the object detection service
      const result: DetectionResult = await objectDetectionService.detectObject(targetObject);
      
      // Generate and speak audio guidance
      const guidance = objectDetectionService.generateAudioGuidance(result);
      Speech.speak(guidance, { language: 'en' });
      
      // Generate haptic feedback
      const hapticPattern = objectDetectionService.generateHapticPattern(result);
      Vibration.vibrate(hapticPattern);
      
    } catch (error) {
      console.error('Object detection failed:', error);
      Speech.speak('Detection failed. Please try again.', { language: 'en' });
      Vibration.vibrate(300);
    } finally {
      setIsDetecting(false);
    }
  };

  const stopDetection = () => {
    setIsDetecting(false);
    Speech.speak('Detection stopped.', { language: 'en' });
  };

  if (!permission) {
    return (
      <Box className="flex-1 bg-black">
        <Center className="flex-1 px-8 py-12">
          <Text className="text-white text-lg text-center">Loading permissions...</Text>
        </Center>
      </Box>
    );
  }

  if (!permission.granted) {
    return (
      <Box className="flex-1 bg-black">
        <Center className="flex-1 px-8 py-12">
          <VStack space="lg" className="items-center max-w-sm">
            <Text className="text-white text-lg text-center mb-6 px-4">
              Camera access is required for object detection. Please enable camera permissions.
            </Text>
            <Button onPress={requestPermission} className="bg-blue-500 mb-4 w-full">
              <ButtonText>Grant Camera Permission</ButtonText>
            </Button>
            <Button onPress={onBack} className="bg-gray-500 w-full">
              <ButtonText>Go Back</ButtonText>
            </Button>
          </VStack>
        </Center>
      </Box>
    );
  }

  if (!isInitialized) {
    return (
      <Box className="flex-1 bg-black">
        <Center className="flex-1 px-8 py-12">
          <VStack space="lg" className="items-center max-w-sm">
            <Text className="text-white text-lg text-center mb-6 px-4">
              Initializing voice recognition. Please grant microphone permissions when prompted.
            </Text>
            <Button onPress={onBack} className="bg-gray-500 w-full">
              <ButtonText className="text-white">Go Back</ButtonText>
            </Button>
          </VStack>
        </Center>
      </Box>
    );
  }

  return (
    <Box className="flex-1 bg-black">
      <CameraView 
        ref={cameraRef}
        style={{ flex: 1 }} 
        facing="back"
      >
        <VStack className="flex-1 justify-between p-8">
          {/* Top Status Bar */}
          <Box className="bg-black/50 p-6 rounded-lg mx-2">
            <Text className="text-white text-lg font-bold text-center">
              Everywhere Locator
            </Text>
            {targetObject && (
              <Text className="text-white text-sm text-center mt-2">
                Searching for: {targetObject}
              </Text>
            )}
            {isRecording && (
              <Text className="text-red-400 text-sm text-center mt-2">
                🎤 Recording...
              </Text>
            )}
            {isProcessing && (
              <Text className="text-blue-400 text-sm text-center mt-2">
                🔄 Processing voice...
              </Text>
            )}
            {isDetecting && (
              <Text className="text-green-400 text-sm text-center mt-2">
                🔍 Detecting...
              </Text>
            )}
          </Box>

          {/* Bottom Control Panel */}
          <Box className="bg-black/70 p-6 rounded-lg mx-2">
            <HStack className="justify-between items-center mb-4">
              <Button 
                onPress={onBack}
                className="bg-gray-600 px-6 py-3 rounded-full"
              >
                <ButtonText className="text-white font-bold">Back</ButtonText>
              </Button>
              
              <Button 
                onPress={handleVoiceRecording}
                className={`px-6 py-3 rounded-full ${
                  isRecording ? 'bg-red-500' : isProcessing ? 'bg-yellow-500' : 'bg-blue-500'
                }`}
                disabled={isProcessing}
              >
                <ButtonText className="text-white font-bold">
                  {isRecording ? '🎤 Stop' : isProcessing ? '⏳ Wait' : '🎤 Record'}
                </ButtonText>
              </Button>
            </HStack>

            <HStack className="justify-between items-center">
              <Button 
                onPress={isDetecting ? stopDetection : startDetection}
                className={`flex-1 mr-2 px-6 py-4 rounded-full ${
                  isDetecting ? 'bg-red-600' : 'bg-green-600'
                }`}
                disabled={!targetObject}
              >
                <ButtonText className="text-white font-bold text-lg text-center">
                  {isDetecting ? 'Stop Detection' : 'Start Detection'}
                </ButtonText>
              </Button>
            </HStack>

            {targetObject && (
              <Text className="text-center text-white text-sm mt-3">
                Ready to find: {targetObject}
              </Text>
            )}
          </Box>
        </VStack>
      </CameraView>
    </Box>
  );
};
