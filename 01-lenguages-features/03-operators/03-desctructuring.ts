// =========================Example 1 ========================== //

const triangles = [1, 3, 6, 10, 15, 21];

// Destructuring
//const [first, second] = triangles;

//console.log(first);

// =========================Example 2 ========================== //

// Destructuring with a rest argument
//const [first, second, ...remaining] = triangles;//

//console.log(remaining);


// =========================Example 3 ========================== //
// Swapping

let a = 3;
let b = 5;

// Swapping
[a, b] = [b, a];

// 5
console.log(a);

// 3
console.log(b);

// =========================Example 4 ========================== //
//Object destructuring

const highSchool = { school: 'Central High', team: 'Centaurs' };

// Object destructuring

const { school: s, team: t } = highSchool;

// 'Central High'

console.log(s);

// 'Centaurs'
console.log(t);

// =========================Example 5 ========================== //
// Tuples and Destructuring

// Returning a tuple
function getThreeLandmarks(): [string, string, string] {
  return ['Golden Gate Bridge', 'Palace of Westminster', 'Colosseum '];
}

// Destructuring the tuple into named variables
const [sanFrancisco, london, rome] = getThreeLandmarks();
