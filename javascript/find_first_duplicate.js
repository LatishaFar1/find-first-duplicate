function findFirstDuplicate(arr) {
  // type your code here
  // stores each value in the array as a unique value 
  let newArr = new Set();
  // iterates through the array 
  for (let i = 0; arr.length; i++){
    // if the new array with our unique values has a duplicate in the OG array it returns that value
    if (newArr.has(arr[i])) 
    return arr[i];
    newArr.add(arr[i])
  }
  // else returns -1
   return -1
}

if (require.main === module) {
  // add your own tests in here
  // console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));
  console.log("=>", findFirstDuplicate([3,4,4,5]));
  console.log("");

  // console.log("Expecting: -1");
  // console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
