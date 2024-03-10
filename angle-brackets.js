/*
Question: Given a string of angle brackets, write a function that add brackets at the beginning and end of the string to make all brackets match. The angle brackets match if for every < there is a corresponding > and for every > there is a corresponding <.

Example input string: ><<><
Output string is <><<><>>

https://stackoverflow.com/questions/59097524/how-to-solve-this-parse-and-balance-angle-brackets-problem-javascript
*/

function solution(angles) {
  let leading = 0;
  let open = 0; // also our trailing count

  for (const char of angles) {
    if (char === ">") {
      if (open === 0) {
        // add another leading <
        leading++;
      } else {
        // this closes an existing <
        open--;
      }
    }

    if (char === "<") {
      // need to append another >
      open++;
    }
  }

  const result = "<".repeat(leading) + angles + ">".repeat(open);
  console.log(result);
  return result;
}

// Test cases

solution("><<><");
solution("<><<<><");
