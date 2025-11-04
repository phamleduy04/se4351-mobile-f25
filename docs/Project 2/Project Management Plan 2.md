# Software Project Management Plan: Everywhere Locator

Version: 2.0

Date: October 28, 2025

## 1. Introduction

### 1.1 Project Overview

[Everywhere Locator](https://everywhere-locator.vercel.app) is a mobile application designed to assist visually impaired individuals with indoor navigation. The project's primary goal is to create a functional application that empowers users to navigate from one location (Point A) to another location (Point B) within complex indoor environments such as buildings, campuses, and event venues.

**Phase II Update**: The application now integrates with smart glasses hardware (Seeed Studio XIAO ESP32S3 Sense) that captures video footage and transmits it to the phone for processing. The application provides real-time turn-by-turn audio directions, landmark identification for position verification, and obstacle warnings to help users reach their desired destinations safely and independently.

Website URL: https://everywhere-locator.vercel.app

### 1.2 Project Deliverables

Upon completion of Phase II, the project team will deliver the following:

**Phase I Deliverables (Completed):**
- Preliminary Workshop Requirements Specification (WRS) Document
- Compact and Full Forward Traceability Matrices
- Requirements Creeping Rate Analysis
- Initial Questionnaire
- Mock-up prototype

**Phase II Deliverables:**
- A cross-platform mobile application for both iOS and Android, built with React Native
- Smart glasses integration with video capture and transmission capabilities
- Vision Document (using RE-Tools)
- Final WRS Document with formal models (using RE-Tools)
- Process Specification with IDEF0 diagrams
- Running functional prototype with hardware integration for A-to-B navigation
- User Manual
- Improved Questionnaire II
- Final presentation and demonstration
- Complete source code, hosted in a GitHub repository
- Traceability documentation between Phase I and Phase II

### 1.3 Evolution of this Document

This SPMP is a living document. It has been updated to reflect Phase II activities and requirements. This version (2.0) incorporates:
- Smart glasses hardware integration
- Formal modeling requirements using RE-Tools
- Process specification requirements
- Updated timeline for Phase II deliverables
- New requirements for HIPAA compliance and sensor utilization
- **Clarification of project scope: A-to-B indoor navigation (not object finding)**

The Project Manager is responsible for maintaining this document throughout Phase II.

### 1.4 References

- React Native Documentation: https://reactnative.dev/docs/getting-started
- Seeed Studio XIAO ESP32S3 Sense Specifications: https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/
- RE-Tools: http://www.utdallas.edu/~chung/Sam_Supakkul/RE-Tools/index.html
- RE-Tools Tutorial: https://personal.utdallas.edu/~chung/Sam_Supakkul/RE-Tools/starting-re-tools.html
- Shadcn UI (or similar design system) for UI components and accessibility standards

### 1.5 Definitions, Acronyms, and Abbreviations

- AO: Agent-Oriented
- CV: Computer Vision
- GO: Goal-Oriented
- HIPAA: Health Insurance Portability and Accountability Act
- IDEF0: Integration Definition for Function Modeling
- LLM: Large Language Model (e.g., Google Gemini)
- MVP: Minimum Viable Product
- NFR: Non-Functional Requirements
- OO: Object-Oriented
- PIG: Personal Interdependency Graph
- PM: Project Manager
- PO: Product Owner
- QA: Quality Assurance
- RE: Requirements Engineering
- SIG: Softgoal Interdependency Graph
- SPMP: Software Project Management Plan
- UI/UX: User Interface / User Experience
- UML: Unified Modeling Language
- WRS: Workshop Requirements Specification

## 2. Project Organization

### 2.1 Process Model

This project follows a two-phase model aligned with academic deadlines:

**Phase I (Completed)**: Requirements & Design using informal notations
- Duration: 2 weeks (Sep 2 - Oct 9, 2025)
- Focus: Initial requirements elicitation, AS-IS/TO-BE scenarios, mockup prototype

**Phase II (Current)**: Requirements Elicitation, Specification and Validation using formal notations
- Duration: 6 weeks (Oct 10 - Dec 4, 2025)
- Interim Milestone: November 13, 2025
- Final Deliverable: December 2-4, 2025
- Focus: Formal modeling, running prototype with hardware, process specification

Each phase includes iterative cycles of elicitation, analysis, negotiation, specification, and validation. The team holds weekly progress meetings to review the task board and plan for the next iteration.

### 2.2 Organizational Structure

The 10-person team is divided into two functional sub-teams:

**Core Experience Team (5 members)**: Focuses on user interface, voice command processing for destination input, audio feedback systems for turn-by-turn directions, user interaction design, and accessibility standards.

**Vision & Navigation Team (5 members)**: Focuses on smart glasses integration, camera/video processing, LLM API integration for landmark recognition, route calculation, directional guidance algorithms, and hardware-phone communication.

### 2.3 Organizational Boundaries and Interfaces

The Project Manager / Product Owner (PM/PO) serves as the primary interface between the two teams, ensuring alignment on goals and priorities. Direct communication between developers on both teams is encouraged to resolve technical dependencies quickly.

For Phase II, additional coordination is required between teams for:
- Hardware-software integration testing
- Formal model validation
- Process documentation
- Traceability matrix development

### 2.4 Project Responsibilities

| Role | Name (NetID) | Responsibilities |
| ---- | ---- | ---------------- |
| PM/PO | Duy Pham (ldp210003) | Defines project vision, manages backlog, leads meetings, removes impediments, maintains SPMP, oversees formal modeling activities. |
| Vision & Navigation Lead | Victor Sim (vas230001) | Leads smart glasses integration, camera/video processing, LLM integration for landmark recognition, oversees route calculation and directional guidance algorithms, coordinates hardware testing. |
| Core Experience Lead | Chase Uherek (cxu230001) | Leads user interface development, ensures accessibility standards (WCAG 2.1 AA), oversees audio feedback for navigation instructions, manages UML modeling. |
| Developer | Nathan Boyle (nmb210005) | Core Experience Team - Interface design, user interaction, UML use case modeling. |
| Developer | Viet-Long Nguyen (vhn200002) | Core Experience Team - Voice command processing for destinations, audio feedback for turn-by-turn directions, accessibility features. |
| Developer | Alberto Escobar (axe220010) | Core Experience Team - User experience design, navigation UI, user manual documentation. |
| Developer | Kim Chau (kxc220015) | Vision & Navigation Team - Smart glasses hardware integration, video transmission protocols. |
| Developer | Shreyaa Arun (sxa220019) | Vision & Navigation Team - LLM API integration for landmark recognition. |
| Developer | Onkar Sandhu (oss210000) | Vision & Navigation Team - Route calculation logic, directional guidance, sensor utilization. |
| QA / Testing | Kutsal Aksu (koa220001) | Responsible for testing across both teams, manages bug reports, validates formal models, conducts hardware-software integration testing. |

## 3. Managerial Process

### 3.1 Management Objectives and Priorities

The project's priorities are phased:

**Phase 1 Priority (Completed)**: Produce clear, well-defined requirements and visual design (mock-up) that accurately captures the project's goals and user scenarios for A-to-B indoor navigation.

**Phase 2 Priorities (Current)**:
1. Develop formal requirements models using RE-Tools (Vision Document, WRS with UML/PIG/SIG)
2. Create process specification using IDEF0 showing Phase I and Phase II iterations
3. Implement running prototype with smart glasses hardware integration for A-to-B navigation
4. Ensure compliance with new requirements (HIPAA, sensor utilization)
5. Establish comprehensive traceability between Phase I and Phase II
6. Validate all models through improved questionnaire and user feedback

### 3.2 Assumptions, Dependencies, and Constraints

**Assumptions:**
- The user's smartphone has functional Bluetooth connectivity for smart glasses
- The user's smartphone has a stable internet connection for LLM API calls (for landmark recognition)
- Smart glasses hardware (Seeed Studio XIAO ESP32S3 Sense) can maintain stable video transmission
- Indoor map data is available for the target buildings
- Users will accept wearing smart glasses as part of the assistive system

**Dependencies:**
- Third-party LLM (e.g., Google Gemini) for landmark recognition to verify user position along route
- RE-Tools software availability and functionality
- Smart glasses hardware availability and performance
- Wireless communication stability between glasses and phone
- Battery life of smart glasses for sustained navigation sessions
- Indoor map data availability and accuracy

**Constraints:**
- Application must be developed using React Native for cross-platform support
- Must use RE-Tools for formal modeling (Vision Document, WRS)
- Phase II deadline: December 4, 2025
- Interim deadline: November 13, 2025
- Must include formal UML, PIG, SIG, and IDEF0 diagrams
- Must address HIPAA compliance or include appropriate disclaimer
- Must maximize utilization of available sensors

### 3.3 Risk Management

| Risk ID | Risk Description                                                                                       | Probability | Impact   | Mitigation Strategy                                                                                                                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------ | ----------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R-01    | Technical: Turn-by-turn directions are inaccurate or delayed during navigation.                        | Medium      | High     | Implement robust landmark recognition algorithms. Focus on high-contrast landmarks and clear environmental features. Pre-calculate routes with multiple verification points.                             |
| R-02    | User Experience: Audio directions are confusing or difficult to follow.                                | Medium      | High     | Design clear, concise turn-by-turn instructions with adjustable frequency. Test instruction clarity with visually impaired users. Provide distance and time estimates.                                   |
| R-03    | Safety: The app provides incorrect directions, potentially leading a user to wrong location or danger. | Low         | Critical | The app will include mandatory disclaimer stating it's an assistive aid, not replacement for cane or guide dog. Implement multiple landmark verification. Use conservative guidance with safety margins. |
| R-04    | Technical: Camera performance varies significantly in different indoor lighting conditions.            | Medium      | High     | Implement adaptive exposure and contrast enhancement. Test across various indoor environments (offices, hallways, large rooms).                                                                          |
| R-05    | Project: The 6-week Phase II timeline is aggressive, leading to incomplete deliverables.               | High        | Medium   | PM/PO will strictly enforce MVP scope. Prioritize core navigation functionality and required formal models. Use iterative development with weekly milestones.                                            |
| R-06    | Hardware: Smart glasses connectivity issues or video transmission failures.                            | High        | High     | Implement robust error handling and reconnection logic. Test extensively with different phone models. Provide fallback mode if glasses fail. Include connection status indicators.                       |
| R-07    | Hardware: Smart glasses battery life insufficient for complete navigation sessions.                    | Medium      | Medium   | Optimize video transmission protocols to reduce power consumption. Provide battery status monitoring. Document expected usage time in user manual.                                                       |
| R-08    | Technical: RE-Tools learning curve impacts modeling timeline.                                          | Medium      | Medium   | Begin RE-Tools training immediately. Allocate time for team learning. Use tutorial resources. Start with simpler models and iterate.                                                                     |
| R-09    | Compliance: HIPAA requirements add complexity to data handling.                                        | Low         | High     | Implement appropriate disclaimer clearly stating app limitations. Ensure no PHI (Protected Health Information) is stored. Document data handling policies.                                               |
| R-10    | Technical: Sensor integration complexity impacts development timeline.                                 | Medium      | Medium   | Prioritize critical sensors (camera, microphone). Document sensor capabilities. Implement modular sensor interface for future expansion.                                                                 |
| R-11    | Navigation: Indoor map data may be incomplete or inaccurate.                                           | Medium      | High     | Validate map data for target buildings. Implement user feedback mechanism for map corrections. Use landmark verification to validate position.                                                           |
| R-12    | Navigation: Route calculation may fail or provide suboptimal paths.                                    | Medium      | Medium   | Implement multiple pathfinding algorithms. Provide alternative routes when available. Test extensively in target environments.                                                                           |

### 3.4 Monitoring and Controlling Mechanisms

**Task Tracking:**
- All work tracked as tickets in GitHub Projects
- Board reviewed during weekly progress meetings
- Separate swim lanes for: Formal Modeling, Prototype Development, Documentation, Hardware Integration, Navigation Features

**Change Control:**
- Any scope changes evaluated by PM/PO
- Changes impacting Phase II deliverables require team consensus
- Non-critical changes added to post-Phase II backlog

**Progress Monitoring:**
- Weekly team meetings (1 hour)
- Bi-weekly sub-team syncs (30 minutes each)
- Daily async updates via Discord
- Milestone checkpoints:
  - Week 1 (Oct 28): RE-Tools training complete, begin formal models
  - Week 2 (Nov 4): Hardware integration architecture defined, route calculation design
  - Week 3 (Nov 11): Interim deliverables in progress
  - Week 3.5 (Nov 13): **Interim Submission Deadline**
  - Week 4 (Nov 18): Running prototype with basic navigation and hardware integration
  - Week 5 (Nov 25): Formal models complete, testing phase begins
  - Week 6 (Dec 2-4): **Final presentation and submission**

**Quality Assurance:**
- QA lead reviews all formal models for consistency
- Code reviews via GitHub Pull Requests
- Hardware-software integration testing sessions
- Navigation testing in target indoor environments
- User manual validation against actual prototype behavior
- Traceability matrix validation

## 4. Technical Process

### 4.1 Methods, Tools, and Techniques

**Development Platform:**
- React Native for cross-platform mobile development
- TypeScript for type-safe code

**Hardware:**
- Seeed Studio XIAO ESP32S3 Sense smart glasses
- Specifications: https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/
- Camera module for video capture
- Bluetooth/WiFi for phone communication

**Sensors to Maximize:**
- Camera (smart glasses) - primary video input for landmark recognition
- Microphone - voice commands for destination input
- GPS/Location - general positioning (when available)
- Bluetooth - smart glasses connection

**Version Control & Collaboration:**
- Git with GitHub repository
- GitHub Projects for task management
- Discord for team communication

**Requirements Engineering:**
- RE-Tools for formal modeling
  - Vision Document creation
  - WRS specification
  - UML diagrams (Class, Use Case, Sequence)
  - Goal models (PIG, SIG)
  - Process models (IDEF0)

**Navigation Components:**
- Indoor map data for route calculation
- Google Gemini API (or similar LLM with vision capabilities) for landmark recognition and position verification
- Video frame processing from smart glasses
- Pathfinding algorithms for route calculation

**Testing:**
- Unit testing for individual components
- Integration testing for hardware-software communication
- End-to-end testing with actual smart glasses in indoor environments
- Navigation accuracy testing with known routes
- Accessibility testing with screen readers
- User acceptance testing with improved questionnaire

### 4.2 Software Documentation

**Code Documentation:**
- JSDoc-style comments for all functions, components, and complex logic
- Purpose, parameters, and return values clearly documented
- Inline comments for algorithmic complexity

**Architecture Documentation:**
- README.md in project root with:
  - High-level architecture overview
  - Setup and installation instructions
  - Hardware setup guide
  - Dependencies and requirements
- docs/ folder containing:
  - System architecture diagram
  - Hardware-software communication protocol
  - Navigation flow diagrams
  - Route calculation algorithms
  - API integration guide

**Formal Documentation (Phase II):**
- Vision Document (RE-Tools)
- WRS Document with formal models (RE-Tools)
- Process Specification with IDEF0 diagrams
- User Manual with hardware setup and navigation instructions
- Traceability matrices (Compact and Full)

**Standards Compliance:**
- WCAG 2.1 AA for accessibility
- IEEE 830 style for documentation
- Markdown for all text documents

### 4.3 Project Support Functions

**Code Repository:**
- GitHub for version control
- Pull Request workflow for code reviews
- Issue tracking for bugs and feature requests
- Branch strategy: main (stable), develop (integration), feature/* (development)

**Communication:**
- Discord group chat for daily communication

**Documentation Hosting:**
- Team website: https://everywhere-locator.vercel.app
- GitHub repository for code and technical docs
- Shared Google Drive for formal models and deliverables

## 5. Work Elements, Schedule, and Budget

### Work Elements and Schedule

The project is divided into two phases:

---

#### **Phase 1: Requirements & Design (Completed)**

**Timeline**: September 2 - October 9, 2025

**Goal**: Define project scope, requirements, and user experience for A-to-B indoor navigation through analysis, scenario modeling, and design mockups.

**Key Activities Completed:**
- Analyzed AS-IS scenarios for visually impaired navigation
- Developed TO-BE scenarios with turn-by-turn navigation
- Created UI/UX mockups and wireframes for navigation interface
- Drafted preliminary WRS focusing on indoor navigation
- Developed Questionnaire I
- Built mockup prototype

**Deliverables Completed** (Oct 9):
- Preliminary WRS Document
- Compact and Full Forward Traceability Matrices
- Requirements Creeping Rate Analysis (114.3%)
- Questionnaire I
- Mockup prototype
- Phase I Presentation

---

#### **Phase 2: Requirements Elicitation, Specification and Validation (Current)**

**Timeline**: October 10 - December 4, 2025

**Goal**: Develop formal requirements models using advanced notations, implement running prototype with smart glasses hardware for A-to-B navigation, create process specification, and establish comprehensive traceability.

**Key Activities:**

**Week 1-2 (Oct 10 - Oct 25): Foundation & Learning**
- Complete RE-Tools training for all team members
- Set up smart glasses hardware development environment
- Begin Vision Document using RE-Tools
- Start hardware-software communication architecture design
- Design route calculation and navigation algorithms
- Review Phase I deliverables for improvements

**Week 3 (Oct 28 - Nov 1): Formal Modeling Begins**
- Develop UML diagrams (Class, Use Case, Sequence) in RE-Tools for navigation system
- Begin PIG (Personal Interdependency Graph) development
- Begin SIG (Softgoal Interdependency Graph) development
- Start IDEF0 process specification
- Prototype hardware integration (video transmission)
- Begin route calculation implementation

**Week 4 (Nov 4 - Nov 8): Interim Preparation**
- Complete draft Vision Document
- Complete draft WRS with formal models
- Develop improved Questionnaire II
- Update Project Plan to version 2.0
- Continue hardware integration development
- Test route calculation algorithms

**Week 4.5 (Nov 11 - Nov 13): Interim Submission**
- Finalize all interim deliverables
- Internal review and quality check
- **DEADLINE: November 13, 11:59 PM**

**Interim Deliverables (Due Nov 13):**
- Vision Document (using RE-Tools)
- Updated WRS Document (using RE-Tools)
- Evolving Project Plan (version 2.0)
- Process Specification (if available)
- Improved Questionnaire II

**Week 5 (Nov 14 - Nov 22): Running Prototype Development**
- Implement turn-by-turn navigation with smart glasses video input
- Develop phone-glasses communication protocol
- Implement route calculation and guidance
- Implement landmark recognition for position verification
- Implement audio feedback system for directions
- Begin user manual documentation
- Conduct hardware-software integration testing
- Add HIPAA disclaimer to application

**Week 6 (Nov 25 - Nov 29): Integration & Testing**
- Complete running prototype with all core navigation features
- Conduct end-to-end navigation testing with smart glasses
- Test navigation in various indoor environments
- Validate formal models against implementation
- Complete user manual with navigation instructions
- Finalize all documentation

**Week 7 (Dec 2 - Dec 4): Final Preparation & Presentation**
- Create presentation slides
- Prepare demonstration with hardware showing A-to-B navigation
- Conduct final quality assurance review
- Create traceability documentation between Phase I and II
- Package all deliverables
- **DEADLINE: December 4, 11:59 PM**
- **Presentations: December 2 & 4**

**Final Deliverables (Due Dec 4):**

**Product Specification:**
- Final Vision Document (RE-Tools)
- Final WRS Document with:
  - UML diagrams (Class, Use Case, Sequence) for navigation system
  - PIG (Personal Interdependency Graph)
  - SIG (Softgoal Interdependency Graph)
- Running functional prototype with smart glasses integration for A-to-B navigation
- User Manual with hardware setup and navigation instructions
- Source code repository

**Process Specification:**
- IDEF0 diagrams showing RE process for Phase I and II
- NFR Framework/KAOS models
- Documentation of iterations and phase relationships

**Validation & Traceability:**
- Improved Questionnaire II
- Compact Forward Traceability Matrix (updated)
- Full Forward Traceability Matrix (updated)
- Phase I to Phase II dependency documentation

**Project Management:**
- Final Project Plan (version 2.0+)
- Requirements creeping rate validation
- Issues and resolutions documentation
- Justification for design decisions

**Presentation:**
- Final presentation slides
- Live demonstration with smart glasses hardware showing navigation from point A to point B
- Hardcopy submission in class

---

### Budget

**Phase I Budget (Actual):**
- LLM API Usage: $5.00

**Phase II Budget (Estimated):**
- Smart Glasses Hardware Components:
  - Seeed Studio XIAO ESP32S3 Sense: $30.00
  - Glasses frame/mounting: $5.00
- RE-Tools License: Free (academic use)

**Total Project Budget (Both Phases): $40.00**

---

## 6. New Requirements for Phase II

### 6.1 Hardware Integration Requirements

The system must integrate with smart glasses (Seeed Studio XIAO ESP32S3 Sense) that:
- Capture video using the onboard camera
- Transmit video frames to the smartphone via Bluetooth/WiFi
- Maintain stable connection during navigation sessions
- Provide adequate battery life for typical navigation routes
- Be comfortable and accessible for visually impaired users

### 6.2 Navigation Requirements

The system must provide A-to-B indoor navigation by:
- Accepting destination input via voice command
- Calculating optimal indoor routes
- Providing turn-by-turn audio directions
- Using landmark recognition to verify user position along route
- Warning users of upcoming turns with distance/time estimates
- Confirming when destination is reached
- Detecting and warning about obstacles on the route

### 6.3 Safety Requirements

- The system must include a mandatory disclaimer stating it is an assistive aid, not a replacement for primary mobility devices
- All navigation guidance must be suggestive rather than prescriptive
- The system must implement conservative guidance with safety margins
- User onboarding must clearly communicate limitations
- Must verify position using landmarks before critical navigation decisions

### 6.4 Technical Feasibility Requirements

- Video processing for landmark recognition must be optimized for real-time performance
- System must gracefully handle connectivity issues between glasses and phone
- Fallback mechanisms must be in place for hardware failures
- Route calculation must be efficient and fast
- Battery monitoring and low-power modes must be implemented

### 6.5 Usability Requirements

- System must be primarily operable through voice commands and audio feedback
- User interface must comply with WCAG 2.1 AA accessibility standards
- Audio directions must be clear, concise, and adjustable
- Turn-by-turn instructions must include distance and direction information
- User manual must include setup instructions for both hardware and software

### 6.6 Sensor Utilization Requirements

The system must maximize utilization of available sensors:
- **Camera** (smart glasses): Primary input for landmark recognition and position verification
- **Microphone**: Voice command processing for destination input
- **GPS/Location services**: General positioning (when available indoors)
- **Bluetooth**: Hardware communication
- **Battery sensor**: Power management and user notifications

### 6.7 HIPAA Compliance Requirements

- Include a clear disclaimer that:
  - The app does not store Protected Health Information (PHI)
  - No medical data or navigation history is collected or transmitted
  - The app is not a medical device
  - Users acknowledge risks and limitations

### 6.8 Formal Modeling Requirements

All models must be developed using RE-Tools and include:
- **Vision Document**: Stakeholder analysis, problem definition, system goals for A-to-B navigation
- **WRS Document**: Formal requirements specification for navigation system
- **UML Diagrams**: 
  - Class Diagram (navigation system architecture)
  - Use Case Diagram (navigation interactions)
  - Sequence Diagram (navigation workflow from destination input to arrival)
- **PIG**: Personal Interdependency Graph for stakeholder analysis
- **SIG**: Softgoal Interdependency Graph for NFR analysis
- **IDEF0**: Process model showing RE activities for both phases

### 6.9 Traceability Requirements

- All Phase II requirements must trace back to Phase I requirements
- Changes from Phase I must be documented with rationale
- New requirements must be justified based on feedback or discoveries
- Hardware integration changes must show impact on existing requirements

---

## 7. Success Criteria

### 7.1 Phase II Success Criteria

**Technical Success:**
- Running prototype successfully integrates smart glasses hardware
- Video transmission from glasses to phone is stable and functional
- Landmark recognition operates accurately for position verification
- Route calculation produces valid indoor paths
- Turn-by-turn audio directions are clear and timely
- Navigation successfully guides user from point A to point B
- All required sensors are utilized and functional

**Documentation Success:**
- Vision Document complete with all required sections
- WRS contains comprehensive formal models for navigation (UML, PIG, SIG)
- Process specification accurately represents RE activities using IDEF0
- User manual is clear, complete, and validated against prototype
- Traceability between Phase I and II is well-documented

**Process Success:**
- All interim deliverables submitted on time (Nov 13)
- All final deliverables submitted on time (Dec 4)
- Team collaboration effective across both sub-teams
- Weekly meetings maintain progress and alignment
- Issues are identified and resolved promptly

**User Validation Success:**
- Improved Questionnaire II provides meaningful feedback
- Prototype testing demonstrates usability for target users
- Accessibility features meet WCAG 2.1 AA standards
- User manual enables independent setup and use
- Navigation instructions are clear and helpful

### 7.2 Quality Metrics

- Code coverage: >80% for critical paths
- Hardware connection success rate: >95%
- Landmark recognition accuracy: >85% for trained landmarks
- Route calculation success rate: >90%
- Audio feedback latency: <500ms
- Navigation completion rate: >90% in test environments
- Documentation completeness: 100% of required sections
- Formal model validation: Pass review by QA lead
- Traceability coverage: 100% of requirements traced

---

## 8. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Sep 16, 2025 | Duy Pham (ldp210003) | Initial Draft |
| 1.1 | Sep 30, 2025 | Duy Pham (ldp210003) | Minor updates before Phase I submission |
| 1.2 | Oct 7, 2025 | Duy Pham (ldp210003) | Final Phase I version |
| 1.3 | Oct 7, 2025 | Duy Pham (ldp210003) | Post-Phase I minor corrections |
| 2.0 | Oct 28, 2025 | Duy Pham (ldp210003) | Major update for Phase II: Added smart glasses hardware integration, formal modeling requirements, process specification, updated timeline, new requirements (HIPAA, sensors), expanded risk management, detailed Phase II schedule and deliverables. **Clarified project scope as A-to-B indoor navigation (not object finding).** |

---

## Appendix A: Key Dates Summary

| Date | Event |
|------|-------|
| Oct 9, 2025 | Phase I Final Submission (Completed) |
| Oct 10, 2025 | Phase II Begins |
| Nov 13, 2025 | **Phase II Interim Submission Deadline** |
| Dec 2, 2025 | Final Presentations Begin |
| Dec 4, 2025 | **Phase II Final Submission Deadline** |
| Dec 4, 2025 | Final Presentations Complete |

---

## Appendix B: Contact Information

**Team Website:** https://everywhere-locator.vercel.app

**GitHub Repository:** https://github.com/phamleduy04/se4351-mobile-f25

**RE-Tools Resources:**
- Main site: http://www.utdallas.edu/~chung/Sam_Supakkul/RE-Tools/index.html
- Tutorial: https://personal.utdallas.edu/~chung/Sam_Supakkul/RE-Tools/starting-re-tools.html

---