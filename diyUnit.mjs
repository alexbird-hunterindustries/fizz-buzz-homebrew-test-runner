global.describe = (describeName, describeBody) => {

  global.it = (testName, testBody) => {

    global.expect = (actual) => {
      return {
        toEqual: (expected) => {
        }
      }
    }

    testBody();
  }
  describeBody();
}
