function firstNonRepeatedChar(inpuString) {
 // Write your code here
	 const charFrequency = {};

  // Iterate through the string to count character occurrences
  for (const char of inputString) {
    if (charFrequency[char]) {
      charFrequency[char]++;
    } else {
      charFrequency[char] = 1;
    }
  }

  // Iterate through the string again to find the first non-repeated character
  for (const char of inputString) {
    if (charFrequency[char] === 1) {
      return char; // Found the first non-repeated character
    }
  }

  // If no non-repeated character is found, return null
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
