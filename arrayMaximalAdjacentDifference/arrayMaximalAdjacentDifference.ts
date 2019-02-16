function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maxDiff = Math.abs(inputArray[0] - inputArray[1]);

  for (let i = 0; i < inputArray.length; i++) {
    const absoluteDiff = Math.abs(inputArray[i - 1] - inputArray[i]);
    if (absoluteDiff > maxDiff) {
      maxDiff = absoluteDiff;
    }
  }

  return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
