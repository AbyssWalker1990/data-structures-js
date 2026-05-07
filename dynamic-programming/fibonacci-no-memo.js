let counter = 0;

function fib(n) {
  counter++;

  if (n <= 1) return n;

  const result = fib(n - 1) + fib(n - 2);

  return result;
}

const number = 20;

console.log(`Fib of ${number}:   ${fib(number)}`);
console.log(`Counter: ${counter}`);
