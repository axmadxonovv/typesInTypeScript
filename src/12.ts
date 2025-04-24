function filterNumbers<T extends number>(numbers: T[]): T[] {
  return numbers.filter((num) => num % 2 === 0);
}

console.log(filterNumbers([2, 5, 7, 8, 4, 6]));

// tsc && node ./dist/12.js
