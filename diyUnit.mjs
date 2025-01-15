global.describe = (describeName, describeBody) => {

  global.it = (testName, testBody) => {
    testBody();
  }
  describeBody();
}
