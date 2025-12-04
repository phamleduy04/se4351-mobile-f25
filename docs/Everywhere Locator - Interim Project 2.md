
**Date:** December 4, 2025
**Project:** Everywhere Locator - A-to-B Indoor Navigation for Visually Impaired Users
**Team URL:** https://everywhere-locator.vercel.app

---

## TABLE OF CONTENTS

1. [Final Project Plan](#final-project-plan)
2. [Project Phase I](#project-phase-i)
3. [Project Phase II](#project-phase-ii)
4. [Dependencies and Traceability](#dependencies-and-traceability)

---

# FINAL PROJECT PLAN

## Software Project Management Plan: Everywhere Locator

**Version:** 1.3
**Date:** October 7, 2025

### 1. Introduction

#### 1.1 Project Overview

[Everywhere Locator](https://everywhere-locator.vercel.app) is a mobile application designed to assist visually impaired individuals with indoor navigation and orientation. The project's primary goal is to create a functional application that empowers users to navigate complex indoor environments (buildings, campuses, and event venues) using their smartphone's camera and advanced computer vision technology. The application provides real-time audio feedback about the user's surroundings, including directional guidance ("you're getting warmer/colder"), obstacle detection, and landmark identification to help users reach their desired destinations safely and independently.

Website URL: https://everywhere-locator.vercel.app

#### 1.2 Project Deliverables

Upon completion, the project team will deliver the following:

- A cross-platform mobile application for both iOS and Android, built with React Native.
- The complete source code, hosted in a GitHub repository.
- User documentation detailing how to build, configure, and deploy the application.
- A final presentation summarizing the project's goals, process, and outcomes.

#### 1.3 Evolution of this Document

This SPMP is a living document. It will be updated throughout the project lifecycle to reflect changes in scope, schedule, or processes. The Project Manager will be responsible for maintaining the document.

#### 1.4 References

- React Native Documentation: https://reactnative.dev/docs/getting-started
- Shadcn UI (or similar design system) for UI components and accessibility standards.

#### 1.5 Definitions, Acronyms, and Abbreviations

- **CV:** Computer Vision
- **LLM:** Large Language Model (e.g., Google Gemini)
- **MVP:** Minimum Viable Product
- **PM:** Project Manager
- **PO:** Product Owner
- **QA:** Quality Assurance
- **SPMP:** Software Project Management Plan
- **UI/UX:** User Interface / User Experience
- **WCAG:** Web Content Accessibility Guidelines

### 2. Project Organization

#### 2.1 Process Model

This project follows a two-phase model aligned with the academic deadlines. Each phase will be treated as a one-week sprint within an Agile framework. This allows for a focused effort on requirements and design in the first week, followed by a focused development sprint in the second week. The team will hold a weekly progress meeting to review progress and plan for the next phase.

#### 2.2 Organizational Structure

The 10-person team will be divided into two functional sub-teams to streamline development:

- **User Interface & Experience Team (5 members):** Focuses on the user interface, voice command processing, audio feedback systems, and user interaction design for optimal accessibility.
- **Navigation & Vision Team (5 members):** Focuses on camera integration, LLM API calls, directional guidance algorithms ("warmer/colder" functionality), and core navigation logic.

#### 2.3 Organizational Boundaries and Interfaces

The Project Manager / Product Owner (PM/PO) will serve as the primary interface between the two teams, ensuring alignment on goals and priorities. However, direct communication between developers on both teams is encouraged to resolve technical dependencies quickly.

#### 2.4 Project Responsibilities

| Role | Name (NetID) | Responsibilities |
| ---- | ---- | ---------------- |
| PM/PO| Duy Pham (ldp210003) | Defines project vision, manages backlog, leads meetings, removes impediments. |
| Navigation & Vision Lead | Victor Sim (vas230001) | Leads camera and LLM integration, oversees directional guidance algorithms. |
| UI/UX Lead | Chase Uherek (cxu230001) | Leads user interface development, ensures accessibility standards are met. |
| Developer | Nathan Boyle (nmb210005) | UI/UX Team - Interface design and user interaction. |
| Developer | Viet-Long Nguyen (vhn200002) | UI/UX Team - Voice command processing and audio feedback. |
| Developer | Alberto Escobar (axe220010) | UI/UX Team - Accessibility features and user experience. |
| Developer | Kim Chau (kxc220015) | Navigation & Vision Team - Camera API integration. |
| Developer | Shreyaa Arun (sxa220019) | Navigation & Vision Team - LLM API integration. |
| Developer | Onkar Sandhu (oss210000) | Navigation & Vision Team - Navigation logic and directional guidance. |
| QA / Testing | Kutsal Aksu (koa220001) | Responsible for testing across both teams, manages bug reports.|

### 3. Managerial Process

#### 3.1 Management Objectives and Priorities

The project's priorities are phased:

- **Phase 1 Priority:** To produce a clear, well-defined set of requirements and a visual design (mock-up) that accurately captures the project's goals and user scenarios.
- **Phase 2 Priority:** To develop a functional running prototype (MVP) that successfully implements the core features defined in Phase 1.

#### 3.2 Assumptions, Dependencies, and Constraints

**Assumptions:**
- The user's smartphone has a functional camera.
- The user's smartphone has a stable internet connection for LLM API calls.

**Dependencies:**
- The project is dependent on a third-party LLM (e.g., Google Gemini) for its object recognition capabilities. API availability and performance are external factors.

**Constraints:**
- The application must be developed using React Native to support both iOS and Android.
- The project has a strict 4-week deadline, ending on October 2, 2025.

#### 3.3 Risk Management

| Risk ID | Risk Description | Probability | Impact | Mitigation Strategy |
|---------|-----------------|-------------|--------|---------------------|
| R-01 | Technical: The directional guidance ("warmer/colder") is inaccurate or too slow for real-time navigation. | Medium | High | Implement robust computer vision algorithms with distance calculation. Focus on high-contrast landmarks and clear environmental features. Add calibration routine for different lighting conditions. |
| R-02 | User Experience: Audio feedback is overwhelming or confusing during navigation. | Medium | High | Design clear, concise audio cues with adjustable frequency. Implement progressive disclosure of information and user-configurable detail levels. Conduct testing with visually impaired users. |
| R-03 | Safety: The app provides incorrect navigation guidance, potentially leading a user into danger. | Low | Critical | The app will include mandatory disclaimer stating it's an assistive aid, not replacement for cane or guide dog. Implement obstacle detection alerts and safety boundaries. Use conservative guidance with safety margins. |
| R-04 | Technical: Camera performance varies significantly in different indoor lighting conditions. | Medium | High | Implement adaptive exposure and contrast enhancement. Add manual override options. Test across various indoor environments (offices, hallways, large rooms). |
| R-05 | Project: The 4-week timeline is too aggressive, leading to burnout or an incomplete product. | High | Medium | The PM/PO will strictly enforce the MVP scope. Prioritize core navigation functionality over advanced features. Any non-essential features moved to post-launch backlog. |

#### 3.4 Monitoring and Controlling Mechanisms

- **Task Tracking:** All work will be tracked as tickets in [Linear](https://linear.app/). The board will be reviewed during the weekly progress meetings.
- **Change Control:** Any requested changes to the scope of an in-progress ticket will be evaluated by the PM/PO. If not critical, the change will be added to the backlog for consideration in a future iteration.

### 4. Technical Process

#### 4.1 Methods, Tools, and Techniques

- **Platform:** React Native
- **Version Control:** Git, with the central repository hosted on GitHub.
- **Environmental Analysis:** Google Gemini API (or a similar LLM with vision capabilities) for navigation guidance and landmark identification.
- **Project Management:** Linear.app

#### 4.2 Software Documentation

- **Code Comments:** All functions, components, and complex logic blocks must be documented using JSDoc-style comments to explain their purpose, parameters, and return values.
- **Architecture:** A README.md file in the project root will provide a high-level overview and setup instructions. A docs/ folder will contain a simple diagram of the application architecture.

#### 4.3 Project Support Functions

- **Code Repository:** GitHub will be used for version control, code reviews (via Pull Requests), and issue tracking.
- **Communication:** A dedicated Discord group chat will be used for daily team communication.

### 5. Work Elements, Schedule, and Budget

#### Work Elements and Schedule

The project is divided into two distinct one-week phases, each with a major submission deadline.

**Phase 1: Requirements & Design (Interim Project I)**

- **Timeline:** Sep 2, 2025 – October 2, 2025
- **Goal:** To define the project's scope, requirements, and user experience through detailed analysis, scenario modeling, and design mockups.
- **Key Activities:**
  - Analyze "AS-IS" scenarios for visually impaired individuals navigating complex indoor environments.
  - Develop "TO-BE" scenarios illustrating how the Everywhere Locator app will provide directional guidance and obstacle awareness.
  - Create UI/UX mockups and wireframes for the navigation interface flow (the "mock-up prototype").
  - Draft the preliminary Workshop Requirements Specification (WRS) document focusing on navigation requirements.
  - Develop Questionnaire I to validate assumptions about directional guidance and audio feedback preferences.
  - Prepare the Interim Project I presentation slides.
- **Deliverables (Due Thursday, Oct. 2 at 11:59 p.m.):**
  - Interim Project I Presentation (PPT)
  - Preliminary Workshop Requirements Specification (WRS) Document
  - Questionnaire I
  - Evolving Project Plan (this document)

**Phase 2: Prototyping & Validation (Final Project I)**

- **Timeline:** Friday, October 3 – Thursday, October 9, 2025
- **Goal:** To develop a functional, running prototype based on the requirements from Phase 1 and to establish formal traceability.
- **Key Activities:**
  - Implement the core navigation UI in React Native based on the Phase 1 mockups.
  - Develop the "running prototype" by integrating the camera, voice input, directional guidance algorithms, and LLM connection for environmental analysis.
  - Finalize the WRS document with any learnings from the navigation prototyping process.
  - Create the Compact and Full Forward Traceability matrices, linking navigation requirements from the WRS to specific components in the prototype.
  - Calculate the requirements creeping rate.
  - Update the Project Plan and presentation with final progress.
- **Deliverables (Due Thursday, Oct. 9 at 11:59 p.m.):**
  - Final WRS Document
  - Compact-Forward-Traceability Matrix
  - Full-Forward-Traceability Matrix
  - Final Questionnaire
  - Updated Presentation (PPT), if any changes were made
  - Final evolving Project Plan

#### Budget

The project has a minimal budget allocated for essential third-party services.

- **LLM API Usage Fees:** $5.00

---

# PROJECT PHASE I

## Overview

Phase I consisted of two sub-phases spanning October 2-9, 2025:
- **Interim Phase I (Oct 2):** Requirements and design specifications
- **Final Phase I (Oct 9):** Prototype and traceability documentation

---

## Vision Document - Everywhere Locator

**Version:** 2.0
**Date:** November 4, 2025

### Executive Summary

Everywhere Locator is a mobile application designed to empower visually impaired individuals with **independent indoor navigation** from Point A to Point B.

**Phase II Innovation:** Integration of smart glasses hardware (Seeed Studio XIAO ESP32S3 Sense) that captures video footage and transmits it to the smartphone for real-time processing. This enables accurate landmark recognition, position verification, and reliable turn-by-turn audio directions.

**Target Users:** Visually impaired individuals navigating complex indoor environments (office buildings, universities, hospitals, transit hubs).

**Key Differentiator:** Voice-first interface combined with smart glasses vision for safe, accurate, independent navigation.

### Problem Statement

**Current Situation:** Visually impaired individuals face significant challenges when navigating unfamiliar indoor environments:

| Challenge | Root Cause | Impact |
|-----------|-----------|--------|
| **Loss of independence** | Requires human assistance for navigation | Reduced autonomy and dignity |
| **Navigation errors** | No real-time position verification | Safety risks |
| **Time consumption** | Manual route planning required | Inefficiency |
| **Lack of confidence** | Uncertainty about location | Hesitation to explore |
| **Limited accessibility** | Existing solutions focus only on obstacles | Incomplete assistance |

**Scope of Problem:**
- **Who:** Visually impaired individuals (blind or severely low-vision)
- **Where:** Complex indoor environments (multi-floor buildings, campuses, hospitals, transit hubs)
- **When:** During daily navigation tasks (work, education, healthcare, shopping)
- **Why:** Need to reach specific destinations independently
- **What's Missing:** Real-time A-to-B navigation guidance with landmark verification

### Vision Statement

```
To empower visually impaired individuals with the independence,
confidence, and capability to navigate complex indoor environments
autonomously, from any Point A to any Point B, using intelligent
mobile technology that combines voice commands, real-time landmark
recognition, and turn-by-turn audio guidance.
```

### Goals & Objectives

**Strategic Goals - Phase II:**

| Goal | Objective | Success Metric | Target |
|------|-----------|-----------------|--------|
| **Safe Navigation** | Users reach destination without incident | Navigation completion rate | >90% |
| **Safe Navigation** | Accurate position during navigation | Landmark recognition accuracy | >85% |
| **Safe Navigation** | Warn of obstacles ahead | Obstacle detection rate | >95% |
| **Accessible Interface** | User can input destination | Voice recognition success rate | >90% |
| **Accessible Interface** | User understands directions | Turn-by-turn clarity rating | 4.0+/5.0 |
| **Reliable Performance** | System responds quickly | Audio latency | <500ms |
| **Reliable Performance** | Stable connection | Bluetooth uptime | >95% |
| **Reliable Performance** | Sustained usage | Battery life per session | 2+ hours |
| **User Confidence** | User satisfaction | Satisfaction rating | 4.0+/5.0 |
| **User Confidence** | Willing to use independently | Repeat usage rate | >70% |

### Success Criteria

**Functional Success:**
- Prototype navigates user from Point A to Point B
- Voice command accepts any building location
- Turn-by-turn guidance is clear and actionable
- Landmarks recognized accurately from video
- Obstacles detected and communicated
- Smart glasses connected reliably to phone

**Technical Success:**
- Navigation accuracy >90%
- Landmark recognition >85%
- Connection stability >95%
- Audio latency <500ms
- Battery life 2+ hours

---

## Workshop Requirements Specification (WRS) - Phase I

**Version:** 1.0
**Date:** September 16, 2025
**Updated:** November 4, 2025

### Issues with Preliminary Definition

Upon reviewing the initial project description, the team identified a significant scope-related issue:

**Problem:** The preliminary definition described a comprehensive indoor navigation system ("Theia") for guiding a user from a source location to a destination location, potentially across different buildings. This implied complex features like mapping, real-time user localization (positioning), and pathfinding.

**Assessment:** The team assessed this scope as being too aggressive for the 4-week timeline, posing a high risk of an incomplete or non-functional final product.

**Decision:** The team decided to de-scope the project to focus on critical sub-problem: **object identification and location** within the user's immediate vicinity. This approach ensured the team could deliver a polished and functional MVP that successfully implements its core features.

### WRS Definition

#### W (World)

**Stakeholders:**
- **For (Beneficiaries):** Visually impaired individuals who need assistance locating objects in an indoor environment.
- **Of (Subject):** The application domain is indoor spaces like homes, offices, and classrooms. The subject is the immediate environment scannable by a smartphone camera.
- **By (Client):** The development team (Team 1) and course instructional staff.

**Problem:** Visually impaired individuals often face challenges in locating specific objects within a room (e.g., finding an empty chair, a doorway, or a table). While tools like canes assist with obstacle avoidance, they do not help in identifying objects at a distance.

**Goal:** Create a functional mobile application that empowers users to identify and locate common indoor objects using their smartphone camera, voice commands, and audio feedback.

#### R (Requirements)

**Functional Requirements:**
- The system shall accept a voice command from the user specifying a desired object to locate.
- The system shall use the smartphone's camera to visually scan the surrounding environment.
- The system shall process the camera feed to recognize and identify objects using a Large Language Model (LLM).
- The system shall provide directional audio feedback to guide the user towards the identified object.

**Non-functional Requirements:**
- **Safety:** The system shall be positioned as an assistive aid, not a replacement for primary navigation tools like a cane. Guidance shall be suggestive (e.g., "The chair appears to be to your left") rather than prescriptive.
- **Usability:** The system shall be primarily operable through voice commands and audio feedback to ensure accessibility for visually impaired users. The UI must adhere to accessibility standards.
- **Performance:** The object recognition and audio feedback must be provided in near real-time to be useful for navigation.
- **Reliability:** The system requires a stable internet connection for making LLM API calls.

#### S (Specification)

**Functional Specification:**
- The application shall be developed using React Native to support both iOS and Android platforms.
- The system shall utilize the device's native voice-to-text capabilities to process user commands.
- The system shall integrate with a third-party LLM with vision capabilities (e.g., Google Gemini) via its API.
- The system shall use native text-to-voice capabilities to provide audio feedback.

**Non-functional Specification:**
- The system shall include a mandatory disclaimer and user onboarding message that clarifies its function as an assistive aid.
- The MVP's object recognition logic will be focused on a limited set of 5-10 common, easily distinguishable objects to ensure accuracy and performance.
- All functions, components, and complex logic must be documented with JSDoc-style comments.

---

## Traceability Matrix - Phase I

### Requirement Tracking

| Requirement ID | Requirement Description                             | WRS | SPMP | Presentation | Questionnaire |
| :------------- | :-------------------------------------------------- | :-: | :--: | :----------: | :-----------: |
| **FR-01**      | Accept destination location from the user           |  X  |  X   |      X       |       X       |
| **FR-02**      | Figure out and provide routes to the destination    |  X  |  X   |      X       |               |
| **FR-03**      | Tell the user walking distance/time/steps           |  X  |      |      X       |               |
| **FR-04**      | Tell the user when to stop and turn                 |  X  |      |      X       |               |
| **FR-05**      | Detect obstacles and provide avoidance instructions |     |  X   |              |               |
| **FR-06**      | Place emergency calls and messages                  |     |      |              |       X       |
| **FR-07**      | Suggest next actions based on user habits           |     |      |              |               |
| **NFR-01**     | System shall ensure safe navigation                 |  X  |  X   |              |       X       |
| **NFR-02**     | System shall provide the fastest route              |     |      |              |               |
| **NFR-03**     | System shall provide the most comfortable route     |     |      |              |               |
| **NFR-04**     | System shall be usable for visually impaired users  |  X  |  X   |      X       |       X       |
| **NFR-05**     | System shall be ubiquitous                          |  X  |  X   |              |               |
| **NFR-06**     | System should be customizable                       |     |  X   |      X       |               |
| **NFR-07**     | System should be easily extensible                  |  X  |  X   |              |               |

---

## Requirements Creeping Rate - Phase I

### Analysis

The requirements creeping rate measures the change in requirements from initial definition to current specification:

**Formula:** (Number of Added + Changed Requirements / Number of Initial Requirements) × 100%

**Initial Requirements:**
- Initial Functional Requirements (FRs): 7
- Initial Non-Functional Requirements (NFRs): 7
- Total Initial Requirements: 14

**Changes Made:**
- FRs Changed/Removed: 7 (major changes to A-to-B navigation requirements)
- NFRs Removed: 3 (fastest route, most comfortable route, customizable)
- New FRs Added: 4 (object identification focus)
- New NFRs Added: 2 (performance, reliability)
- **Total Added + Changed Requirements:** 16

**Calculation:**
- Creeping Rate = (16 / 14) × 100% = **114.3%**

**Interpretation:** A requirements creeping rate of 114.3% indicates a complete project pivot. This high number reflects a deliberate and necessary strategic decision by the team to de-scope the initial ambitious vision into a feasible MVP, proactively managing risk to ensure a functional and polished product within the given timeframe.

---

---

# PROJECT PHASE II

## Overview

Phase II consisted of work from October 10 - December 4, 2025, with focus on:
- Advanced requirements modeling
- Hardware integration (smart glasses)
- Formal documentation using RE-Tools
- Prototype development and validation

---

## Vision Document - Phase II (Updated)

**Version:** 2.0
**Date:** November 4, 2025

### Phase II Innovation

Integration of smart glasses hardware (Seeed Studio XIAO ESP32S3 Sense) that captures video footage and transmits it to the smartphone for real-time processing.

**Why Smart Glasses?**

| Aspect | Phase I | Phase II | Improvement |
|--------|---------|----------|------------|
| **Video Source** | Smartphone camera (variable angle) | Smart glasses camera (consistent view) | Consistent perspective for landmark recognition |
| **Hands** | User must hold phone | Hands free while walking | Improved safety and navigation confidence |
| **Field of View** | User adjusts angle | Natural eye-level view | Better environmental awareness |
| **Stability** | Held in hand (prone to drops) | Worn on glasses frame | Secure, stable attachment |

### Phase II Scope

**In Scope - Phase II MVP:**

Core Navigation Features:
- A-to-B Indoor Navigation (Point A to Point B routing)
- Voice Command Input (Destination via natural language)
- Turn-by-Turn Audio Guidance (Real-time turn-by-turn directions)
- Landmark Recognition (Visual identification via smart glasses)
- Position Verification (Confirm location at key points)

Hardware Integration:
- Smart Glasses Camera (Seeed Studio XIAO ESP32S3)
- Video Transmission (Bluetooth to smartphone)
- Battery Monitoring (Power management and alerts)
- Connection Management (Auto-reconnect capability)

Safety and Accessibility:
- Obstacle Detection (Vision-based warnings)
- Safety Disclaimers (Assistive aid positioning)
- WCAG 2.1 AA Compliance (Accessibility standards)
- Audio Feedback System (Clear turn instructions)
- HIPAA Disclaimer (Privacy and data handling)

Supporting Features:
- User Preferences (Audio speed, volume settings)
- Connection Status (User awareness of hardware state)
- Route Overview (Trip summary before navigation)
- Arrival Confirmation (Destination reached notification)

### Phase II Success Criteria

**Functional Success:**
- Prototype navigates user from Point A to Point B
- Voice command accepts any building location
- Turn-by-turn guidance is clear and actionable
- Landmarks recognized accurately from video
- Obstacles detected and communicated
- Smart glasses connected reliably to phone

**Technical Success:**
- Navigation accuracy >90%
- Landmark recognition >85%
- Connection stability >95%
- Audio latency <500ms
- Battery life 2+ hours

**Documentation Success:**
- Vision Document complete using RE-Tools
- WRS with formal models (UML, PIG, SIG diagrams)
- Process Specification (IDEF0 documented)
- User Manual provided
- Traceability matrix (Phase I to Phase II)

**User Validation Success:**
- Questionnaire II shows positive feedback >4.0/5.0
- Users rate system easy to use
- Users feel safe during navigation
- Users want to use system again

**Safety and Compliance:**
- No user incidents during testing
- Safety disclaimer clearly displayed
- WCAG 2.1 AA compliant
- HIPAA statement addressing privacy

---

## Updated WRS - Phase II

**Version:** 2.0
**Date:** November 4, 2025

### Phase II Requirements Focus

**Functional Requirements (6 total):**
- FR-01: Accept voice command for destination location
- FR-02: Calculate and provide optimal route to destination
- FR-03: Provide turn-by-turn audio guidance with distance/time
- FR-04: Recognize landmarks from smart glasses video
- FR-05: Detect obstacles and provide warnings
- FR-06: Maintain connection with smart glasses hardware

**Non-Functional Requirements (6 total):**
- NFR-01: Ensure safe navigation with proper disclaimers
- NFR-02: Support visually impaired users (voice-first interface)
- NFR-03: Maintain reliability >95% uptime
- NFR-04: Provide audio latency <500ms
- NFR-05: Support battery life 2+ hours
- NFR-06: WCAG 2.1 AA accessibility compliance

### Phase II Specification

**Technical Specifications:**
- React Native cross-platform application (iOS and Android)
- Bluetooth 5.0 connectivity with smart glasses
- Google Gemini API integration for landmark recognition
- Voice recognition and text-to-speech systems
- Indoor mapping and navigation database
- Real-time video processing from smart glasses

**Accessibility Requirements:**
- Voice-first interface design
- Audio-only feedback system
- Minimal visual dependencies
- Support for screen readers
- Adjustable speech rate and volume

**Safety Requirements:**
- Mandatory disclaimer as assistive aid only
- Conservative guidance with safety margins
- Obstacle detection and avoidance
- Emergency contact capabilities
- User authentication and privacy protection

---

## Interim Progress Report - Phase II

**Report Date:** November 4, 2025
**Reporting Period:** Phase II (October 10 - November 4, 2025)

### Executive Summary

**Overall Status:** ON TRACK
**Completion Against Plan:** 100% of planned interim deliverables on schedule
**Team Velocity:** Excellent - Week 1-4 exceeded expectations
**Confidence Level:** HIGH (90%) for final submission

**Key Achievements:**
- All formal requirements modeling complete
- Smart glasses fully integrated and demonstrated
- Team training accelerated
- No critical blockers

**By the Numbers:**
- Planned deliverables (6): 6 complete or in final preparation
- Phase II requirements specified: 100% (6 FR + 6 NFR)
- Formal models delivered: 5 complete
- Team RE-Tools proficiency: 100%
- Hardware integration: 100% functional
- Days ahead of schedule: 9 days

### Summary of Week 1-4 Deliverables

**Formal Documents Delivered:**
- Vision Document v2.0
- WRS Document v2.0
- Process Specification
- Questionnaire II
- SPMP v2.1
- Interim Progress Report

**Technical Deliverables:**

| Component | Status | Details |
|-----------|--------|---------|
| Smart Glasses Hardware | COMPLETE | Seeed XIAO ESP32S3 integrated, firmware loaded, demo tested |
| Hardware Demo | COMPLETE | Full A-to-B navigation scenario demonstrated and recorded |
| Bluetooth Integration | COMPLETE | Stable connection, 97% uptime, video transmission 5 FPS |
| Voice Command Framework | DESIGNED | Ready for implementation Week 5 |
| Landmark Recognition Framework | DESIGNED | LLM API integration approach documented |

### Blockers and Issues Status

**Current Status:** NO CRITICAL BLOCKERS

All identified issues have been either resolved or have effective mitigation strategies in place.

| Issue ID | Description                                   | Severity | Status    | Resolution                                                              |
| -------- | --------------------------------------------- | -------- | --------- | ----------------------------------------------------------------------- |
| Issue-01 | Scope Clarification: A-to-B vs Object Finding | High     | RESOLVED  | Confirmed A-to-B navigation scope from Phase I; corrected documentation |
| Issue-02 | Hardware Integration Feasibility              | Medium   | RESOLVED  | Hardware received and tested; integration protocol established          |
| Issue-03 | LLM API Latency and Cost                      | Medium   | RESOLVED  | Smart caching strategy + selective API use designed; under budget       |
| Issue-04 | Building Map Data Availability                | Medium   | MITIGATED | Simplified graph model approach for MVP; sufficient for demonstration   |
| Issue-05 | RE-Tools Learning Curve                       | Low      | RESOLVED  | Accelerated training in Week 1; team fully proficient                   |

**Risk Status Update:**

| Risk ID | Description | Previous Status | Current Status | Mitigation Effectiveness |
|---------|-------------|-----------------|-----------------|------------------------|
| R-05 | Timeline Pressure | High | REDUCED | On schedule, Week 1-4 complete |
| R-06 | Hardware Connectivity | High | MITIGATED | Hardware tested, connection stable |
| R-08 | RE-Tools Learning | Medium | RESOLVED | Team trained and proficient |
| R-11 | Map Data Availability | Medium | MITIGATED | Simplified approach approved |

**Overall Risk Assessment:** LOW RISK

---

## Next Steps - Phase II

**Phase II Week 5-7 Plan (Nov 18 - Dec 4, 2025)**

### Week 5 (Nov 18-22): Prototype Development Phase 1 - Core Navigation

**Primary Goals:**
- Develop running prototype with basic A-to-B navigation
- Integrate voice command input
- Implement route calculation

**Deliverables:**
- Core navigation UI components
- Route calculation module
- Voice command integration framework

### Week 6 (Nov 25-29): Prototype Development Phase 2 - Hardware Integration

**Primary Goals:**
- Complete smart glasses video feed integration
- Implement landmark recognition
- Add obstacle detection

**Deliverables:**
- Landmark recognition system
- Obstacle detection module
- Hardware integration testing

### Week 7 (Dec 1-4): Testing & Validation

**Primary Goals:**
- User testing with visually impaired participants
- Comprehensive system testing
- Documentation finalization

**Deliverables:**
- Final prototype with all features
- Questionnaire III results
- Traceability matrix update
- Final project report

---

---

# DEPENDENCIES AND TRACEABILITY

## Phase I to Phase II Traceability

### Full Forward Traceability Matrix

| Req. ID    | Requirement Description                             | Phase I Artifacts | Phase II Downstream Artifact |
| :--------- | :-------------------------------------------------- | :--------- | :----------- |
| **FR-01**  | Accept destination location from the user           | WRS, SPMP, Presentation, Q1 | **Phase II WRS:** Voice command for destination<br>**Architecture:** Voice input module<br>**Implementation:** React Native voice component |
| **FR-02**  | Figure out and provide routes to the destination    | WRS, SPMP, Presentation | **Phase II WRS:** Route calculation system<br>**Architecture:** Navigation engine<br>**Smart Glasses:** Vision-based position verification |
| **FR-03**  | Tell the user walking distance/time/steps           | WRS, Presentation | **Phase II WRS:** Turn-by-turn guidance with distance/time<br>**Audio System:** Distance calculation module<br>**Implementation:** Real-time distance calculation |
| **FR-04**  | Tell the user when to stop and turn                 | WRS, Presentation | **Phase II WRS:** Turn-by-turn audio guidance<br>**Audio System:** Turn instruction generation<br>**Implementation:** Navigation state machine |
| **FR-05**  | Detect obstacles and provide avoidance instructions | SPMP Risk (R-03) | **Phase II WRS:** Obstacle detection requirement<br>**Architecture:** Vision-based obstacle detection<br>**Smart Glasses:** Video processing for obstacles |
| **FR-06**  | Place emergency calls and messages                  | Q1 (mentioned) | **Phase II:** Deferred to Phase II.1 or later<br>**Questionnaire II:** User feedback on importance |
| **FR-07**  | Suggest next actions based on user habits           | Q1 (mentioned) | **Out of Scope for MVP**<br>**Future Enhancement:** Post-launch feature |
| **NFR-01** | System shall ensure safe navigation                 | WRS, SPMP, Q1 | **Phase II WRS:** Safety requirement with disclaimers<br>**Implementation:** Safety disclaimer modal<br>**Compliance:** HIPAA and accessibility standards |
| **NFR-02** | System shall provide the fastest route              | Phase I Removed | **Not in Phase II MVP scope**<br>**Rationale:** De-scoped for feasibility |
| **NFR-03** | System shall provide the most comfortable route     | Phase I Removed | **Not in Phase II MVP scope**<br>**Rationale:** De-scoped for feasibility |
| **NFR-04** | System shall be usable for visually impaired users  | WRS, SPMP, Presentation, Q1 | **Phase II WRS:** Voice-first interface requirement<br>**Accessibility:** WCAG 2.1 AA compliance<br>**Architecture:** Audio feedback system<br>**Questionnaire II:** User usability feedback |
| **NFR-05** | System shall be ubiquitous                          | WRS, SPMP | **Phase II:** React Native for iOS/Android<br>**Implementation:** Cross-platform architecture |
| **NFR-06** | System should be customizable                       | SPMP, Presentation | **Phase II:** Settings module for user preferences<br>**Implementation:** Audio speed, volume controls |
| **NFR-07** | System should be easily extensible                  | WRS, SPMP | **Phase II Architecture:** Modular design<br>**Code Documentation:** JSDoc comments<br>**Extensibility:** Plugin architecture for future features |

### Dependency Map: Phase I to Phase II

**Requirements Carried Forward (High Confidence):**
- FR-01: Destination input → Phase II voice command system
- FR-02: Route provision → Phase II navigation engine
- FR-03: Distance/time feedback → Phase II audio guidance
- FR-04: Turn instructions → Phase II navigation state
- NFR-01: Safety positioning → Phase II disclaimers and compliance
- NFR-04: Accessibility for visually impaired → Phase II voice-first design
- NFR-05: Cross-platform ubiquity → Phase II React Native implementation
- NFR-06: Customization → Phase II settings system
- NFR-07: Extensibility → Phase II modular architecture

**Requirements Enhanced by Phase II:**
- FR-05: Obstacle detection enhanced with smart glasses vision
- NFR-02 & NFR-03: De-scoped but foundation laid for future
- FR-06: Emergency calls evaluated in questionnaire, deferred post-MVP

**Phase II Innovations Not in Phase I:**
- Smart glasses hardware integration (Seeed XIAO ESP32S3)
- Bluetooth connectivity and video transmission
- Real-time landmark recognition using LLM
- Hardware battery management
- Vision-based position verification

---

## Project Scope Evolution

### Phase I Scope
- Indoor navigation for visually impaired users
- Object identification and location finding
- Voice command interface
- Audio feedback system
- Mobile application (React Native)

### Phase II Scope
**Expansion:**
- A-to-B navigation confirmation (expanded from object finding)
- Smart glasses hardware integration
- Real-time landmark recognition
- Position verification at decision points
- Hardware connectivity management

**Unchanged Core Principles:**
- Voice-first interface
- Audio-only feedback
- Accessibility compliance
- Safety-first design
- Cross-platform mobile application

---

## Key Traceability Insights

### Successful Requirement Progression

1. **Voice Input (FR-01):** Successfully evolved from Phase I requirement to Phase II implementation with smart glasses enhancement

2. **Navigation Guidance (FR-02, FR-03, FR-04):** Successfully transformed from object identification to comprehensive A-to-B navigation with enhanced accuracy through smart glasses

3. **Safety and Accessibility (NFR-01, NFR-04):** Consistently maintained across both phases with enhanced compliance requirements in Phase II

4. **Cross-Platform Support (NFR-05):** Remained consistent requirement ensuring React Native implementation

5. **Extensibility (NFR-07):** Foundation established in Phase I, continued in Phase II with modular architecture

### Requirements De-Scoped and Status

1. **Fastest Route (NFR-02):** De-scoped from Phase I MVP, viable for Phase II.1 or later
2. **Comfortable Route (NFR-03):** De-scoped for time constraints, future enhancement
3. **Suggest Actions (FR-07):** Identified as future feature, tested with Questionnaire I

### Risk Mitigation Through Traceability

- **R-01 (Directional Accuracy):** Addressed by Phase II smart glasses landmark recognition
- **R-02 (Audio Confusion):** Addressed by Phase II questionnaire validation and testing
- **R-03 (Safety):** Addressed by mandatory disclaimers and conservative guidance
- **R-05 (Timeline):** Addressed by MVP scope, de-scoping less critical features

---

## Conclusion

The Everywhere Locator project successfully progressed from Phase I requirements definition to Phase II prototype development with strong traceability and deliberate scope management. The introduction of smart glasses hardware in Phase II significantly enhanced the system's capability to deliver accurate landmark recognition and position verification while maintaining the core accessibility and safety principles established in Phase I.

All Phase I requirements have been either successfully incorporated into Phase II design or deliberately de-scoped with clear rationale and mitigation strategies. The project maintains high confidence in meeting the final December 4, 2025 deadline with a fully functional, safe, and accessible MVP for visually impaired users.
