global.describe = (describeName, describeBody) => {

  global.it = (testName, testBody) => {

    const fullName = `${describeName} > ${testName}`;

    global.expect = (actual) => {
      return {
        toEqual: (expected) => {
          const pass = actual === expected;
          const icon = pass ? '✅' : '❌';
          console.log(`${icon} ${fullName}`);
        }
      }
    }

    testBody();
  }
  describeBody();
}
