function processValue(value: string | number | Date): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value * value);
  } else if (value instanceof Date) {
    console.log(value.toISOString());
  }
}
