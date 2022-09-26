/*
Problem Link : https://school.programmers.co.kr/learn/courses/30/lessons/12944
<문제>
평균 구하기

<문제 설명>
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

<제한사항>
arr은 길이 1 이상, 100 이하인 배열입니다.
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

<입출력 예>
arr	return
[1,2,3,4]	2.5
[5,5]	5
*/

//전략 수립
//1. 우선 배열의 요소들을 모두 더한다.
//2. 모두 더한 값을 배열의 길이로 나눈다.
//3. 끝

function solution(arr) {
  let answer = 0;
  let arrLength = arr.length;
  let sum = 0;
  for (let i = 0; i < arrLength; i++) {
    sum += arr[i];
  }
  answer = sum / arrLength;
  console.log(answer);
  return answer;
}

//test
solution([1, 2, 3, 4]);
solution([5, 5]);

//problem solved 2022. 9. 26.(Mon)
