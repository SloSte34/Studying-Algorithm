/*
Problem Link : https://school.programmers.co.kr/learn/courses/30/lessons/12931
정답률 86%
<문제>
자릿수 더하기

<문제 설명>
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

<제한사항>
N의 범위 : 100,000,000 이하의 자연수

<입출력 예>
N	answer
123	6
987	24
입출력 예 설명
입출력 예 #1
문제의 예시와 같습니다.

입출력 예 #2
9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.
*/
/*
전략 수립(틀린 전략)
1. 우선 숫자의 길이를 구해야 한다.
2. 자릿수를 구한다. 어떻게? 100의 자리는 200이라고 했을때 100으로 나누면 값이 2다.
10의 자리는 20이라고 했을때 10으로 나누면 2다 1의 자리는 3이라고 했을때 1로 나누면 3이다.
/를 쓰자.
2. 결과를 더하면된다.

새롭게 전략 수립
아예 다른 방식으로 접근해야 했음. 숫자들을 string으로 바꾼 후 이것을 배열에 넣어서 하나씩 꺼낸 다음에 
다시 숫자로 바꾸는 방식이 더 간편했다.
*/

function solution(number) {
  let answer = 0;
  let sumOfDigit = 0;
  let numToString = number.toString();
  let arr = numToString.split('');
  let arrLength = arr.length;

  console.log(arr);
  for (let i = 0; i < arrLength; i++) {
    sumOfDigit += +arr[i];
  }
  answer = sumOfDigit;
  console.log(answer);
  return answer;
}

//test
solution(987);

//Problem Solved 2022. 9. 26.(Mon)
