// i know we weren't required to do comments
// but algorithms are hard for me and i wanted to
function insertionSort(sortingArray) {
  // this sets the variable, defines the condition for executing the for loop, what happens every time after the block
  // has been exectuted(ie: adds one to variable i)
  for (let i = 0; i < sortingArray.length; i++) {
    if (sortingArray[i] < sortingArray[0]) {
      // if true takes the number at index i and puts it at index zero
      sortingArray.unshift(sortingArray.splice(i,1)[0])
    } else {
      for (let m = 0; m < i; m++) {
        // this inner loop has to happen in order to keep sorting the numbers if the array is larger than 2 elements
        if (sortingArray[i] < sortingArray[m]) {
          // if number at index i is less than number at index m
          sortingArray.splice(m,0,(sortingArray.splice(i,1)[0]))
          // switch them. this number goes up incrementally as the if statements keep running
        }
      }
    }
  }
  return sortingArray;
};
module.exports = insertionSort
