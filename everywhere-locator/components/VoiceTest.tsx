import React from 'react';
import { Button, ButtonText } from '@/components/ui/button';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { useVoiceRecorder } from '@/services/VoiceRecognitionService';

export const VoiceTest: React.FC = () => {
  const { isInitialized, isRecording, isProcessing, startRecording, stopRecording } = useVoiceRecorder();

  const handleTest = async () => {
    if (isRecording) {
      const result = await stopRecording();
      console.log('Voice result:', result);
    } else {
      await startRecording();
    }
  };

  return (
    <Box className="p-6">
      <VStack space="md">
        <Heading size="lg">Voice Recognition Test</Heading>
        <Text>Initialized: {isInitialized ? 'Yes' : 'No'}</Text>
        <Text>Recording: {isRecording ? 'Yes' : 'No'}</Text>
        <Text>Processing: {isProcessing ? 'Yes' : 'No'}</Text>
        
        <Button 
          onPress={handleTest}
          className="bg-blue-500"
          disabled={!isInitialized || isProcessing}
        >
          <ButtonText className="text-white">
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </ButtonText>
        </Button>
      </VStack>
    </Box>
  );
};
