
type Kingdom = 'Bacteria' | 'Protozoa' | 'Chromista' | 'Plantae' | 'Fungi' | 'Animalia';

let kingdom: Kingdom;

// OK
kingdom = 'Bacteria';

// Number literal type
type Fibonacci = 1 | 2 | 3 | 5 | 8 | 13;

let num: Fibonacci;

// OK
num = 8;

// Hybrid union/literal type
type Randoms = 'Text' | 10 | false;

let random: Randoms;

// OK
random = 'Text';
random = 10;
random = false;
