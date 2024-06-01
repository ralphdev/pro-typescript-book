// Array type annotation

// Basic Array
let numeros: number[] = [1, 2, 3, 4, 5, 6];
let nombres: string[] = ["John", "Doe", "Alice"];
const names: string[] = ['Rafael', 'Karla', 'Yohanan', 'Danna'];

// Array Generic Type
let numbersGen: Array<number> = [1, 2, 3, 4, 5];
let namesGen: Array<string> = ["John", "Doe", "Alice"];

// Multi-Type Arrays
let mixed: (number | string)[] = [1, "two", 3, "four"];


// Tuple Types
let coordinates: [number, number] = [10, 20]; // Tuple with two numbers
let person: [string, number, boolean] = ["John", 25, true]; // Tuple with string, number, boolean

let poem: [number, boolean, string];
poem = [1, true, 'Rafael'];

// Readonly Arrays
let readOnlyNumbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// readOnlyNumbers.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'

// Array Type Inference
let inferredNumbers = [1, 2, 3, 4, 5]; // TypeScript infers `inferredNumbers` as type `number[]`

export {}
