import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AppSettings {
  speechRate: number;
  speechPitch: number;
  vibrationEnabled: boolean;
  voiceFeedback: boolean;
  cameraFlash: boolean;
  language: string;
}

export const defaultSettings: AppSettings = {
  speechRate: 0.8,
  speechPitch: 1.0,
  vibrationEnabled: true,
  voiceFeedback: true,
  cameraFlash: true,
  language: 'en'
};

export class SettingsService {
  private static instance: SettingsService;
  private settings: AppSettings = defaultSettings;
  private readonly STORAGE_KEY = 'everywhereLocatorSettings';

  private constructor() {}

  public static getInstance(): SettingsService {
    if (!SettingsService.instance) {
      SettingsService.instance = new SettingsService();
    }
    return SettingsService.instance;
  }

  public async loadSettings(): Promise<AppSettings> {
    try {
      const savedSettings = await AsyncStorage.getItem(this.STORAGE_KEY);
      if (savedSettings) {
        this.settings = { ...defaultSettings, ...JSON.parse(savedSettings) };
      }
    } catch (error) {
      console.error('Failed to load settings:', error);
      this.settings = defaultSettings;
    }
    return this.settings;
  }

  public async saveSettings(newSettings: Partial<AppSettings>): Promise<AppSettings> {
    try {
      this.settings = { ...this.settings, ...newSettings };
      await AsyncStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.settings));
    } catch (error) {
      console.error('Failed to save settings:', error);
      throw error;
    }
    return this.settings;
  }

  public async resetSettings(): Promise<AppSettings> {
    this.settings = defaultSettings;
    try {
      await AsyncStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.settings));
    } catch (error) {
      console.error('Failed to reset settings:', error);
      throw error;
    }
    return this.settings;
  }

  public getSettings(): AppSettings {
    return this.settings;
  }

  public getSpeechOptions() {
    return {
      language: this.settings.language,
      rate: this.settings.speechRate,
      pitch: this.settings.speechPitch
    };
  }

  public shouldVibrate(): boolean {
    return this.settings.vibrationEnabled;
  }

  public shouldProvideSpeech(): boolean {
    return this.settings.voiceFeedback;
  }

  public shouldUseCameraFlash(): boolean {
    return this.settings.cameraFlash;
  }
}

export const settingsService = SettingsService.getInstance();


