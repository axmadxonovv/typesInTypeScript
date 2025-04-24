function identity<T>(value: T): T {
  return value;
}

console.log(identity(5));

// tsc && node ./dist/11.js
