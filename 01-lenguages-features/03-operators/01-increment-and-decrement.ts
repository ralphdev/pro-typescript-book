// =========================Example 1========================== //

let counter = 0;

try {

  do {


    console.log(counter);
    break;

  } while (counter < 3);

} catch (e) {

  ++counter;

  console.log(counter)
  console.log(e)


}



// 10
//console.log(counter);

// =========================Example 2 ========================== //

enum Size {
  S,
  M,
  L,
  XL
}

//let size = Size.S;
//++size;
//console.log(Size[size]);

// let size = Size.XL;
//--size;
//console.log(Size[size]); // L

let size = Size.XL;
++size;
console.log(Size[size]); // undefined

export {}
