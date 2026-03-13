# 🔍 Primis-Inginium Discovery Standard

This standard defines how AI agents should interpret raw client transcripts (from Gemini/Google Move) and translate them into architectural requirements.

## 1. Input Processing
- **Source**: Gemini transcription of client calls (Mongolian or English).
- **Format**: Raw text or summarized notes in `docs/discovery/`.

## 2. Extraction Protocol
Agents must extract the following three categories for every project:

### A. User Stories (Functional)
- **Format**: "As a [user type], I want to [action] so that [benefit]."
- **Mapping**: Each story must be mapped to a specific feature in `src/features/`.

### B. Functional Requirements
- Specific technical capabilities (e.g., "The app must support offline data sync via SQLite").

### C. Non-Functional Requirements (NFRs)
- Performance, security, and scalability constraints (e.g., "All API calls must complete within 200ms").

## 3. Modular Architectural Mapping
- **New Feature**: If a user story doesn't fit into an existing feature, the agent should propose a new directory in `src/features/`.
- **Core Update**: If a requirement impacts multiple features, it must be promoted to `@core`.

## 4. Verification Check
Before generating tasks, agents must verify:
- [ ] Requirements are "AI-Ready" (no ambiguity).
- [ ] No circular dependencies are introduced.
- [ ] Security boundaries (AlphaClaw/IronClaw) are defined for high-risk stories.
