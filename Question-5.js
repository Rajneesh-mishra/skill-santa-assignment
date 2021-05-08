// 5. Write a JavaScript program to reverse a given string and also
// check if string is palindrome or not.

const stringAsCharArray = prompt("Enter a string").split("");
let temp,
  flag = true;
for (
  let i = 0, j = stringAsCharArray.length - 1;
  i < stringAsCharArray.length / 2;
  i++, j--
) {
  if (stringAsCharArray[i] !== stringAsCharArray[j]) {
    flag = false;
  }
  temp = stringAsCharArray[i];
  stringAsCharArray[i] = stringAsCharArray[j];
  stringAsCharArray[j] = temp;
}
result = `String is ${
  flag ? "Palindrome" : "not Palindrone"
} <br> reversed string is ${stringAsCharArray.join("")}`;

document.write(result);
