function Timer(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const end = performance.now();
    console.log(`Method ${propertyKey} took ${(end - start).toFixed(2)}ms`);
    return result;
  };

  return descriptor;
}

class DataProcessor {
  @Timer
  processData(data: any[]) {
    for (let i = 0; i < data.length; i++) {}
  }
}
