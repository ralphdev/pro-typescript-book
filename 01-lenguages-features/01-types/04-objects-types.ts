//*  Object type annotation

//* ================  Inline Object Type Annotation

let personaOne: { name: string; age: number } = {
  name: "John",
  age: 30
};

let personaTwo: {
  name: string;
  heightInCentimeters: number;
};

personaTwo = {
  name: 'Rafael',
  heightInCentimeters: 183
}

//* ================ Interface

interface Person {
  name: string;
  anio: number;
}

let person: Person = {
  name: "John",
  anio: 30
};

interface PersonInterface {
  name: string;
  heightInCentimeters: number;
}

const sherlock: PersonInterface = {
  name: 'Rafael',
  heightInCentimeters: 169
}

//* ================ Tyoe Alias

type Persona = {
    name: string;
    age: number;
};

let humano: Persona = {
    name: "John",
    age: 30
};

type PersonType = {
  name: string;
  heightInCentimeters: number;
};

const jhon: PersonType = {
  name: 'Rafa',
  heightInCentimeters: 169
}

//* ================ Optional Properties:
interface Humano {
    name: string;
    age?: number; // Age is optional
}

let Humano1: Humano = { name: "John" }; // Age is optional
let Humano2: Humano = { name: "Alice", age: 25 }; // Age is provided

//* ================ Readonly Properties

interface PersonNoLect {
    readonly name: string;
    readonly age: number;
}

let personNo: PersonNoLect = { name: "John", age: 30 };
// person.name = "Alice"; // Error: Cannot assign to 'name' because it is a read-only property.


export {}
