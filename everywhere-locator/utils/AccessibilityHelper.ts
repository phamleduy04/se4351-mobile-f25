import * as Speech from 'expo-speech';
import { Vibration } from 'react-native';
import { settingsService } from '../services/SettingsService';

export class AccessibilityHelper {
  private static instance: AccessibilityHelper;

  private constructor() {}

  public static getInstance(): AccessibilityHelper {
    if (!AccessibilityHelper.instance) {
      AccessibilityHelper.instance = new AccessibilityHelper();
    }
    return AccessibilityHelper.instance;
  }

  /**
   * Speak text with user's preferred settings
   */
  public async speak(text: string, options?: any): Promise<void> {
    if (!settingsService.shouldProvideSpeech()) {
      return;
    }

    const speechOptions = {
      ...settingsService.getSpeechOptions(),
      ...options
    };

    return Speech.speak(text, speechOptions);
  }

  /**
   * Provide vibration feedback if enabled
   */
  public vibrate(pattern?: number | number[]): void {
    if (!settingsService.shouldVibrate()) {
      return;
    }

    if (Array.isArray(pattern)) {
      Vibration.vibrate(pattern);
    } else {
      Vibration.vibrate(pattern || 100);
    }
  }

  /**
   * Provide combined audio and haptic feedback
   */
  public async provideFeedback(text: string, vibrationPattern?: number | number[]): Promise<void> {
    const promises = [];
    
    if (settingsService.shouldProvideSpeech()) {
      promises.push(this.speak(text));
    }

    if (settingsService.shouldVibrate() && vibrationPattern) {
      this.vibrate(vibrationPattern);
    }

    return Promise.all(promises).then(() => {});
  }

  /**
   * Stop all speech
   */
  public stopSpeech(): void {
    Speech.stop();
  }

  /**
   * Check if speech is currently playing
   */
  public async isSpeaking(): Promise<boolean> {
    return Speech.isSpeakingAsync();
  }

  /**
   * Announce screen transitions for better navigation
   */
  public announceScreenChange(screenName: string, description?: string): void {
    const announcement = description 
      ? `${screenName} screen. ${description}`
      : `${screenName} screen loaded.`;
    
    this.speak(announcement);
  }

  /**
   * Announce button focus for screen reader compatibility
   */
  public announceButtonFocus(buttonName: string, description?: string): void {
    const announcement = description 
      ? `${buttonName} button. ${description}`
      : `${buttonName} button.`;
    
    this.speak(announcement);
  }

  /**
   * Provide accessibility hints for complex interactions
   */
  public provideUsageHint(hint: string): void {
    this.speak(`Hint: ${hint}`);
  }

  /**
   * Announce progress for long-running operations
   */
  public announceProgress(operation: string, progress?: string): void {
    const announcement = progress 
      ? `${operation}. ${progress}`
      : operation;
    
    this.speak(announcement);
  }

  /**
   * Announce errors with helpful context
   */
  public announceError(error: string, context?: string): void {
    const announcement = context 
      ? `Error: ${error}. ${context}`
      : `Error: ${error}`;
    
    this.speak(announcement);
    this.vibrate([200, 100, 200]); // Error pattern
  }

  /**
   * Announce successful operations
   */
  public announceSuccess(message: string): void {
    this.speak(message);
    this.vibrate([100, 50, 100]); // Success pattern
  }
}

export const accessibilityHelper = AccessibilityHelper.getInstance();


