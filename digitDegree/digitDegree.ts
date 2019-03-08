function digitDegree(n: number): number {
  let count: number = 0;
  let currentNumber = n;
  if (n <= 9) {
    return count;
  } else {
    while (true) {
      count++;
      currentNumber = getDigit(currentNumber);
      if (currentNumber <= 9) {
        break;
      }
    }
  }
  return count;
}

function getDigit(num) {
  return num
    .toString()
    .split('')
    .reduce((a, b) => parseInt(a) + parseInt(b));
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
