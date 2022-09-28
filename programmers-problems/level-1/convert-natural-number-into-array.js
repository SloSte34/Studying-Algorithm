/*
Problem Link : https://school.programmers.co.kr/learn/courses/30/lessons/12932
<문제>
자연수 뒤집어 배열로 만들기

<문제 설명>
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

<제한 조건>
n은 10,000,000,000이하인 자연수입니다.

<입출력 예>
n	return
12345	[5,4,3,2,1]
*/

/*
전략 수립
1. 우선 number을 string으로 바꾼다.
2. string을 배열에 넣는다.
3. 메서드를 사용해서 배열을 뒤집는다.
*/

function solution(number) {
  let answer = [];
  let numberToString = number.toString(); //'12345'
  answer = numberToString.split('');
  answer = answer.reverse(); //배열을 뒤집어준다.
  answer = answer.map((i) => Number(i)); //배열의 각각 문자열을 숫자로 바꿔준다.새롭게 배운 부분.
  console.log(answer);
  return answer;
}

//test
solution(12345);

//2022. 9. 28.(Wed) Problem Solved
