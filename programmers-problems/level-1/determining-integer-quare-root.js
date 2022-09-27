/*
Problem Link : https://school.programmers.co.kr/learn/courses/30/lessons/12934
86%
<문제>
정수 제곱근 판별

<문제 설명>
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

<제한 사항>
n은 1이상, 50000000000000 이하인 양의 정수입니다.

<입출력 예>
n	return
121	144
3	-1
입출력 예 설명
입출력 예#1
121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

입출력 예#2
3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.
*/

/*
전략 수립
1. 일단 약수를 구해본다.
2. 구한 약수를 모두 제곱해서 number가 된다면?
3. 그 약수에 1을 더해서 제곱하고 리턴.
4. 만약 약수이면서 제곱해서 number가 되는게 없으면 -1을 리턴.
*/

function solution(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i * i === number) {
      console.log(i);
      answer = (i + 1) * (i + 1);
      break;
    } else {
      answer = -1;
    }
  }
  console.log('answer is ' + answer);
  return answer;
}

//test
solution(3);

//Problem Solved 2022. 9. 27.(Tues)
