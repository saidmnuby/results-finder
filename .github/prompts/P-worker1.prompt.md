---
name: P-worker1
description: Describe this is the features implementation prompt.
---

*FOR ANYTHING UNCLER ASK AND REVEW TO _RESULT CEO AGENT_ TOGET CLARIFICATION ON THE PROJECT DEVELOPMENT OTHERWISE CONTINUE WTHAT YOU APPROVED RIGHT IN THE PROJECT*

<!-- Tip: Use /create-prompt in chat to generate content with agent assistance -->

# FEATURE IMPLEMENTATION PROMPT

## Feature

[FEATURE NAME]

## Objective

[ONE CLEAR SENTENCE DESCRIBING WHAT THE FEATURE MUST DO]

## Existing Architecture

[DESCRIBE THE RELEVANT EXISTING COMPONENTS]

## Requirements

1. [Requirement]
2. [Requirement]
3. [Requirement]

## Inputs

[List inputs]

## Expected Output

[Describe expected output]

## Constraints

- Follow the approved NECTA Results Finder architecture.
- Do not modify unrelated components.
- Do not introduce arbitrary URL scraping.
- Do not bypass external security mechanisms.
- Do not introduce permanent candidate-result storage.
- Validate all input.
- Fail safely when information cannot be validated.

## Security Requirements

[List feature-specific security requirements]

## Testing Requirements

Create tests for:

- valid input;
- invalid input;
- missing input;
- expected success;
- expected failure;
- security abuse cases.

## Deliverables

Provide:

1. Implementation.
2. Files changed.
3. Database changes, if any.
4. Tests.
5. Security considerations.
6. Any assumptions or unresolved issues.

Do not implement functionality outside this feature.