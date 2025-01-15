# Observations

## General Observations

- For basic TDD in a single file, you can get by with very simple test tooling
  - We have shown that if your languange supports equality comparison and print
    statements, you can write a minimalist test "framework"
- It is often easier to refactor tests while they are failing (or partially
  failing) so you can get more detailed feedback

## What do we look for in a test runner?

### Writing Tests

1. ✅ A way to compare actual and expected
2. ✅ (sometimes) parameterized testing to run many similar tests
3. ✅ Clear test names
4. ✅ Familiar structure

### Running Tests

1. ✅ Print test results (with failure details)
2. ✅ Clear test names
3. ✅ A pass/fail summary at the end
4. ✅ Pretty output (colors, etc.)
