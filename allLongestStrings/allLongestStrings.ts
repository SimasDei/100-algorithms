function allLongestStrings(inputArray: string[]): string[] {
  let longestString = 0;
  const longestWords = [];
  inputArray.forEach(word => {
    longestString = longestString < word.length ? word.length : longestString;
  });
  inputArray.forEach((word: string) => {
    if (word.length === longestString) {
      longestWords.push(word);
    }
  });
  return longestWords;
}

console.log(allLongestStrings(['aba', 'aaf', 'ad', 'vcd', 'aba']));
