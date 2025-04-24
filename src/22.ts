function MeasureTime(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const end = performance.now();
    console.log(`Method ${propertyKey} took: ${(end - start).toFixed(1)}ms`);
    return result;
  };

  return descriptor;
}

class MathService {
  @MeasureTime
  heavyCalculation() {
    for (let i = 0; i < 1_000_000; i++) {}
  }
}
