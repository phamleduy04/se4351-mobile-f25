# Everywhere Locator

A mobile application designed to assist visually impaired individuals with indoor navigation and object location using AI-powered camera technology, voice commands, and audio feedback.

## Features

### Core Functionality
- **Object Detection**: Use your smartphone camera to identify and locate indoor objects
- **Voice Commands**: State your desired object via voice command for hands-free operation  
- **Audio Guidance**: Receive detailed audio feedback and directional guidance
- **Haptic Feedback**: Get tactile cues through vibration patterns when objects are detected
- **LLM Integration**: Leverage Large Language Models for intelligent object recognition

### Accessibility Features
- **Customizable Speech**: Adjust speech rate, pitch, and language preferences
- **Vibration Control**: Enable/disable haptic feedback based on preference
- **Screen Reader Support**: Full compatibility with accessibility services
- **Large Touch Targets**: Optimized button sizes for easy interaction
- **Audio Announcements**: Screen changes and interactions are announced audibly

### Technical Features
- Built with **React Native** and **Expo** for cross-platform compatibility
- **GlueStack UI** components for consistent, accessible design
- **expo-camera** integration for real-time camera functionality
- **expo-speech** for high-quality text-to-speech output
- **@react-native-voice/voice** for speech recognition
- **AsyncStorage** for persistent user preferences

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm package manager
- Expo CLI
- iOS Simulator or Android Emulator (or physical device)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd everywhere-locator
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm start
```

4. Follow the Expo CLI instructions to run on your device or simulator

### Required Permissions

The app requires the following permissions:
- **Camera**: For object detection and navigation
- **Microphone**: For voice command recognition
- **Audio**: For text-to-speech output

## Usage

### First Launch
1. Grant camera and microphone permissions when prompted
2. Listen to the welcome message explaining basic usage
3. Tap "Start Object Search" to begin using the camera feature

### Finding Objects
1. Open the camera screen by tapping "Start Object Search"
2. Tap the microphone button and speak the name of the object you want to find
3. Tap "Start Detection" to begin scanning
4. Follow the audio guidance and feel for haptic feedback patterns
5. Different vibration patterns indicate object location (left, right, center)

### Customizing Settings
1. Tap "Settings" from the home screen
2. Adjust speech rate and pitch using the slider controls
3. Test speech settings with the "Test" button
4. Enable/disable vibration and voice feedback as needed
5. Use "Reset to Defaults" to restore original settings

### Getting Help
- Tap "Help & Instructions" for detailed usage guidance
- All interactions provide audio feedback for guidance
- Voice commands are processed locally for privacy

## Architecture

### Components Structure
```
screens/
├── HomeScreen.tsx          # Main navigation and welcome
├── CameraScreen.tsx        # Object detection and camera interface  
└── SettingsScreen.tsx      # User preferences and accessibility options

services/
├── ObjectDetectionService.ts  # AI/ML object recognition logic
└── SettingsService.ts         # User preference management

utils/
└── AccessibilityHelper.ts     # Centralized accessibility utilities

components/ui/
└── button/                    # GlueStack UI components
```

### Key Services

- **ObjectDetectionService**: Handles camera input, AI processing, and result interpretation
- **SettingsService**: Manages user preferences with persistent storage
- **AccessibilityHelper**: Provides consistent audio and haptic feedback patterns

## Accessibility Considerations

This app is designed with accessibility as a primary concern:

- **Audio-First Design**: All interactions provide audio feedback
- **Haptic Patterns**: Different vibration patterns convey spatial information
- **Large Touch Targets**: Buttons are sized for easy activation
- **Screen Reader Compatible**: Full support for iOS VoiceOver and Android TalkBack
- **Customizable Experience**: Users can adjust all audio and haptic settings
- **Clear Navigation**: Simple three-screen structure with audio announcements

## Future Enhancements

- Integration with production LLM APIs (GPT-4 Vision, Google Cloud Vision)
- Support for additional languages
- Outdoor navigation capabilities
- Object history and favorites
- Voice shortcuts for common objects
- Integration with smart home devices
- Collaborative object database

## Privacy & Security

- Voice processing occurs locally on device
- No audio recordings are stored or transmitted
- Camera images are processed locally (in production would need secure API)
- User preferences stored locally only

## Contributing

This application was built as part of a mobile development course focusing on accessibility and inclusive design.

## License

Educational project - please refer to course guidelines for usage terms.

## Support

For issues or accessibility concerns, please contact the development team or refer to the built-in help system within the app.


