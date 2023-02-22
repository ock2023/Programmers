function solution(array) {
    let arr = array.sort((a,b) => {
       return a-b;
    });
    if(arr.length === 1) {
       return arr[0];
       }
    if(arr.length > 0 && arr.length < 100){
        return arr[((1 + arr.length)/2)-1];
    }
    }
    
    
        
    
//순서대로 정렬 sort()
//예를 들어 [1,3,5,7,8] >> 1+5=6/2=3
//         [1,2,3,5,7,8,9]>> 1+7=8/2=4 
//(첫 번째 배열의 길이 + 마지막 배열의 길이)/2 = 중앙값;
    