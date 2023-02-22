function solution(n) {
    var answer = [];
    for(let i = 1; i <= n; i++){
      if(i % 2 !== 0) answer.push(i);
    }
    return answer;
}
  

//n 이하의 홀수가 담긴 배열
//만약 7을 받으면 1,2,3,4,5,6,7까지의 숫자를 받아야 한다.
//숫자들을 배열로 넣어주고 홀수만 필터하기
