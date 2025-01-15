const testResults = {};

global.describe = (describeName, describeBody) => {

  global.it = (testName, testBody) => {

    const fullName = `${describeName} > ${testName}`;
    testResults[fullName] = undefined;

    global.expect = (actual) => {
      return {
        toEqual: (expected) => {
          const pass = actual === expected;
          testResults[fullName] = {
            pass,
            message: `expected ${expected}, got ${actual}`
          };
        }
      }
    }

    testBody();
  }
  describeBody();
  printResults();
}

function printResults() {
  const everyTest = Object.entries(testResults).map(([name, result]) => ({ name, result }));
  everyTest.forEach(test => {
    const icon = test.result.pass ? '✔' : '𝙭';
    console.log(`${icon} ${test.name}`);
    if (!test.result.pass) {
      console.error('    ' + test.result.message);
    }
  });
  
  console.log('\n');
  const failures = everyTest.filter(x => !x.result.pass).length;
  const passes = everyTest.filter(x => x.result.pass).length;
  const allPass = everyTest.every(x => x.result.pass);
  console.log(`Tests: ran ${everyTest.length}, failed: ${failures}, passed: ${passes}`);
  console.log('\n');
  console.log(allPass ? 'PASS' : 'FAIL');
}
