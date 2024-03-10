/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
 - Open brackets must be closed by the same type of brackets.
 - Open brackets must be closed in the correct order.
 - Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/

function isValid(str) {
  const stack = [];
  const openingChars = ["(", "[", "{"];
  const closingChars = [")", "]", "}"];

  for (const char of str) {
    if (openingChars.includes(char)) {
      // add all opening characters to the stack for future comparison
      stack.push(char);
    } else if (closingChars.includes(char)) {
      // remove the most recent open character if it matches the closing character
      const recent = stack[stack.length - 1];

      if (recent === "(" && char === ")") {
        stack.pop();
      }

      if (recent === "[" && char === "]") {
        stack.pop();
      }

      if (recent === "{" && char === "}") {
        stack.pop();
      }
    }
  }

  // a string is valid if there are no opening characters left on the stack
  const answer = stack.length === 0;
  console.log(answer);
  return answer;
}

// Test cases (false)

isValid("({]");
isValid("{[(])}");

// Test case (true)

isValid("{([])}");
isValid("T{his[ i]s( a test) string}");
isValid("{[()]}");
isValid("{{[[(())]]}}");
