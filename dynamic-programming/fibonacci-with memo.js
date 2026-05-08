let counter = 0;
let memo = [];

function fib(n) {
  counter++;

  if (memo[n] !== undefined) return memo[n];

  if (n <= 1) return n;

  memo[n] = fib(n - 1) + fib(n - 2);

  return memo[n];
}

const number = 20;

console.log(`Fib of ${number}:   ${fib(number)}`);
console.log(`Counter: ${counter}`);
