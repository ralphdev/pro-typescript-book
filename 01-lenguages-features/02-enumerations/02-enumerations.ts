// * ================ Enumerations

enum VehicleType {
  PedalCycle,
  MotorCycle,
  Car,
  Van,
  Bus,
  Lorry
}

const type = VehicleType.Lorry;
const typeName = VehicleType[type]; // 'Lorry'


enum BoxSize {
  Small,
  Medium
}

enum BoxSize {
 Large = 2,
 XLarge,
 XXLarge
}

const size = BoxSize.XLarge;

//* Bit Flags

enum DiscFlags {
  None = 0,
  Drive = 1,
  Influence = 2,
  Steadiness = 4,
  Conscientiousness = 8
}

// * ================ Using Flags
let personality = DiscFlags.Drive | DiscFlags.Conscientiousness;

//* Testing flags

// true
let hasD = (personality & DiscFlags.Drive) == DiscFlags.Drive;
console.log('hasD', hasD);

// false
let hasI = (personality & DiscFlags.Influence) == DiscFlags.Influence;
console.log('hasI', hasI);

// false
let hasS = (personality & DiscFlags.Steadiness) == DiscFlags.Steadiness;
console.log('hasS', hasS);

// true
let hasC = (personality & DiscFlags.Conscientiousness) == DiscFlags.Conscientiousness;
console.log('hasC', hasC);
