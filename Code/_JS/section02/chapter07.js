// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

console.log(arr1);
console.log(newLength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// 위 두 개보다 실행속도가 느림
// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

// 5. slice
// 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환 => 원본배열 변화 x
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
