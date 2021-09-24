// let count = 0;

// while (count < 10) {
//   console.log(count);
//   ++count;
// }

/*
  return if count hits 10 (is greater than 9)
  log the count
  call fn, pass it incremented count value
*/

function recursiveCount(num = 0) {
  if (num === 10) return 
  console.log(num)
  recursiveCount(num += 1)
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
