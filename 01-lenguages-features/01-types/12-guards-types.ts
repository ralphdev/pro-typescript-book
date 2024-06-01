
function typeGuardExample(stringNumber: string | number) {

  // Error: Property does not exist
  // const a = stringNumber.length;
  // const b = stringNumber.toFixed();

  // Type guard
  if (typeof stringNumber === 'string') {

    // OK
    return stringNumber.length;
  } else {

    // OK
    return stringNumber.toFixed();
  }
}

// Custom Type Guard

interface SpeedControllable {
  increaseSpeed(): void;
  decreaseSpeed(): void;
  stop(): void;
}


interface InclineControllable {
  lift(): void;
  drop(): void;
}

function isSpeedControllable(treadmill: SpeedControllable | any): treadmill is SpeedControllable {

  if (treadmill.increaseSpeed && treadmill.decreaseSpeed && treadmill.stop) {
    return true;
  }

  return false;
}

function customTypeGuardExample(treadmill: SpeedControllable | InclineControllable) {

  // Error: Property does not exist
  //const a = treadmill.increaseSpeed();
  //const b = treadmill.lift();

  // Type guard
  if (isSpeedControllable(treadmill)) {

    // OK
    treadmill.increaseSpeed();
  } else {

    // OK
    treadmill.lift();
  }
}
