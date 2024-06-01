// =========================Example 1 ========================== //
const squares = [1, 4, 9, 16, 25];
const powers = [2, 4, 8, 16, 32];

// Array spreading

const squaresAndPowers = [...squares, ...powers];

// [1, 4, 9, 16, 25, 2, 4, 8, 16, 32]
console.log(squaresAndPowers);

// =========================Example 2 ========================== //

const emergencyService = {
  police: 'Chase',
  fire: 'Marshall',
};

const utilityService = {
  recycling: 'Rocky',
  construction: 'Rubble'
};

// Object spreading
const patrol = { ...emergencyService, ...utilityService };

// { police: 'Chase', fire: 'Marshall', recycling: 'Rocky', construction: 'Rubble' }
console.log(patrol);

// =========================Example 3 ========================== //

function add(...numbers: number[]) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

const hexagons = [1, 6, 15];

// Pasar el array como argumento a una función que acepta un número variable de argumentos
const result = add(...hexagons);
// 22
console.log(result);

export {}
