/*
A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. 
Implement a method to count how many possible ways the child can run up the stairs.

Example:
 - Input: 3
 - Output: 4

Explanation:
Below are the four ways
 - 1 step + 1 step + 1 step
 - 1 step + 2 step
 - 2 step + 1 step
 - 3 step

https://www.geeksforgeeks.org/count-ways-reach-nth-stair-using-step-1-2-3/
*/

function solution(n) {
  if (n < 0) {
    return 0;
  }

  // if there are no steps left then we are at the top
  if (n === 0) {
    return 1;
  }

  // jump i stairs each time
  const steps3 = solution(n - 3);
  const steps2 = solution(n - 2);
  const steps1 = solution(n - 1);

  const answer = steps3 + steps2 + steps1;
  return answer;
}

// Test cases

const t1 = solution(3);
console.log(t1); // 4

const t2 = solution(4);
console.log(t2); // 7
