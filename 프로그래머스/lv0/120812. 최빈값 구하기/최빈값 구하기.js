function solution(array) {
    let count = new Map();
    let countArray = new Array;
    let max = 0;
    for(let i of array) {
        if(!count.has(i)) count.set(i, 0);
        if(count.has(i)) count.set(i, count.get(i)+1);
        while(count.get(i) > max) max++;
    }

    for (let [key, value] of count) {
        if(value === max) countArray.push(key)
    }
    
    return countArray.length === 1 ? countArray[0] : -1;
}

//빈도수를 계산하기 위해 Map 객체를 생성한다. 
//Map 객체는 키와 값을 연결하는 자료구조다. 
//이 함수에서는 각 숫자의 등장 횟수를 저장할 것이다.

//for...of 루프를 사용하여 배열의 모든 요소를 반복하면서, Map 객체에 해당 요소의 등장 횟수를 저장한다. 
//만약 해당 숫자가 Map 객체에 없다면, 새로운 키와 함께 0으로 값을 초기화한다. 
//이미 존재하는 경우, 해당 숫자의 등장 횟수를 1 증가시킨다.

//등장 횟수를 계산하면서, 가장 큰 등장 횟수를 나타내는 max 변수를 업데이트한다.

//다시 for...of 루프를 사용하여, Map 객체에서 각 키와 값을 가져와서 가장 많이 등장한 숫자를 찾는다. 
//countArray 배열에 해당하는 숫자를 추가한다.

//마지막으로, countArray의 길이를 확인하여 반환할 값을 결정한다. 
//만약 countArray의 길이가 1이라면, 해당하는 숫자를 반환하고, 그렇지 않은 경우 -1을 반환한다.




//new Map() : 일반 생성자 함수와 같이 변수처럼 사용 가능하다.
//map.set(key, value) : 객체와 비슷하게 키와 값을 한 번에 선언할 수 있다. 체이닝도 가능.
//map.get(key) : 객체와 비슷하게 인자에 키를 넣어 값이나 undefined를 반환한다.
//map.has(key) : 데이터 존재 유무를 Boolean 값으로 반환한다.
//map.delete(key) : 키로 값을 제거한다.
//map.clear() : 모든 데이터를 삭제할 수 있다.
//map.size : 데이터 갯수를 반환한다.
//map.keys() : iterable 키에 대해 반복 가능한 값을 반환한다.
//map.values() : iterable 값에 대해 반복 가능한 값을 반환한다.
//map.entries() : iterable 객체로 반환되며 각 값은 [key, value] 형태이다.
//map.next() : entries 메소드로 반환된 이터러블 객체 뒤에 활용돼 순차적으로 value, done 프로퍼트 제공.



