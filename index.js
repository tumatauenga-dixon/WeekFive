
console.log("Increment");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("Decrement");
for (let i = 0; i > -5; i--) {
    console.log(i);
}

for (let i = 0;; i++) {
    console.log("loop, i = " + i);
    if (i > 1)
        break;
};

let counter = 0;
function inc() { counter++; }for (let i = 0; i < 10; i++, inc());
console.log(counter); // comment

for (var i = 0; i < 10; i++) {
    let x = i; console.log(x);
}

console.log("Nested Loops");
for (let y = 0; y < 2; y++)
    for (let x = 0; x < 2; x++)
        console.log(x, y);

for (let y = 0; y < 2; y++)
    for (let x = 0; x < 2; x++)
        for (let z = 0; z < 2; z++)
        console.log(x, y, z);

console.log("Loop's Length");
for (let i = 0; i < 3; i++) console.log("loop.");

for (let i = 0; i < 3; i++) { let loop = "loop."; console.log(loop) };
console.log(i)

console.log("Skipping Steps");
for (let i = 0; i < 3; i++) { if (i == 1) continue; console.log(i); }

console.log("Breaking Early")
for (let i = 0;; i++) { console.log("loop"); break; };

console.log("Breaking to A Label")
let c = 0;
mark: for (let i = 0; i < 5; i++) {
    console.log("I", i)
    inner: for (let j = 0; j < 5; j++) {
        console.log("J", j)
        c++; if (i == 2) break mark;
        console.log("c++", c++)
    }
}
console.log(c); // 21


console.log("Generator")
// Generator function:
function* generator() {
    yield 1;
    yield 2;
    yield 3;
  }for (let value of generator())
    console.log( value );