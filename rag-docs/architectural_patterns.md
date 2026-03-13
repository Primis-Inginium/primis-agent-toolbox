# 🏗 Primis-Inginium Architectural Patterns

This guide is optimized for AI agents to understand how to build and expand Primis-Inginium projects.

## 1. Modular Core-Feature Pattern
- **Core (`@core/*`)**: Low-level pieces. UI components, state machines, API wrappers.
- **Features (`@features/*`)**: High-level domain logic. 
- **Rule**: Feature A cannot see Feature B. This prevents "Spaghetti Architecture".

## 2. Directory Structure
```
src/
  core/
    ui/         # Buttons, Inputs, Cards
    api/        # Fetch wrappers
    state/      # Shared global state
  features/
    auth/       # Login, Register
    profile/    # User settings
```

## 3. Communication
- Features communicate via **Global State** or **Props**, never direct imports.

## 4. Documentation
- Always update `README.md` at both the project root and the feature root.
