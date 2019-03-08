function differentSymbolsNaive(s: string): number {
  const uniqueChars: string[] = [];
  const inputChars: string[] = s.split('');

  inputChars.forEach(char => {
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    }
  });

  return uniqueChars.length;
}

console.log(differentSymbolsNaive('cabca'));
