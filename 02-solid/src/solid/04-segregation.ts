
interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}
interface RunningBird {
  run(): void;
}
interface SwimingBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird{

  public fly(){}
  public eat(){}
}

class Humminbird implements Bird, FlyingBird{
  public fly() {}
  public eat() {}
}

class Ostrish implements Bird, RunningBird{

  public eat(){}
  public run(){}
}

class Penguin implements Bird, SwimingBird {
  public eat() {}
  public swim() {}
}
