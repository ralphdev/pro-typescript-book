// 5. Decoradores

// Repetitivo
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }

  @log
  subtract(a: number, b: number): number {
    return a - b;
  }
}

const calc = new Calculator();
calc.add(2, 3);
calc.subtract(5, 3);
