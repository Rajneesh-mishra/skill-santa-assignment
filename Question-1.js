// Write a Javascript program to take tree numbers from the user
// as input and print the largest number on the document.

let nums = prompt("Enter three no. (seperate them with ,").split(",");
nums = nums.map((num) => Number(num));

let largestNum =
  nums[0] > nums[1] && nums[0] > nums[2]
    ? nums[0]
    : nums[1] > nums[0] && nums[1] > nums[2]
    ? nums[1]
    : nums[2];

window.document.write(largestNum);
console.log(largestNum);
