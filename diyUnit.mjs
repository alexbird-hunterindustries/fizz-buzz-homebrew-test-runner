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
    const statusColor = test.result.pass ? color.green : color.red;
    console.log(statusColor(`${icon} ${test.name}`));
    if (!test.result.pass) {
      console.error('    ' + color.red(test.result.message) + '\n');
    }
  });
  
  console.log('\n');
  const failures = everyTest.filter(x => !x.result.pass).length;
  const passes = everyTest.filter(x => x.result.pass).length;
  const allPass = everyTest.every(x => x.result.pass);
  console.log(`Tests: ran ${everyTest.length}, ${(color.red(`failed: ${failures}`))}, ${color.green(`passed: ${passes}`)}`);
  console.log('\n');
  console.log(allPass ? color.green('PASS') : color.green('FAIL'));
}

// Color codes come from the Stack Overflow hit for "Node console log color"
// https://stackoverflow.com/a/41407246
const color = {
  red: text => `\x1b[31m${text}\x1b[0m`,
  green: text => `\x1b[32m${text}\x1b[0m`,
}
