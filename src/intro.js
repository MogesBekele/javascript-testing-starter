// Lesson: Writing your first tests
export function max(a, b) {
  return a > b ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

export function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

//what is unit testing
//=> a form of autemated testing where we write code to test our code
//types of tests
//=> unit tests, integration tests and end to end tests
//testing frameworks
//=> jest, mocha, vitest, jasmine, cypress and playwright
//for now we use vitest and jest
//setting up vitest
//
// your first test
//test-driven development
//=> code first and then write tests
// running tests effeciently
//shortcuts to navigate code in vscode
