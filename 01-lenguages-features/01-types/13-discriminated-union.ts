// Discriminated union
interface Cube {
  kind: 'cube'; // Discriminant
  size: number;
}

interface Cuboid {
  kind: 'cuboid'; // Discriminant
  width: number;
  depth: number;
  height: number;
}

// Union
type Prism = Cube | Cuboid;

function volume(prism: Prism): number {

  // Type Guard
  switch (prism.kind) {
    case 'cube':
      return prism.size * prism.size * prism.size;
    case 'cuboid':
      return prism.width * prism.depth * prism.height;
    default:
      assertNever(prism);
    break;
  }
}

function assertNever(arg: never): never {

  throw new Error("Possible new tagged type: " + arg);
}

const cube: Cube = { kind: 'cube', size: 3 };
const cuboid: Cuboid = { kind: 'cuboid', width: 3, depth: 4, height: 5 };

console.log(volume(cube));
console.log(volume(cuboid));
