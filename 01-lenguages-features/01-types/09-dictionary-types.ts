// Index Types
interface Cephalopod {
  hasInk: boolean;
  arms: number;
  tentacles: number;
}

interface CephalopodDictionary {
  [index: string]: Cephalopod
}

let dictionary: CephalopodDictionary = {};

dictionary['octopus vulgaris'] = {
  hasInk: true,
  arms: 8,
  tentacles: 0
};

dictionary['loligo vulgaris'] = {
  hasInk: true,
  arms: 8,
  tentacles: 2
};

const octopus = dictionary['octopus vulgaris'];

console.log(octopus.tentacles);

// remove item

delete dictionary['octopus vulgaris'];
