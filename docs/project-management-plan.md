# Software Project Management Plan: Everywhere Locator

Version: 1.0

Date: September 2, 2025

## 1. Introduction
### 1.1 Project Overview

Everywhere Locator is a mobile application designed to assist visually impaired individuals with indoor navigation. The project's primary goal is to create a functional application that empowers users to identify and locate common indoor objects using their smartphone's camera. The user will state their desired object via voice command, the application will use the camera and a Large Language Model (LLM) for object recognition, and it will provide audio feedback to guide the user.

### 1.2 Project Deliverables
Upon completion, the project team will deliver the following:

- A cross-platform mobile application for both iOS and Android, built with React Native.

- The complete source code, hosted in a GitHub repository.

- User documentation detailing how to build, configure, and deploy the application.

- A final presentation summarizing the project's goals, process, and outcomes.

### 1.3 Evolution of this Document
This SPMP is a living document. It will be updated throughout the project lifecycle to reflect changes in scope, schedule, or processes. The Project Manager will be responsible for maintaining the document.

### 1.4 References
- React Native Documentation: https://reactnative.dev/docs/getting-started

- Shadcn UI (or similar design system) for UI components and accessibility standards.

### 1.5 Definitions, Acronyms, and Abbreviations
- CV: Computer Vision

- LLM: Large Language Model (e.g., Google Gemini)

- MVP: Minimum Viable Product

- PM: Project Manager

- PO: Product Owner

- QA: Quality Assurance

- SPMP: Software Project Management Plan

- UI/UX: User Interface / User Experience

## 2. Project Organization
### 2.1 Process Model
This project will follow the Agile/Scrum methodology with short, one-week sprints. This model was chosen to facilitate rapid development and allow for iterative feedback, which is crucial for building a successful MVP. The team will hold a weekly progress meeting to review the previous sprint's work and plan for the next one.

### 2.2 Organizational Structure

The 10-person team will be divided into two functional sub-teams to streamline development:

- Core Experience Team (5 members): Focuses on the user interface, voice command processing (voice-to-text), and audio feedback (text-to-voice).

- Vision & Navigation Team (5 members): Focuses on camera integration, LLM API calls, and the core object recognition and guidance logic.

### 2.3 Organizational Boundaries and Interfaces
The Project Manager / Product Owner (PM/PO) will serve as the primary interface between the two teams, ensuring alignment on goals and priorities. However, direct communication between developers on both teams is encouraged to resolve technical dependencies quickly.

### 2.4 Project Responsibilities

| Role | Name (NetID) | Responsibilities |
| ---- | ---- | ---------------- |
| PM/PO| Duy Pham (ldp210003) | Defines project vision, manages backlog, leads meetings, removes impediments. |
| Vision & Nav Lead | Victor Sim (vas230001) | Leads camera and LLM integration, oversees navigation algorithm. |
| Core Experience Lead | Chase Uherek (cxu230001) | Leads UI/UX development, ensures accessibility standards are met. |
| Developer | Nathan Boyle (nmb210005) | Core Experience Team - UI/UX implementation. |
| Developer | Viet-Long Nguyen (vhn200002) | Core Experience Team - Voice processing. |
| Developer | Alberto Escobar (axe220010) | Core Experience Team - Audio feedback system. |
| Developer | Kim Chau (kxc220015) | Vision & Nav Team - Camera API integration. |
| Developer | Shreyaa Arun (sxa220019) | Vision & Nav Team - LLM API integration. |
| Developer | Onkar Sandhu (oss210000) | Vision & Nav Team - Navigation logic. |
| QA / Testing | Kutsal Aksu (koa220001) | Responsible for testing across both teams, manages bug reports.|

## 3. Managerial Process
### 3.1 Management Objectives and Priorities

The single most important priority is delivering a functional **MVP working quickly**. The project's success will be measured by its ability to perform the core loop: accept a voice command, identify a common object, and provide basic guidance within the 4-week timeframe. Features beyond this core functionality are considered out of scope for the initial delivery.

### 3.2 Assumptions, Dependencies, and Constraints
- Assumptions:
	- The user's smartphone has a functional camera.

	- The user's smartphone has a stable internet connection for LLM API calls.


- Dependencies:
	- The project is dependent on a third-party LLM (e.g., Google Gemini) for its object recognition capabilities. API availability and performance are external factors.


- Constraints:
	- The application must be developed using React Native to support both iOS and Android.

	- The project has a strict 4-week deadline, ending on October 2, 2025.

### 3.3 Risk Management

| Risk ID | Risk Description | Probability | Impact | Mitigation Strategy |
|---------|-----------------|-------------|--------|---------------------|
| R-01 | Technical: The LLM's object recognition is inaccurate or too slow for real-time navigation. | Medium | High | Focus the MVP on a limited set of 5-10 common, easily distinguishable objects (e.g., "door", "chair", "table"). Implement clear audio cues for when an object cannot be identified. |
| R-02 | User Experience: Voice commands are not interpreted correctly or the audio feedback is confusing. | Medium | High | Design a simple, structured command syntax (e.g., "Find the <object>"). Conduct early and frequent testing with team members to refine the audio cues. |
| R-03 | Safety: The app provides incorrect guidance, potentially leading a user into an obstacle. | Low | Critical | The app will include a mandatory disclaimer and onboarding message stating it is an assistive aid and not a replacement for a cane or other primary navigation tools. Guidance will be suggestive (e.g., "The door appears to be to your left") rather than prescriptive. |
| R-04 | Project: The 4-week timeline is too aggressive, leading to burnout or an incomplete product. | High | Medium | The PM/PO will strictly enforce the MVP scope. Any non-essential features will be moved to a post-launch backlog. |

### 3.4 Monitoring and Controlling Mechanisms
- Task Tracking: All work will be tracked as tickets in [Linear](https://linear.app/). The board will be reviewed during the weekly progress meetings.

- Change Control: Any requested changes to the scope of an in-progress ticket will be evaluated by the PM/PO. If not critical, the change will be added to the backlog for consideration in a future iteration.

## 4. Technical Process
### 4.1 Methods, Tools, and Techniques

- Platform: React Native

- Version Control: Git, with the central repository hosted on GitHub.

- Object Recognition: Google Gemini API (or a similar LLM with vision capabilities).

- Project Management: Linear.app

### 4.2 Software Documentation
- Code Comments: All functions, components, and complex logic blocks must be documented using JSDoc-style comments to explain their purpose, parameters, and return values.

- Architecture: A README.md file in the project root will provide a high-level overview and setup instructions. A docs/ folder will contain a simple diagram of the application architecture.

### 4.3 Project Support Functions
- Code Repository: GitHub will be used for version control, code reviews (via Pull Requests), and issue tracking.

- Communication: A dedicated Discord group chat will be used for daily team communication.

## 5. Work Elements, Schedule, and Budget

### Work Elements and Schedule
The project is divided into four one-week sprints.


-  Week 1 (Sept 4 - Sept 10): Sprint 1 - Foundation & UI Shell
	- Goal: Establish the project foundation and basic user interface.

	- Tasks: Initialize React Native project, set up navigation, create the main screen UI, implement the voice input button, and capture raw voice data.

-  Week 2 (Sept 11 - Sept 17): Sprint 2 - Vision Integration
	- Goal: Connect the camera feed to the LLM.

	- Tasks: Integrate the device camera view into the app, establish a secure connection to the LLM API, send camera frames for analysis, and receive object identification data.


-  Week 3 (Sept 18 - Sept 24): Sprint 3 - Navigation Logic & Feedback
	- Goal: Translate LLM data into useful user guidance.

	- Tasks: Develop the core logic to determine an object's relative position (e.g., left, right, center). Implement the text-to-voice system to provide clear, concise audio feedback.


-  Week 4 (Sept 25 - Oct 2): Sprint 4 - Testing, Polish & Delivery
	- Goal: Refine the MVP and prepare all deliverables.

	- Tasks: Conduct thorough internal testing, fix critical bugs, write the user and build documentation, and prepare the final project presentation.

### Budget

The project has a minimal budget allocated for essential third-party services.

- LLM API Usage Fees: $5.00