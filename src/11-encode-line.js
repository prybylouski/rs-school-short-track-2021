/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new Error('Not implemented');
  let codeNum = 1;
  let encodeStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      codeNum++;
    } else if (codeNum === 1) {
      encodeStr += str[i];
    } else {
      encodeStr += `${codeNum}${str[i]}`;
      codeNum = 1;
    }
  }
  return encodeStr;
}

module.exports = encodeLine;
