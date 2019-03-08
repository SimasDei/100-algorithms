function differentSymbolsNaive(s: string): number {
  const uniqueChars = new Set();
  const inputCharts = s.split('');
  inputCharts.forEach(char => uniqueChars.add(char));
  return uniqueChars.size;
}

console.log(differentSymbolsNaive('cabca'));
