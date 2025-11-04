# Vision Document - Everywhere Locator

**Version:** 2.0  
**Date:** November 4, 2025  
**Project:** Everywhere Locator - A-to-B Indoor Navigation for Visually Impaired Users  
**Team URL:** https://everywhere-locator.vercel.app

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Problem Statement](#problem-statement)
3. [Vision Statement](#vision-statement)
4. [Scope Definition](#scope-definition)
5. [Stakeholder Analysis](#stakeholder-analysis)
6. [Goals & Objectives](#goals--objectives)
7. [Success Criteria](#success-criteria)
8. [Key Features](#key-features)
9. [Constraints & Assumptions](#constraints--assumptions)
10. [Context & Environment](#context--environment)
11. [Revision History](#revision-history)

---

## Executive Summary

Everywhere Locator is a mobile application designed to empower visually impaired individuals with **independent indoor navigation** from Point A to Point B. 

**Phase II Innovation:** Integration of smart glasses hardware (Seeed Studio XIAO ESP32S3 Sense) that captures video footage and transmits it to the smartphone for real-time processing. This enables accurate landmark recognition, position verification, and reliable turn-by-turn audio directions.

**Target Users:** Visually impaired individuals navigating complex indoor environments (office buildings, universities, hospitals, transit hubs).

**Key Differentiator:** Voice-first interface combined with smart glasses vision for safe, accurate, independent navigation.

---

## Problem Statement

### Current Situation

Visually impaired individuals face significant challenges when navigating unfamiliar indoor environments:

```mermaid
graph TB
    subgraph "Challenges Faced by Visually Impaired Users"
        C1["Cannot locate Point B<br/>from Point A independently"]
        C2["Risk of getting lost<br/>or disoriented"]
        C3["Limited confidence in<br/>new environments"]
        C4["Depend on human guides<br/>or mobility devices only"]
        C5["Cannot verify position<br/>at decision points"]
        C6["No real-time obstacle<br/>awareness while navigating"]
    end
    
    subgraph "Current Solutions"
        S1["White cane<br/>obstacle avoidance only"]
        S2["Guide dog<br/>obstacle avoidance only"]
        S3["Human guide<br/>assistance dependent"]
        S4["GPS/Maps<br/>unreliable indoors"]
    end
    
    subgraph "Limitations"
        L1["Limited to outdoor use<br/>or pre-planned routes"]
        L2["No real-time landmark<br/>recognition"]
        L3["Cannot calculate routes<br/>autonomously"]
        L4["Cannot provide turn-by-turn<br/>guidance"]
        L5["No position verification"]
    end
    
    C1 --> L1
    C2 --> L2
    C3 --> L3
    C4 --> L4
    C5 --> L5
    C6 --> L2
    
    S1 -.limitations.-> L1
    S2 -.limitations.-> L2
    S3 -.limitations.-> L3
    S4 -.limitations.-> L4
    
    style C1 fill:#FFCDD2
    style C4 fill:#FFCDD2
    style S1 fill:#E8F5E9
    style L1 fill:#FFF9C4
```

### Root Causes

| Challenge | Root Cause | Impact |
|-----------|-----------|--------|
| **Loss of independence** | Requires human assistance for navigation | Reduced autonomy and dignity |
| **Navigation errors** | No real-time position verification | Safety risks |
| **Time consumption** | Manual route planning required | Inefficiency |
| **Lack of confidence** | Uncertainty about location | Hesitation to explore |
| **Limited accessibility** | Existing solutions focus only on obstacles | Incomplete assistance |

### Scope of Problem

- **Who:** Visually impaired individuals (blind or severely low-vision)
- **Where:** Complex indoor environments (multi-floor buildings, campuses, hospitals, transit hubs)
- **When:** During daily navigation tasks (work, education, healthcare, shopping)
- **Why:** Need to reach specific destinations independently
- **What's Missing:** Real-time A-to-B navigation guidance with landmark verification

---

## Vision Statement

```
To empower visually impaired individuals with the independence, 
confidence, and capability to navigate complex indoor environments 
autonomously, from any Point A to any Point B, using intelligent 
mobile technology that combines voice commands, real-time landmark 
recognition, and turn-by-turn audio guidance.
```

### Vision Elaboration

```mermaid
graph TB
    VISION["Vision:<br/>Independent Indoor Navigation<br/>for Visually Impaired Users"]
    
    PILLAR1["Voice-First Interface<br/>Completely hands-free<br/>navigation control"]
    PILLAR2["Smart Glasses Vision<br/>Real-time landmark<br/>recognition and verification"]
    PILLAR3["Turn-by-Turn Guidance<br/>Clear audio directions<br/>with distance/time info"]
    PILLAR4["Safety First<br/>Obstacle detection<br/>Conservative guidance"]
    PILLAR5["Full Accessibility<br/>WCAG 2.1 AA compliant<br/>requires no training"]
    
    VISION --> PILLAR1
    VISION --> PILLAR2
    VISION --> PILLAR3
    VISION --> PILLAR4
    VISION --> PILLAR5
    
    OUTCOME1["User reaches destination<br/>safely and independently"]
    OUTCOME2["User feels confident<br/>navigating alone"]
    OUTCOME3["User saves time<br/>compared to manual navigation"]
    OUTCOME4["User maintains dignity<br/>and personal autonomy"]
    OUTCOME5["User can explore new<br/>environments without fear"]
    
    PILLAR1 --> OUTCOME1
    PILLAR2 --> OUTCOME2
    PILLAR3 --> OUTCOME3
    PILLAR4 --> OUTCOME1
    PILLAR5 --> OUTCOME4
    
    PILLAR1 --> OUTCOME5
    PILLAR2 --> OUTCOME5
    
    style VISION fill:#4A90E2,stroke:#333,stroke-width:4px,color:#fff
    style PILLAR1 fill:#81C784
    style PILLAR2 fill:#FFB74D
    style PILLAR3 fill:#64B5F6
    style PILLAR4 fill:#E57373
    style PILLAR5 fill:#BA68C8
    style OUTCOME1 fill:#C8E6C9
    style OUTCOME2 fill:#C8E6C9
    style OUTCOME4 fill:#C8E6C9
```

---

## Scope Definition

### In Scope - Phase II MVP

```mermaid
graph TB
    subgraph "Phase II Scope"
        
        subgraph "Core Navigation Features"
            F1["A-to-B Indoor Navigation<br/>Point A to Point B routing"]
            F2["Voice Command Input<br/>Destination via natural language"]
            F3["Turn-by-Turn Audio Guidance<br/>Real-time turn-by-turn directions"]
            F4["Landmark Recognition<br/>Visual identification via smart glasses"]
            F5["Position Verification<br/>Confirm location at key points"]
        end
        
        subgraph "Hardware Integration"
            H1["Smart Glasses Camera<br/>Seeed Studio XIAO ESP32S3"]
            H2["Video Transmission<br/>Bluetooth to smartphone"]
            H3["Battery Monitoring<br/>Power management and alerts"]
            H4["Connection Management<br/>Auto-reconnect capability"]
        end
        
        subgraph "Safety and Accessibility"
            S1["Obstacle Detection<br/>Vision-based warnings"]
            S2["Safety Disclaimers<br/>Assistive aid positioning"]
            S3["WCAG 2.1 AA Compliance<br/>Accessibility standards"]
            S4["Audio Feedback System<br/>Clear turn instructions"]
            S5["HIPAA Disclaimer<br/>Privacy and data handling"]
        end
        
        subgraph "Supporting Features"
            SUP1["User Preferences<br/>Audio speed, volume settings"]
            SUP2["Connection Status<br/>User awareness of hardware state"]
            SUP3["Route Overview<br/>Trip summary before navigation"]
            SUP4["Arrival Confirmation<br/>Destination reached notification"]
        end
    end
    
    style F1 fill:#C8E6C9
    style F2 fill:#C8E6C9
    style F3 fill:#C8E6C9
    style H1 fill:#FFE0B2
    style H2 fill:#FFE0B2
    style S1 fill:#FFCDD2
    style S3 fill:#FFCDD2
```

### Out of Scope - Future Versions

```mermaid
graph LR
    FUTURE["Future Enhancements<br/>Post-MVP"]
    
    F1["Outdoor GPS Navigation"]
    F2["Multi-Building Campus Routes"]
    F3["Elevator/Door Automation"]
    F4["Fall Detection and Emergency"]
    F5["Social Sharing Features"]
    F6["Multi-Language Support"]
    F7["Habit-Based Suggestions"]
    F8["Caregiver Monitoring"]
    
    FUTURE --> F1
    FUTURE --> F2
    FUTURE --> F3
    FUTURE --> F4
    FUTURE --> F5
    FUTURE --> F6
    FUTURE --> F7
    FUTURE --> F8
    
    style FUTURE fill:#FFF9C4,stroke:#333,stroke-width:2px
    style F1 fill:#FFCDD2
    style F4 fill:#FFCDD2
    style F6 fill:#FFCDD2
```

### Deferred to Phase II.1 or Later

- Advanced machine learning for route optimization
- Integration with building management systems
- Social features (group navigation, community maps)
- Offline operation without internet connectivity
- Multiple map provider support

---

## Stakeholder Analysis

### Stakeholder Map

```mermaid
graph TB
    subgraph "Primary Stakeholders - Direct Users"
        PS1["Visually Impaired Users<br/>Core beneficiaries"]
        PS2["Caregivers/Family<br/>Configuration and support"]
    end
    
    subgraph "Secondary Stakeholders"
        SS1["Accessibility Organizations<br/>Advocacy and requirements"]
        SS2["Educational Institutions<br/>Deployment and facilities"]
        SS3["Healthcare Facilities<br/>Accessibility mandates"]
        SS4["Smartphone Users<br/>Potential ecosystem"]
    end
    
    subgraph "Development Stakeholders"
        DS1["Development Team<br/>10 engineers"]
        DS2["Course Instructor<br/>Academic guidance"]
        DS3["Academic Institution<br/>Project oversight"]
    end
    
    subgraph "Technical Stakeholders"
        TS1["Google Gemini API<br/>Landmark recognition"]
        TS2["Seeed Studio<br/>Hardware provider"]
        TS3["Map Data Provider<br/>Indoor routing data"]
    end
    
    subgraph "Regulatory Stakeholders"
        RS1["HIPAA Authorities<br/>Privacy compliance"]
        RS2["WCAG/Section 508<br/>Accessibility standards"]
    end
    
    style PS1 fill:#E57373,stroke:#333,stroke-width:3px
    style PS2 fill:#E57373,stroke:#333,stroke-width:2px
    style SS1 fill:#81C784
    style DS1 fill:#64B5F6
    style TS1 fill:#FFB74D
    style RS1 fill:#BA68C8
```

### For/Of/By Analysis

```mermaid
graph TB
    subgraph "Stakeholder Roles"
        
        FOR["FOR - Beneficiaries"]
        FOR_DESC["Visually impaired individuals<br/>who need assistance navigating<br/>complex indoor environments<br/>from Point A to Point B"]
        
        OF["OF - Subject/Domain"]
        OF_DESC["The application domain:<br/>Indoor spaces - buildings, offices,<br/>hospitals, universities<br/>Indoor navigation challenges"]
        
        BY["BY - Clients/Developers"]
        BY_DESC["Development team - Team 1<br/>Course instructional staff<br/>Academic institution<br/>External: Hardware/API providers"]
        
        FOR --> FOR_DESC
        OF --> OF_DESC
        BY --> BY_DESC
    end
    
    FOR_DESC --> SYSTEM["Everywhere Locator<br/>System"]
    OF_DESC --> SYSTEM
    BY_DESC --> SYSTEM
    
    style SYSTEM fill:#4A90E2,stroke:#333,stroke-width:4px,color:#fff
    style FOR fill:#E57373
    style OF fill:#81C784
    style BY fill:#64B5F6
```

---

## Goals & Objectives

### Strategic Goals - Phase II

```mermaid
graph TB
    VISION["Vision: Independent<br/>Indoor A-to-B Navigation"]
    
    G1["Strategic Goal 1:<br/>Safe Navigation"]
    G2["Strategic Goal 2:<br/>Accessible Interface"]
    G3["Strategic Goal 3:<br/>Reliable Performance"]
    G4["Strategic Goal 4:<br/>User Confidence"]
    
    VISION --> G1
    VISION --> G2
    VISION --> G3
    VISION --> G4
    
    %% Goal 1 Breakdown
    G1_1["Accurate turn-by-turn<br/>directions"]
    G1_2["Obstacle detection<br/>and warnings"]
    G1_3["Position verification<br/>at decision points"]
    G1_4["Conservative guidance<br/>with safety margins"]
    
    G1 --> G1_1
    G1 --> G1_2
    G1 --> G1_3
    G1 --> G1_4
    
    %% Goal 2 Breakdown
    G2_1["Voice-first interface<br/>no visual dependency"]
    G2_2["Clear audio feedback<br/>easy to understand"]
    G2_3["WCAG 2.1 AA compliance<br/>accessibility standards"]
    G2_4["Minimal training required<br/>intuitive use"]
    
    G2 --> G2_1
    G2 --> G2_2
    G2 --> G2_3
    G2 --> G2_4
    
    %% Goal 3 Breakdown
    G3_1["Real-time location<br/>tracking accuracy"]
    G3_2["Stable connectivity<br/>greater than 95 percent"]
    G3_3["Low latency audio<br/>less than 500ms"]
    G3_4["Efficient battery usage<br/>2 plus hours per session"]
    
    G3 --> G3_1
    G3 --> G3_2
    G3 --> G3_3
    G3 --> G3_4
    
    %% Goal 4 Breakdown
    G4_1["User feels safe<br/>and secure"]
    G4_2["User feels empowered<br/>to navigate independently"]
    G4_3["User wants to use<br/>the system again"]
    G4_4["User trusts the system<br/>for future navigation"]
    
    G4 --> G4_1
    G4 --> G4_2
    G4 --> G4_3
    G4 --> G4_4
    
    style VISION fill:#4A90E2,stroke:#333,stroke-width:4px,color:#fff
    style G1 fill:#E57373,stroke:#333,stroke-width:2px
    style G2 fill:#81C784,stroke:#333,stroke-width:2px
    style G3 fill:#FFB74D,stroke:#333,stroke-width:2px
    style G4 fill:#64B5F6,stroke:#333,stroke-width:2px
```

### Measurable Objectives

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

---

## Success Criteria

### Phase II Completion Criteria

```mermaid
graph TB
    subgraph "Functional Success"
        F1["Prototype navigates user<br/>from Point A to Point B"]
        F2["Voice command accepts<br/>any building location"]
        F3["Turn-by-turn guidance<br/>is clear and actionable"]
        F4["Landmarks recognized<br/>accurately from video"]
        F5["Obstacles detected<br/>and communicated"]
        F6["Smart glasses connected<br/>reliably to phone"]
    end
    
    subgraph "Technical Success"
        T1["Navigation accuracy greater than 90 percent<br/>reach correct destination"]
        T2["Landmark recognition greater than 85 percent<br/>identify landmarks correctly"]
        T3["Connection stability greater than 95 percent<br/>maintain Bluetooth link"]
        T4["Audio latency less than 500ms<br/>timely direction delivery"]
        T5["Battery life 2 plus hours<br/>complete typical route"]
    end
    
    subgraph "Documentation Success"
        D1["Vision Document complete<br/>using RE-Tools"]
        D2["WRS with formal models<br/>UML, PIG, SIG diagrams"]
        D3["Process Specification<br/>IDEF0 documented"]
        D4["User Manual provided<br/>clear setup and instructions"]
        D5["Traceability matrix<br/>Phase I to Phase II"]
    end
    
    subgraph "User Validation Success"
        U1["Questionnaire II shows<br/>positive feedback greater than 4.0/5.0"]
        U2["Users rate system<br/>easy to use"]
        U3["Users feel safe<br/>during navigation"]
        U4["Users want to use<br/>system again"]
    end
    
    subgraph "Safety and Compliance"
        S1["No user incidents<br/>during testing"]
        S2["Safety disclaimer<br/>clearly displayed"]
        S3["WCAG 2.1 AA compliant<br/>accessibility verified"]
        S4["HIPAA statement<br/>privacy addressed"]
    end
    
    ROOT[["Phase II Success"]]
    
    F1 --> ROOT
    F3 --> ROOT
    T1 --> ROOT
    T3 --> ROOT
    D1 --> ROOT
    D5 --> ROOT
    U2 --> ROOT
    S1 --> ROOT
    S3 --> ROOT
    
    style ROOT fill:#4CAF50,stroke:#333,stroke-width:4px,color:#fff
    style F1 fill:#C8E6C9
    style T1 fill:#BBDEFB
    style D1 fill:#F8BBD0
    style U2 fill:#E1BEE7
    style S1 fill:#C8E6C9
```

---

## Key Features

### Feature Overview

```mermaid
graph TB
    subgraph "Everywhere Locator Features"
        
        subgraph "User-Facing Features"
            UF1["Voice Destination Input<br/>Natural language destination entry"]
            UF2["Audio Turn-by-Turn Guidance<br/>Clear, concise turn instructions<br/>with distance and time info"]
            UF3["Landmark Verification<br/>Confirms position at key points<br/>using visual landmarks"]
            UF4["Obstacle Warnings<br/>Real-time detection of barriers<br/>in navigation path"]
            UF5["Settings Control<br/>Adjust volume, speech speed<br/>user preferences"]
            UF6["Connection Status<br/>Visual indicator of glasses<br/>connection state"]
        end
        
        subgraph "Technical Features"
            TF1["Bluetooth Integration<br/>Smart glasses to phone<br/>video transmission"]
            TF2["LLM Landmark Recognition<br/>Google Gemini API for<br/>object/landmark identification"]
            TF3["Indoor Route Calculation<br/>Optimal path from A to B<br/>using building maps"]
            TF4["Video Frame Processing<br/>Real-time camera feed analysis<br/>from smart glasses"]
            TF5["Battery Management<br/>Monitor and optimize<br/>power consumption"]
        end
        
        subgraph "Non-Functional Features"
            NF1["Safety Disclaimer<br/>Clear positioning as<br/>assistive aid"]
            NF2["Accessibility Compliance<br/>WCAG 2.1 AA standards<br/>voice-first design"]
            NF3["HIPAA Statement<br/>No PHI collected or stored<br/>privacy assurance"]
            NF4["User Manual<br/>Hardware setup instructions<br/>navigation guide"]
        end
    end
    
    style UF1 fill:#81C784
    style UF2 fill:#81C784
    style UF3 fill:#81C784
    style TF1 fill:#64B5F6
    style TF2 fill:#64B5F6
    style NF1 fill:#FFB74D
    style NF3 fill:#FFB74D
```

### Use Case Overview

```mermaid
graph TB
    USER[["Visually Impaired User"]]
    CG[["Caregiver"]]
    
    subgraph "Primary Use Cases"
        UC1["Navigate to Destination<br/>User specifies point B,<br/>system guides to arrival"]
        UC2["Listen to Route Summary<br/>Confirm planned route<br/>before starting"]
        UC3["Verify Current Position<br/>System confirms location<br/>using landmarks"]
        UC4["Receive Obstacle Warning<br/>Alerted to barriers<br/>on the route"]
    end
    
    subgraph "Support Use Cases"
        UC5["Configure Settings<br/>Adjust audio preferences"]
        UC6["Connect Smart Glasses<br/>Pair device on first use"]
        UC7["Check Connection Status<br/>Verify hardware ready"]
    end
    
    subgraph "Caregiver Use Cases"
        UC8["Configure for User<br/>Set up app settings"]
        UC9["Monitor Battery<br/>Check glasses battery level"]
    end
    
    USER --> UC1
    USER --> UC2
    USER --> UC3
    USER --> UC4
    USER --> UC5
    USER --> UC6
    USER --> UC7
    
    CG --> UC8
    CG --> UC9
    
    style UC1 fill:#C8E6C9,stroke:#333,stroke-width:2px
    style UC2 fill:#C8E6C9
    style USER fill:#E57373,stroke:#333,stroke-width:3px
    style CG fill:#64B5F6,stroke:#333,stroke-width:2px
```

---

## Constraints & Assumptions

### Constraints

```mermaid
graph TB
    subgraph "Technical Constraints"
        TC1["Timeline: 6 weeks<br/>Oct 10 - Dec 4, 2025"]
        TC2["Budget: 75 dollars total<br/>hardware and services"]
        TC3["Team: 10 engineers<br/>fixed resource allocation"]
        TC4["Platform: React Native<br/>iOS and Android only"]
        TC5["Internet: Required<br/>for LLM API calls"]
    end
    
    subgraph "Legal/Compliance Constraints"
        LC1["HIPAA: No PHI storage<br/>privacy compliance"]
        LC2["WCAG 2.1 AA<br/>accessibility mandatory"]
        LC3["Disclaimer Required<br/>assistive aid positioning"]
    end
    
    subgraph "Hardware Constraints"
        HC1["Battery Life: 2-4 hours<br/>typical session duration"]
        HC2["Bluetooth Range: ~10 meters<br/>phone proximity required"]
        HC3["Camera Resolution: OV2640<br/>3MP sensor on glasses"]
        HC4["Charging: USB-C<br/>standard connector"]
    end
    
    subgraph "Environmental Constraints"
        EC1["Indoor Only<br/>GPS unreliable indoors"]
        EC2["Lighting: Variable<br/>from dim to bright"]
        EC3["Building Variety<br/>different layouts and maps"]
    end
    
    style TC1 fill:#FFCDD2
    style TC3 fill:#FFCDD2
    style LC1 fill:#F8BBD0
    style HC1 fill:#FFE0B2
    style EC2 fill:#FFF9C4
```

### Assumptions

```mermaid
graph TB
    subgraph "User Assumptions"
        UA1["Users have smartphones<br/>iOS or Android"]
        UA2["Users can speak clearly<br/>for voice commands"]
        UA3["Users wear smart glasses<br/>comfortably during use"]
        UA4["Users accept technology<br/>as navigation aid"]
    end
    
    subgraph "Technical Assumptions"
        TA1["Stable internet available<br/>for LLM API calls"]
        TA2["Bluetooth connectivity<br/>functional on phones"]
        TA3["Indoor maps provided<br/>for target buildings"]
        TA4["LLM API available<br/>99 percent uptime"]
    end
    
    subgraph "Environmental Assumptions"
        EA1["Indoor environments have<br/>identifiable landmarks"]
        EA2["Buildings have adequate<br/>lighting for video"]
        EA3["Building maps accurately<br/>represent layout"]
    end
    
    subgraph "Project Assumptions"
        PA1["Team completes on schedule<br/>no major delays"]
        PA2["Hardware arrives on time<br/>no supply chain issues"]
        PA3["Requirements stable<br/>minimal scope changes"]
    end
    
    style UA1 fill:#E1F5FE
    style TA1 fill:#E0F2F1
    style EA1 fill:#F1F8E9
    style PA1 fill:#FCE4EC
```

---

## Context & Environment

### System Context

```mermaid
graph TB
    subgraph "External World"
        USER[["Visually Impaired User<br/>Wearing Smart Glasses"]]
        ENV["Indoor Environment<br/>Buildings, Offices, Hallways"]
        BUILDINGS["Target Buildings<br/>Offices, Universities, Hospitals"]
    end
    
    subgraph "Everywhere Locator System"
        APP["Mobile App<br/>React Native"]
        GLASSES["Smart Glasses<br/>ESP32S3 Sense"]
        APP <--> GLASSES
    end
    
    subgraph "External Services and Data"
        API["Google Gemini API<br/>Landmark Recognition"]
        MAPDATA["Indoor Map Data<br/>Building Layouts"]
        SPEECH["Voice Services<br/>Speech Recognition and<br/>Text-to-Speech"]
        BT["Bluetooth Protocol<br/>Wireless Communication"]
    end
    
    USER -->|wears| GLASSES
    USER -->|commands| APP
    USER -->|navigates| ENV
    APP -->|audio feedback| USER
    
    GLASSES -->|video stream| APP
    APP -->|HTTPS API| API
    APP -->|route queries| MAPDATA
    APP -->|TTS/STT| SPEECH
    GLASSES <-->|wireless| BT
    APP <-->|wireless| BT
    
    style USER fill:#E57373,stroke:#333,stroke-width:3px
    style APP fill:#4A90E2,stroke:#333,stroke-width:3px
    style GLASSES fill:#FFE0B2,stroke:#333,stroke-width:3px
    style API fill:#C5E1A5
    style MAPDATA fill:#C5E1A5
```

### Environmental Constraints

| Factor | Current State | Impact | Mitigation |
|--------|--------------|--------|-----------|
| **Indoor Lighting** | Highly variable (dim to bright) | Video quality impacts landmark recognition | Implement adaptive exposure and contrast enhancement |
| **Building Layouts** | Diverse and complex | Different route complexities | Use building-specific maps; test in multiple buildings |
| **Internet Connectivity** | Varies by location | LLM API calls may fail | Implement offline fallback; retry logic |
| **User Mobility** | Varies (walking speeds, abilities) | Navigation pace must adapt | Allow adjustable audio speed; distance estimates |
| **Noise Levels** | Variable indoors | Voice recognition challenges | Test in noisy environments; implement noise filtering |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Oct 9, 2025 | Duy Pham (ldp210003) | Initial vision from Phase I |
| 2.0 | Nov 4, 2025 | Duy Pham (ldp210003) | Phase II: Added smart glasses hardware context, formal structure for RE-Tools, detailed stakeholder analysis, comprehensive goals and objectives, success criteria, key features overview. **Clarified: A-to-B navigation maintained from Phase I; only hardware input changed.** |

---

## Appendix A: Vision-Goals Alignment Matrix

```mermaid
graph TB
    VISION["Vision: Independent<br/>A-to-B Navigation"]
    
    G1["Goal: Safe Navigation"]
    G2["Goal: Accessible Interface"]
    G3["Goal: Reliable Performance"]
    
    VISION --> G1
    VISION --> G2
    VISION --> G3
    
    G1 --> FR1["FR: Turn-by-Turn Guidance"]
    G1 --> FR2["FR: Landmark Recognition"]
    G1 --> FR3["FR: Obstacle Detection"]
    
    G2 --> FR4["FR: Voice Command Input"]
    G2 --> FR5["FR: Audio Feedback"]
    G2 --> NFR1["NFR: WCAG 2.1 AA"]
    
    G3 --> FR6["FR: Route Calculation"]
    G3 --> NFR2["NFR: Reliability greater than 95 percent"]
    G3 --> NFR3["NFR: Latency less than 500ms"]
    
    style VISION fill:#4A90E2,stroke:#333,stroke-width:4px,color:#fff
    style G1 fill:#E57373
    style G2 fill:#81C784
    style G3 fill:#FFB74D
    style FR1 fill:#C8E6C9
    style NFR1 fill:#FFCCBC
```

---

## Appendix B: Stakeholder Needs Summary

### Visually Impaired Users

- **Need:** Navigate independently from Point A to Point B without human assistance
- **Value:** Independence, dignity, confidence
- **Pain Points:** Getting lost, safety concerns, dependency on guides
- **Success:** Reach destination safely using only audio guidance

### Caregivers

- **Need:** Configure system for user; monitor safety
- **Value:** Peace of mind; reduced burden
- **Pain Points:** User frustration; constant assistance needed
- **Success:** User navigates independently with system support

### Accessibility Organizations

- **Need:** Compliance with accessibility standards
- **Value:** Advocacy for disabled population; inclusive technology
- **Pain Points:** Limited accessible solutions; high cost of existing aids
- **Success:** Accessible solution that works; advocacy potential

### Educational Institutions

- **Need:** Enable visually impaired students to navigate campus
- **Value:** Inclusion; compliance with accessibility laws
- **Pain Points:** Accommodations cost; limited solutions
- **Success:** Students navigate campus independently

### Development Team

- **Need:** Deliver functional system on time within budget
- **Value:** Project success; technical learning; professional growth
- **Pain Points:** Aggressive timeline; complex requirements; hardware integration
- **Success:** Complete, working prototype with all deliverables

---

## Appendix C: Success Story - User Journey

```
Morning: Sarah - Visually Impaired User

"Good morning, Everywhere Locator. Take me to Meeting Room 301."

System: "Route calculated. 5 turns, 220 feet, about 3 minutes."

Sarah starts walking, wearing her smart glasses connected to her phone.

System: "Walk straight ahead for 50 feet. Conference room doors on your right."

Sarah confidently walks down the hallway.

System: "Approaching first turn. In 20 feet, turn right at the water fountain."

Sarah approaches the intersection.

System: "Turn right now. You should see the elevator lobby ahead."

Landmark Recognition: System confirms "Elevator lobby" via smart glasses vision.

Sarah turns right and approaches the elevators.

System: "Elevator ahead, 10 feet. Press up button to reach floor 3."

Sarah takes the elevator to floor 3.

System: "You have arrived at Meeting Room 301. Have a great meeting!"

OUTCOME: Sarah arrived at her destination independently, safely, and on time.
Without Everywhere Locator, Sarah would have needed human assistance or would have 
been too anxious to attend the meeting alone.

VALUE DELIVERED: Independence. Dignity. Confidence.
```

---

## Appendix D: Phase II Innovation - Smart Glasses Integration

### Why Smart Glasses?

```mermaid
graph LR
    PHASE1["Phase I<br/>Phone Camera"]
    UPGRADE["Phase II<br/>Smart Glasses"]
    BENEFITS["Benefits"]
    
    PHASE1 -->|limited angle| UPGRADE
    PHASE1 -->|user must aim| UPGRADE
    PHASE1 -->|hand-holding issues| UPGRADE
    
    UPGRADE --> B1["Hands-free video capture"]
    UPGRADE --> B2["User's natural view angle"]
    UPGRADE --> B3["Stable connection to phone"]
    UPGRADE --> B4["Dedicated hardware"]
    UPGRADE --> B5["Better landmark recognition"]
    
    B1 --> RESULT["More Accurate<br/>Navigation"]
    B2 --> RESULT
    B3 --> RESULT
    B4 --> RESULT
    B5 --> RESULT
    
    RESULT --> OUTCOME["User Safety<br/>and Confidence"]
    
    style PHASE1 fill:#FFCDD2
    style UPGRADE fill:#FFE0B2,stroke:#333,stroke-width:2px
    style B1 fill:#C8E6C9
    style B5 fill:#C8E6C9
    style OUTCOME fill:#4CAF50,color:#fff
```

### Technical Innovation

| Aspect | Phase I | Phase II | Improvement |
|--------|---------|----------|------------|
| **Video Source** | Smartphone camera (variable angle) | Smart glasses camera (consistent view) | Consistent perspective for landmark recognition |
| **Hands** | User must hold phone | Hands free while walking | Improved safety and navigation confidence |
| **Field of View** | User adjusts angle | Natural eye-level view | Better environmental awareness |
| **Stability** | Held in hand (prone to drops) | Worn on glasses frame | Secure, stable attachment |
| **Processing Power** | Phone processes alone | Phone plus offload to glasses | Better performance and battery life |
