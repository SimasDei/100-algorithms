function checkPalindrome(inputString: string): boolean {
  const reverseString = inputString
    .split('')
    .reverse()
    .join('');

  return inputString === reverseString;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
