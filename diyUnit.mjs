global.describe = (describeName, describeBody) => {

  global.it = (testName, testBody) => {

    global.expect = (actual) => {
    }

    testBody();
  }
  describeBody();
}
