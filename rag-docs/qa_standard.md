# 🧪 Primis-Inginium QA & Testing Standard

To maintain our high architectural standards, all AI-generated code must be verified with automated tests.

## 1. Requirement: E2E First
- Every new **Feature** must include at least one Playwright E2E test in `tests/`.
- Tests must verify the primary "Happy Path" defined in the User Story.

## 2. Test Structure
- Place tests in the `tests/` directory.
- Use descriptive test names: `test('user can log in', ...)`
- **Mandate**: Use `data-testid` attributes for selecting elements to ensure resilient tests.

## 3. Modular Testing
- **Feature Tests**: Should only test the functionality within a specific feature directory.
- **Core Tests**: Verify that shared primitives (e.g., `GradientButton`) behave correctly across different themes.

## 4. CI/CD Integration
- PRs will not be merged unless the `qa-automation` workflow passes.
- Agents must run `npx playwright test` locally before submitting a PR.

## 5. Visual Quality
- Use Playwright's `toHaveScreenshot` for verifying premium UI components (Glassmorphism, Gradients).

---
*Quality is not an act, it is a habit.*
