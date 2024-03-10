/*
Given two strings. The task is to check whether the given strings are anagrams of each other or not. 
An anagram of a string is another string that contains the same characters, only the order of characters can be different. 
For example, “abcd” and “dabc” are an anagram of each other.

Input: str1 = “listen”  str2 = “silent”
Output: “Anagram”
Explanation: All characters of “listen” and “silent” are the same.

Input: str1 = “gram”  str2 = “arm”
Output: “Not Anagram”
*/

function anagram(firstWord, secondWord) {
  const test1 = firstWord.toLowerCase().split("").sort().join();
  const test2 = secondWord.toLowerCase().split("").sort().join();

  const answer = test1 === test2;
  console.log(answer);
  return answer;
}

// Test cases (false)

anagram("foo", "bar");
anagram("food", "oof");

// Test cases (true)

anagram("listen", "silent");
anagram("Cinema", "icEman");
