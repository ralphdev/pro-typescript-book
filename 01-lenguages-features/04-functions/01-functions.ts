//* =========================Example 1 Function type annotations ========================== //


function getAverage(a: number, b: number, c: number): string {
  const total = a + b + c;
  const average = total / 3;
  return 'The average is ' + average;
}

const resultOne = getAverage(4, 3, 8); // 'The average is 5'

console.log(`resultOne: ${resultOne}`)


//* =========================Example 2 Optional Parameters ========================== //


function getAverageTwo(a: number, b: number, c?: number): string {

  let total = a;
  let count = 1;

  total += b;

  console.log(`total = ${total}`);

  count++;

  if (typeof c !== 'undefined') {
    total += c;
    count++;
  }

  console.log(`count = ${count}`);

  const average = total / count;
  return 'The average is ' + average;
}

// 'The average is 5'
const resultTwo = getAverageTwo(4, 6, 2);

console.log(`resultTwo = ${resultTwo}`);


//* =========================Example 3 Default Parameters ========================== //


function concatenate(items: string[], separator = ',', beginAt = 0, endAt = items.length) {

  let result = '';

  for (let i = beginAt; i < endAt; i++) {

    result += items[i];

    if (i < (endAt - 1)) {
      result += separator;
    }
  }
  return result;
}

const items = ['A', 'B', 'C'];

// 'A,B,C'
const result = concatenate(items);

// 'B-C'
const partialResult = concatenate(items, '-', 1);


//* =========================Example 4 Rest Parameters ========================== //

function getAverageThree(...a: number[]): string {

  let total = 0;
  let count = 0;

  for (let i = 0; i < a.length; i++) {

    total += a[i];
    count++;
  }

  console.log(`count = ${count}`);

  const average = total / count;
  return 'The average is ' + average;
}

// 'The average is 6'
const resultThree = getAverageThree(2, 4, 6, 8, 10);

console.log(`resultThree = ${resultThree}`);

// =========================Example 5 Overloads ========================== //

function getAverageFour(a: string, b: string, c: string): string;

function getAverageFour(a: number, b: number, c: number): string;

// implementation signature
function getAverageFour(a: any, b: any, c: any): string {

  const total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
  const average = total / 3;

  return 'The average is ' + average;
}

// The average is 5
const resultFour = getAverageFour(4, 3, 8);

console.log(`resultFour = ${resultFour}`);


//* =========================Example 6 Specialized Overload Signatures ========================== //
class HandlerFactory {

  getHandler(type: 'Random'): RandomHandler;

  getHandler(type: 'Reversed'): ReversedHandler;

  getHandler(type: string): Handler; // non-specialized signature

  getHandler(type: string): Handler { // implementation signature

    switch (type) {
      case 'Random':
        return new RandomHandler();
      case 'Reversed':
        return new ReversedHandler();
      default:
        return new Handler();
    }
  }
}

class Handler {}
class RandomHandler extends Handler {}
class ReversedHandler extends Handler {}

const factory = new HandlerFactory();

const randomHandler = factory.getHandler('Random'); // randomHandler es de tipo RandomHandler
const reversedHandler = factory.getHandler('Reversed'); // reversedHandler es de tipo ReversedHandler
const defaultHandler = factory.getHandler('Unknown'); // defaultHandler es de tipo Handler

//* =========================Example 7 getElementsByTagName ========================== //
// This example does not list all variations...
function getElementsByTagName(name: "a"): NodeListOf<HTMLAnchorElement>;
function getElementsByTagName(name: "blockquote"): NodeListOf<HTMLQuoteElement>;
function getElementsByTagName(name: "body"): NodeListOf<HTMLBodyElement>;
function getElementsByTagName(name: "button"): NodeListOf<HTMLButtonElement>;
function getElementsByTagName(name: "form"): NodeListOf<HTMLFormElement>;
function getElementsByTagName(name: "h1"): NodeListOf<HTMLHeadingElement>;
function getElementsByTagName(name: string): NodeList; // Non-specialized signature
function getElementsByTagName(name: string): NodeList { // implementation signature
 return  document.querySelectorAll(name);
}
