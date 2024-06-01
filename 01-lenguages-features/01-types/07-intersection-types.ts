
interface Skier {
  slide(): void;
}

interface Shooter {
  shoot(): void;
}

type Biathelete = Skier & Shooter;

let biathelete: Biathelete;
