function addTwoDigits(n: any): number {
  const numbers = n.toString().split('');
  return +numbers[0] + +numbers[1];
}
console.log(addTwoDigits(29));
