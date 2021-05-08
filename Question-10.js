// 10. Write a JS function to find out the number of vowels from a
// user input string.
// Test Data:
// console.log(vowels(“Hey This is Skillsanta JS Training”))
// Output:
// A: 3
// E: 1
// I: 5

const vowels = (string) => {
  let vowelsList = {};
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      if (string[i] in vowelsList) vowelsList[string[i]] += 1;
      else vowelsList[string[i]] = 1;
    }
  }

  return vowelsList;
};
console.log(vowels("Hey This is Skillsanta JS Trainin"));
