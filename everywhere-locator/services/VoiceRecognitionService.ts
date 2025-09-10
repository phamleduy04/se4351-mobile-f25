import {
  useAudioRecorder,
  useAudioRecorderState,
  AudioModule,
  RecordingPresets,
  setAudioModeAsync,
  RecorderState,
} from 'expo-audio';
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

export interface VoiceRecognitionResult {
  success: boolean;
  text?: string;
  error?: string;
}

export class VoiceRecognitionService {
  private static instance: VoiceRecognitionService;
  private hasPermission: boolean = false;
  
  private constructor() {}

  public static getInstance(): VoiceRecognitionService {
    if (!VoiceRecognitionService.instance) {
      VoiceRecognitionService.instance = new VoiceRecognitionService();
    }
    return VoiceRecognitionService.instance;
  }

  public async initialize(): Promise<boolean> {
    try {
      // Request recording permissions
      const { granted } = await AudioModule.requestRecordingPermissionsAsync();
      
      if (!granted) {
        Alert.alert('Permission Required', 'Microphone access is required for voice commands');
        this.hasPermission = false;
        return false;
      }

      this.hasPermission = true;

      // Set audio mode for recording
      await setAudioModeAsync({
        playsInSilentMode: true,
        allowsRecording: true,
      });

      return true;
    } catch (error) {
      console.error('Failed to initialize voice recognition:', error);
      this.hasPermission = false;
      return false;
    }
  }

  public hasRecordingPermission(): boolean {
    return this.hasPermission;
  }

  // Mock voice recognition since we don't have a real speech-to-text service
  public async processRecording(uri: string): Promise<VoiceRecognitionResult> {
    // In a real implementation, you would send the audio file to a speech-to-text service
    // For now, we'll simulate common object recognition results
    
    const commonObjects = [
      'chair', 'table', 'door', 'window', 'bed', 'couch', 'sofa', 
      'lamp', 'book', 'phone', 'keys', 'wallet', 'remote control',
      'cup', 'bottle', 'bag', 'pillow', 'blanket', 'clock'
    ];

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return a random common object for demonstration
    const randomObject = commonObjects[Math.floor(Math.random() * commonObjects.length)];
    
    return {
      success: true,
      text: randomObject
    };
  }

  // In a real implementation, you would integrate with services like:
  // - Google Speech-to-Text API
  // - Azure Cognitive Services Speech
  // - AWS Transcribe
  // - OpenAI Whisper API
  
  private async callSpeechToTextAPI(audioUri: string): Promise<string> {
    // Placeholder for actual API integration
    // const formData = new FormData();
    // formData.append('audio', {
    //   uri: audioUri,
    //   type: 'audio/m4a',
    //   name: 'recording.m4a',
    // } as any);
    
    // const response = await fetch('https://api.speech-service.com/transcribe', {
    //   method: 'POST',
    //   body: formData,
    //   headers: {
    //     'Authorization': 'Bearer YOUR_API_KEY',
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });
    
    // const result = await response.json();
    // return result.transcript;
    
    return 'mock transcription';
  }
}

// React Hook for using voice recording in components
export function useVoiceRecorder() {
  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const recorderState = useAudioRecorderState(audioRecorder);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const voiceService = VoiceRecognitionService.getInstance();

  useEffect(() => {
    const initialize = async () => {
      const success = await voiceService.initialize();
      setIsInitialized(success);
    };
    
    initialize();
  }, []);

  const startRecording = async (): Promise<boolean> => {
    if (!isInitialized || !voiceService.hasRecordingPermission()) {
      Alert.alert('Error', 'Voice recording is not available. Please check permissions.');
      return false;
    }

    try {
      await audioRecorder.prepareToRecordAsync();
      audioRecorder.record();
      return true;
    } catch (error) {
      console.error('Failed to start recording:', error);
      Alert.alert('Error', 'Failed to start recording. Please try again.');
      return false;
    }
  };

  const stopRecording = async (): Promise<VoiceRecognitionResult> => {
    if (!recorderState.isRecording) {
      return { success: false, error: 'Not currently recording' };
    }

    try {
      setIsProcessing(true);
      await audioRecorder.stop();
      
      // Process the recording
      const result = await voiceService.processRecording(audioRecorder.uri || '');
      return result;
    } catch (error) {
      console.error('Failed to stop recording:', error);
      return { success: false, error: 'Failed to process recording' };
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    isInitialized,
    isRecording: recorderState.isRecording,
    isProcessing,
    startRecording,
    stopRecording,
    recorderState,
  };
}

export const voiceRecognitionService = VoiceRecognitionService.getInstance();
