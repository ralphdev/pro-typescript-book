//* ================ Type annotation for a union type

let union: boolean | number;

//* ================ OK: number
union = 5;

//* ================ OK: boolean
union = true;

//* ================ Type alias for a union type
type StringOrError = string | Error;

//* ================ Type alias for union of many types
type SeriesOfTypes = string | number | boolean | Error;

//* ================ Function Parameters with Union Types:

// A function that accepts either a number or a string parameter
function displayData(data: number | string) {
  console.log(data);
}

displayData(10); // Output: 10
displayData("Hello"); // Output: Hello
// displayData(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number | string'.

//* ================ Union Types in Interfaces:
interface UserData {
  id: number | string;
  name: string;
}

let user: UserData = {
  id: 123,
  name: "John"
};
console.log(user); // Output: { id: 123, name: 'John' }

user = {
  id: "abc",
  name: "Alice"
};
console.log(user); // Output: { id: 'abc', name: 'Alice' }

//* ================ Type Guards with Union Types:
// A function using type guards to handle different types within a union type
function displayValue(value: number | string) {
  if (typeof value === "number") {
    console.log("The value is a number: " + value);
  } else {
    console.log("The value is a string: " + value);
  }
}

displayValue(10); // Output: The value is a number: 10
displayValue("Hello"); // Output: The value is a string: Hello

//* ================ Union Types with Array Elements:
// An array that can hold either numbers or strings
let arr: (number | string)[] = [1, "two", 3, "four"];
console.log(arr); // Output: [1, 'two', 3, 'four']
