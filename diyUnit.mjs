global.describe = (describeName, describeBody) => {

  global.it = (testName, testBody) => {

    global.expect = (actual) => {
      return {
        toEqual: (expected) => {
          console.log({ result: actual === expected ? '✅ PASS' : '❌ FAIL', actual, expected });
        }
      }
    }

    testBody();
  }
  describeBody();
}
