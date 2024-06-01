//================ Parameter Annotations

function greet(name: string) {
  console.log("Hello, " + name + "!");
}

greet("John"); // Output: Hello, John!
// greet(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// function annotation with parameter type annotation and return type annotation
let sayHello: (name: string) => string;

// implementation of sayHello function
sayHello = function (name) {
  return 'Hello ' + name;
};

//================ Return Type Annotation

function add(x: number, y: number): number {
  return x + y;
}

let result: number = add(3, 5);
console.log(result); // Output: 8
// let result: string = add(3, 5); // Error: Type 'number' is not assignable to type 'string'.

//================ Optional Parameters

function name(name?: string) {
  if (name) {
    console.log("Hello, " + name + "!");
  } else {
    console.log("Hello, guest!");
  }
}

name(); // Output: Hello, guest!
greet("John"); // Output: Hello, John!

//================ Rest Parameters

function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

//================ Function Types

let myFunction: (x: number, y: number) => number;

myFunction = function(x: number, y: number): number {
    return x + y;
};

console.log(myFunction(3, 5)); // Output: 8

export {}
