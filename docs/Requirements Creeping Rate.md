# Project Information
**Version**: 1.0
**Team URL:** [https://everywhere-locator.vercel.app](https://everywhere-locator.vercel.app)
**Date:** Oct 7, 2025
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

| Version | Date        | Author               | Changes       |
| ------- | ----------- | -------------------- | ------------- |
| 1.0     | Oct 7, 2025 | Duy Pham (ldp210003) | Initial Draft |

## Requirements Creeping Rate

The requirements creeping rate measures the change in requirements from the initial definition to the current specification. It is calculated using the following formula:

**Creeping Rate = (Number of Added + Changed Requirements / Number of Initial Requirements) x 100%**

---

### 1. Initial Requirements

The initial requirements were derived from the project's preliminary definition document.

* **Initial Functional Requirements (FRs):** 7
* **Initial Non-Functional Requirements (NFRs):** 7
* **Total Initial Requirements:** 14

---

### 2. Added and Changed Requirements

Upon review, the team identified a significant scope-related issue and decided to de-scope the project to a more manageable Minimum Viable Product (MVP) focused on object identification rather than full A-to-B navigation. This strategic pivot resulted in substantial changes to the requirements.

* **Requirements Changed or Removed:**
    * **FRs Changed/Removed:** The original 7 FRs related to A-to-B navigation were replaced by a new, focused set of requirements. This counts as **7** major changes.
    * **NFRs Removed:** NFRs for "fastest route" and "most comfortable route" were removed as they were no longer applicable to the new scope. The "customizable" NFR was also deferred from the MVP scope. This counts as **3** removals.

* **Requirements Added:**
    * **New FRs:** The team introduced 4 new functional requirements for the object identification scope: accept voice command for an object, scan environment with camera, process feed with an LLM, and provide directional audio feedback. This counts as **4** additions.
    * **New NFRs:** New NFRs for **Performance** (near real-time feedback) and **Reliability** (dependency on internet) were added to address the technical needs of the new scope. This counts as **2** additions.

* **Total Added + Changed Requirements:** 7 (FRs Changed) + 3 (NFRs Removed) + 4 (New FRs) + 2 (New NFRs) = **16**

---

### 3. Calculation

* **Creeping Rate** = (16 / 14) x 100%
* **Creeping Rate** = **114.3%**

### 4. Analysis

A requirements creeping rate of **114.3%** indicates a complete project pivot. This high number is not a result of uncontrolled scope creep but reflects a deliberate and necessary strategic decision by the team to de-scope the initial ambitious vision into a feasible MVP. The team proactively managed risk by redefining the project's core functionality to ensure a functional and polished product could be delivered within the given timeframe.