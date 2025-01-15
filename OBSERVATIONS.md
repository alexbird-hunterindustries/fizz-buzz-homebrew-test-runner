# Observations

## General Observations

- For basic TDD in a single file, you can get by with very simple test tooling
  - We have shown that if your languange supports equality comparison and print
    statements, you can write a minimalist test "framework"
- It is often easier to refactor tests while they are failing (or partially
  failing) so you can get more detailed feedback

## What do we look for in a test runner?

1. ✅ A way to compare actual and expected, and print the results
2. ✅ (sometimes, depending on what we're testing) parameterized testing to run
   many similar tests
3. ✅ Clear test names (in code and in the output)
4. ✅ A pass/fail summary at the end
5. ✅ Familiar structure
