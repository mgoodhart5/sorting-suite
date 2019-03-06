let sortingArray = [8,7];

function insertionSort(sortingArray) {
  for (let i = 0; i < sortingArray.length; i++) {
    if (sortingArray[i] < sortingArray[0]) {
      sortingArray.unshift(sortingArray.splice(i,1)[0])
    }
  }
  return sortingArray;
};
module.exports = insertionSort
