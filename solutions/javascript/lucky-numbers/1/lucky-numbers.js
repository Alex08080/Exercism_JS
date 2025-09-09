// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let ar1 ='';
  for(let i=0;i<array1.length;i++)
  {
    ar1 +=String(array1[i]);
  }
  let ar2 ='';
  for(let i=0;i<array2.length;i++)
  {
    ar2 +=String(array2[i]);
  }
  return (Number(ar1) + Number(ar2));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let array = String(value);
  for(let i =0, j = array.length - 1;i<Math.floor(array.length/2);i++,j--)
    {
      if(array[i] != array[j])
        return false;
    }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  console.log(input);
  console.log(Number(input));
  if(!input) return 'Required field';
  else if (!Number(input)) return 'Must be a number besides 0';
  else return '';
}
