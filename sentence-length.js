/* 
Get the length of the longest sentence in a given paragraph. 
Sentences are marked by periods(.), commas(,) and exclamation points(!).
*/

function solution(str) {
  const sentences = str.split(/[.,!]/);
  const wordLengths = sentences.map(
    (s) => s.split(/\s+/g).filter((w) => w !== "").length
  );

  const maxLength = Math.max(...wordLengths);
  console.log(maxLength);
  return maxLength;
}

// Test cases

let s =
  "This  is..Some other phrase. . x D. This is the longest sentence at eight words.";

solution(s); // 8
