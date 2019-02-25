function isCaseInsensitivePalindrome(inputString: string): boolean {
  const originalLowerCase = inputString.toLowerCase();
  const reversedString = originalLowerCase
    .split('')
    .reverse()
    .join('');
  return originalLowerCase === reversedString;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
