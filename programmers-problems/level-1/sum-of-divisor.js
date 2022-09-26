/*
Problem Link : https://school.programmers.co.kr/learn/courses/30/lessons/12928
정답률 86%
<문제>
약수의 합

<문제 설명>
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

<제한 사항>
n은 0 이상 3000이하인 정수입니다.

<입출력 예>
n	return
12	28
5	6
입출력 예 설명
입출력 예 #1
12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

입출력 예 #2
5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.
*/

/*전략 수립
1. 우선 함수로 들어오는 인자의 약수를 구한다.
2. 그 약수들을 다 더한다.
우선 약수의 정의는...'어떤 수나 식을 나누어 나머지가 없이 떨어지는 수나 식을 일컫는 말'
중요한 포인트는 나머지가 없다는 것. 그렇다면 %을 써야 하나?
*/

function solution(number) {
  let sumOfDivisors = 0;
  for (let i = 0; i <= number; i++) {
    //number을 0부터 Number까지 다 나눠보기
    if (number % i === 0) {
      console.log(i); //약수 잘 나오는지 테스트
      sumOfDivisors += i;
    }
  }
  let answer = 0;
  answer = sumOfDivisors;
  console.log(answer);
  return answer;
}

//test
solution(12);

//Problem Solved 2022. 9. 26.(Mon)
