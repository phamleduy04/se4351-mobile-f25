# Software Project Management Plan: Everywhere Locator

Version: 1.3

Date: October 7, 2025

## 1. Introduction
### 1.1 Project Overview

[Everywhere Locator](https://everywhere-locator.vercel.app) is a mobile application designed to assist visually impaired individuals with indoor navigation and orientation. The project's primary goal is to create a functional application that empowers users to navigate complex indoor environments (buildings, campuses, and event venues) using their smartphone's camera and advanced computer vision technology. The application provides real-time audio feedback about the user's surroundings, including directional guidance ("you're getting warmer/colder"), obstacle detection, and landmark identification to help users reach their desired destinations safely and independently.

Website URL: https://everywhere-locator.vercel.app

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
This project will follow a two-phase model aligned with the academic deadlines. Each phase will be treated as a one-week sprint within an Agile framework. This allows for a focused effort on requirements and design in the first week, followed by a focused development sprint in the second week. The team will hold a weekly progress meeting to review progress and plan for the next phase.

### 2.2 Organizational Structure

The 10-person team will be divided into two functional sub-teams to streamline development:

- User Interface & Experience Team (5 members): Focuses on the user interface, voice command processing, audio feedback systems, and user interaction design for optimal accessibility.

- Navigation & Vision Team (5 members): Focuses on camera integration, LLM API calls, directional guidance algorithms ("warmer/colder" functionality), and core navigation logic.

### 2.3 Organizational Boundaries and Interfaces
The Project Manager / Product Owner (PM/PO) will serve as the primary interface between the two teams, ensuring alignment on goals and priorities. However, direct communication between developers on both teams is encouraged to resolve technical dependencies quickly.

### 2.4 Project Responsibilities

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

## 3. Managerial Process
### 3.1 Management Objectives and Priorities

The project's priorities are phased:

- Phase 1 Priority: To produce a clear, well-defined set of requirements and a visual design (mock-up) that accurately captures the project's goals and user scenarios.
- Phase 2 Priority: To develop a functional running prototype (MVP) that successfully implements the core features defined in Phase 1.

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
| R-01 | Technical: The directional guidance ("warmer/colder") is inaccurate or too slow for real-time navigation. | Medium | High | Implement robust computer vision algorithms with distance calculation. Focus on high-contrast landmarks and clear environmental features. Add calibration routine for different lighting conditions. |
| R-02 | User Experience: Audio feedback is overwhelming or confusing during navigation. | Medium | High | Design clear, concise audio cues with adjustable frequency. Implement progressive disclosure of information and user-configurable detail levels. Conduct testing with visually impaired users. |
| R-03 | Safety: The app provides incorrect navigation guidance, potentially leading a user into danger. | Low | Critical | The app will include mandatory disclaimer stating it's an assistive aid, not replacement for cane or guide dog. Implement obstacle detection alerts and safety boundaries. Use conservative guidance with safety margins. |
| R-04 | Technical: Camera performance varies significantly in different indoor lighting conditions. | Medium | High | Implement adaptive exposure and contrast enhancement. Add manual override options. Test across various indoor environments (offices, hallways, large rooms). |
| R-05 | Project: The 4-week timeline is too aggressive, leading to burnout or an incomplete product. | High | Medium | The PM/PO will strictly enforce the MVP scope. Prioritize core navigation functionality over advanced features. Any non-essential features moved to post-launch backlog. |

### 3.4 Monitoring and Controlling Mechanisms
- Task Tracking: All work will be tracked as tickets in [Linear](https://linear.app/). The board will be reviewed during the weekly progress meetings.

- Change Control: Any requested changes to the scope of an in-progress ticket will be evaluated by the PM/PO. If not critical, the change will be added to the backlog for consideration in a future iteration.

## 4. Technical Process
### 4.1 Methods, Tools, and Techniques

- Platform: React Native

- Version Control: Git, with the central repository hosted on GitHub.

- Environmental Analysis: Google Gemini API (or a similar LLM with vision capabilities) for navigation guidance and landmark identification.

- Project Management: Linear.app

### 4.2 Software Documentation
- Code Comments: All functions, components, and complex logic blocks must be documented using JSDoc-style comments to explain their purpose, parameters, and return values.

- Architecture: A README.md file in the project root will provide a high-level overview and setup instructions. A docs/ folder will contain a simple diagram of the application architecture.

### 4.3 Project Support Functions
- Code Repository: GitHub will be used for version control, code reviews (via Pull Requests), and issue tracking.

- Communication: A dedicated Discord group chat will be used for daily team communication.

## 5. Work Elements, Schedule, and Budget

### Work Elements and Schedule
The project is divided into two distinct one-week phases, each with a major submission deadline.

Phase 1: Requirements & Design (Interim Project I)

- Timeline: Sep 2, 2025 – October 2, 2025

- Goal: To define the project's scope, requirements, and user experience through detailed analysis, scenario modeling, and design mockups.

- Key Activities:
	- Analyze "AS-IS" scenarios for visually impaired individuals navigating complex indoor environments.

	- Develop "TO-BE" scenarios illustrating how the Everywhere Locator app will provide directional guidance and obstacle awareness.

	- Create UI/UX mockups and wireframes for the navigation interface flow (the "mock-up prototype").

	- Draft the preliminary Workshop Requirements Specification (WRS) document focusing on navigation requirements.

	- Develop Questionnaire I to validate assumptions about directional guidance and audio feedback preferences.

	- Prepare the Interim Project I presentation slides.


- Deliverables (Due Thursday, Oct. 2 at 11:59 p.m.):
	- Interim Project I Presentation (PPT)

	- Preliminary Workshop Requirements Specification (WRS) Document

	- Questionnaire I

	- Evolving Project Plan (this document)

Phase 2: Prototyping & Validation (Final Project I)

- Timeline: Friday, October 3 – Thursday, October 9, 2025

- Goal: To develop a functional, running prototype based on the requirements from Phase 1 and to establish formal traceability.

- Key Activities:
	- Implement the core navigation UI in React Native based on the Phase 1 mockups.

	- Develop the "running prototype" by integrating the camera, voice input, directional guidance algorithms, and LLM connection for environmental analysis.

	- Finalize the WRS document with any learnings from the navigation prototyping process.

	- Create the Compact and Full Forward Traceability matrices, linking navigation requirements from the WRS to specific components in the prototype.

	- Calculate the requirements creeping rate.

	- Update the Project Plan and presentation with final progress.


- Deliverables (Due Thursday, Oct. 9 at 11:59 p.m.):
	- Final WRS Document

	- Compact-Forward-Traceability Matrix

	- Full-Forward-Traceability Matrix

	- Final Questionnaire

	- Updated Presentation (PPT), if any changes were made

	- Final evolving Project Plan

### Budget

The project has a minimal budget allocated for essential third-party services.

- LLM API Usage Fees: $5.00