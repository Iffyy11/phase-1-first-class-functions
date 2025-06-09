// 1. receivesAFunction should take a callback function and call it
function receivesAFunction(callback) {
  callback();
}

// 2. returnsANamedFunction should return a named function
function returnsANamedFunction() {
  return function namedFunction() {
    return "Hello from a named function!";
  };
}

// 3. returnsAnAnonymousFunction should return an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    return "Hello from an anonymous function!";
  };
}
