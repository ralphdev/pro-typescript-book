// Type assertions
interface House {
  bedrooms: number;
  bathrooms: number;
}

interface Mansion {
  bedrooms: number;
  bathrooms: number;
  butlers: number;
}

function getProperty() : House | Mansion {
  // ...
  return {bedrooms: 1, bathrooms: 2 }
}

const property = getProperty();

// OK as the property is on both House and Mansion
const bedroomCount = property.bedrooms;

// Errors: Property 'butlers' does not exist on type 'House | Mansion'
// const butlerCount = property.butlers;

// OK with type assertion
const workingButlerCount = (<Mansion>property).butlers;
console.log(workingButlerCount);

// Forced type assertions
const name: string = 'Avenue Road';

// Error: Type 'string' cannot be converted to type 'number'
// const bedroomCount: number = <number>name;

// Works
const workingBedroomCount: number = <number><any>name

export { };
