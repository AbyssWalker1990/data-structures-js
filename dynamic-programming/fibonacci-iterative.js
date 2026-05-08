let counter = 0;

function fib(n) {
  let fibArray = [];
  fibArray[0] = 0;
  fibArray[1] = 1;

  if (n <= 1) return n;

  for (let i = 2; i <= n; i++) {
    counter++;
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  return fibArray[n];
}

const number = 20;

console.log(`Fib of ${number}:   ${fib(number)}`);
console.log(`Counter: ${counter}`);
