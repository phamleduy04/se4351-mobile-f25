
# Project Information
**Version**: 1.0
**Team URL:** [https://everywhere-locator.vercel.app](https://everywhere-locator.vercel.app)
**Date:** September 16, 2025
**Team Members:**
- Duy Pham (ldp210003)
- Victor Sim (vas230001)
- Chase Uherek (cxu230001)
- Nathan Boyle (nmb210005)
- Viet-Long Nguyen (vhn200002)
- Alberto Escobar (axe220010)
- Kim Chau (kxc220015)
- Shreyaa Arun (sxa220019)
- Onkar Sandhu (oss210000)
- Kutsal Aksu (koa220001)


## Revision History

| Version | Date         | Author               | Changes       |
| ------- | ------------ | -------------------- | ------------- |
| 1.0     | Sep 16, 2025 | Duy Pham (ldp210003) | Initial Draft |

## Process

### Team Members and Roles
- **Project Manager/Product Owner (PM/PO)**: Duy Pham
- **Vision & Nav Lead:** Victor Sim
- **Core Experience Lead:** Chase Uherek
- **Developers (Core Experience):** Nathan Boyle, Viet-Long Nguyen, Alberto Escobar
- **Developers (Vision & Nav):** Kim Chau, Shreyaa Arun, Onkar Sandhu
- **QA/Testing:** Kutsal Aksu (koa220001)

### Meetings
The team conducts a weekly progress meeting to review the task board and plan for the next phase.

### Resources:
- **Platform:** React Native
- **Version Control:** Git / GitHub
- **Object Recognition:** Google Gemini API (or similar LLM)
- **Project Management:** Linear
- **Communication:** Discord


# Introduction
This document provides the Workshop Requirements Specification (WRS) for the Everywhere Locator application. The Everywhere Locator is a mobile application designed to assist visually impaired individuals with indoor navigation by empowering them to identify and locate common indoor objects using their smartphone's camera. This WRS clarifies the scope, requirements, and specifications for the project, which focuses on delivering a functional Minimum Viable Product (MVP) that provides immediate value to the user.

# Issues with Preliminary Definition Given

Upon reviewing the initial project description, our team identified a significant scope-related issue that required discussion and decision-making.

- **2.1.1 issue-x**
	- The preliminary definition describes a comprehensive indoor navigation system ("Theia") for guiding a user from a source location to a destination location, potentially across different buildings. This implies a need for complex features like mapping, real-time user localization (positioning), and pathfinding. The team assessed this scope as being too aggressive for the 4-week timeline, posing a high risk of an incomplete or non-functional final product.
	- **Options**:
		1. Attempt to build the full A-to-B navigation system as described, accepting the high risk of failure.
		2. De-scope the project to a more manageable and achievable core feature set that still provides significant value to the target user base.
	- **Decision and Rationale:** The team has decided on **Option 2**. The project has been re-scoped to focus on a critical sub-problem:
		- **object identification and location** within the user's immediate vicinity. This decision was made to mitigate the risk of project failure due to the aggressive timeline and to align with the Phase 1 priority of producing a clear, well-defined set of requirements for a functional prototype. This approach allows the team to deliver a polished and functional MVP that successfully implements its core features.

# WRS
This section details the clarified World, Requirements, and Specifications for the **Everywhere Locator** application.

## 3.1 W (World)
- **3.1.0 Stakeholders:**
	- **For (Beneficiaries):** Visually impaired individuals who need assistance locating objects in an indoor environment.
	- **Of (Subject):** The application domain is indoor spaces like homes, offices, and classrooms. The subject is the immediate environment scannable by a smartphone camera.
	- **By (Client):** The development team (Team 1) and course instructional staff.
- **3.1.1 Problem:** Visually impaired individuals often face challenges in locating specific objects within a room (e.g., finding an empty chair, a doorway, or a table). While tools like canes assist with obstacle avoidance, they do not help in identifying objects at a distance. The problem is to provide a tool that can "see" the environment and guide a user to a desired object upon request.
- **3.1.2 Goal:** The project's goal is to create a functional mobile application that empowers users to identify and locate common indoor objects using their smartphone camera, voice commands, and audio feedback. The primary objective for this phase is to develop a running prototype (MVP) that successfully demonstrates this core functionality.

## 3.2 R (Requirements)
- **3.2.1 Functional Requirements:**
	- The system shall accept a voice command from the user specifying a desired object to locate.
	- The system shall use the smartphone's camera to visually scan the surrounding environment.
	- The system shall process the camera feed to recognize and identify objects using a Large Language Model (LLM).
	- The system shall provide directional audio feedback to guide the user towards the identified object.
- **3.2.2 Non-functional Requirements:**
	- **Safety:** The system shall be positioned as an assistive aid, not a replacement for primary navigation tools like a cane. Guidance shall be suggestive (e.g., "The chair appears to be to your left") rather than prescriptive.
	- **Usability:** The system shall be primarily operable through voice commands and audio feedback to ensure accessibility for visually impaired users. The UI must adhere to accessibility standards.
	- **Performance:** The object recognition and audio feedback must be provided in near real-time to be useful for navigation. (This is a known risk being mitigated by limiting the set of identifiable objects in the MVP ).
	- **Reliability:** The system requires a stable internet connection for making LLM API calls.

## 3.3 S (Specification)
- **3.3.1 Functional Specification:**
	- The application shall be developed using React Native to support both iOS and Android platforms.
	- The system shall utilize the device's native voice-to-text capabilities to process user commands.
	- The system shall integrate with a third-party LLM with vision capabilities (e.g., Google Gemini) via its API.
	- The system shall use native text-to-voice capabilities to provide audio feedback.
- **3.3.2 Non-functional Specification:**
	- The system shall include a mandatory disclaimer and user onboarding message that clarifies its function as an assistive aid.
	- The MVP's object recognition logic will be focused on a limited set of 5-10 common, easily distinguishable objects to ensure accuracy and performance.
	- All functions, components, and complex logic must be documented with JSDoc-style comments.

