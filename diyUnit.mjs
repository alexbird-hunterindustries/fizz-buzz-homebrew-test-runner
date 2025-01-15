const testResults = {};

global.describe = (describeName, describeBody) => {

  global.it = (testName, testBody) => {

    const fullName = `${describeName} > ${testName}`;
    testResults[fullName] = undefined;

    global.expect = (actual) => {
      return {
        toEqual: (expected) => {
          const pass = actual === expected;
          testResults[fullName] = pass;
        }
      }
    }

    testBody();
  }
  describeBody();
  printResults();
}

function printResults() {
  console.log(testResults);
}
