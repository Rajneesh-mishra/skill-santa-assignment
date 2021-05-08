// 9. Write a JavaScript function to find the unique elements from
// two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Output:
// ["1", "2", "3", "10", "100"]

const difference = (arr1, arr2) => {
  let uniqueElement = {};
  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if (i < arr1.length) {
      if (!(arr1[i] in uniqueElement)) uniqueElement[arr1[i]] = true;
    }
    if (i < arr2.length) {
      if (!(arr2[i] in uniqueElement)) uniqueElement[arr2[i]] = true;
    }
  }

  return Object.keys(uniqueElement);
};
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
document.write("output is in console");
