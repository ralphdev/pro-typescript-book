// 4. Generics
// Repetitivo
function identityString(arg: string): string {
  return arg;
}

function identityNumber(arg: number): number {
  return arg;
}

// DRY
function identity<T>(arg: T): T {
  return arg;
}

const result1 = identity<string>('Hello');
const result2 = identity<number>(123);
