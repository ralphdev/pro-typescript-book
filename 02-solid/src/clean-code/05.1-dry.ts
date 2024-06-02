// Funciones y Métodos Reutilizables


// Repetitivo
function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

//const user1 = getFullName("John", "Doe");
//const user2 = getFullName("Jane", "Smith");


// 2. Interfaces y Tipos

// Repetitivo
// const user1 = { firstName: 'John', lastName: 'Doe', age: 30 };
// const user2 = { firstName: 'Jane', lastName: 'Smith', age: 25 };

// DRY
interface User {
  firstName: string;
  lastName: string;
  age: number;
}

const user1: User = { firstName: 'John', lastName: 'Doe', age: 30 };
const user2: User = { firstName: 'Jane', lastName: 'Smith', age: 25 };
