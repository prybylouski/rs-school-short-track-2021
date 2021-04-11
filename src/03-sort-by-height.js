/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array}
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new Error('Not implemented');
  const arrayPos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arrayPos.push(i);
    }
  }
  const newArray = arr.filter((val) => val !== -1);
  newArray.sort((a, b) => a - b);
  const result = [];
  for (let i = 0, k = 0; i < arr.length; i++) {
    if (arrayPos.includes(i)) {
      result.push(-1);
    } else {
      result.push(newArray[k]);
      k++;
    }
  }
  return result;
}

module.exports = sortByHeight;
