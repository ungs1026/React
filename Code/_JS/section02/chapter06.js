// 원시타입 vs 객체타입
	// 값이 저장되거나 복사되는 과정이 서로 다르기 때문
		// => 원시타입 : 값 자체로써 변수에 저장되고 복사 
			// (불변값) => 변수 내 값을 변경된다 하더라도 변경 전 데이터가 메모리상에서 지워지지 않는다
		// => 객체타입 : 참조값을  통해 변수에 저장되고 복사
			// 데이터의 량 혹은 값이 정해져 있지 않기 때문에 값을 다른곳에 저장 후 그 메모리 주소를 참조

// 1. 배열 순회
let arr = [1, 2, 3];


for (let i = 0; i < arr.length; i++) {
	// console.log(arr[i]);
}

let arr2 = [4, 5, 6,7,8];
for(let i = 0; i < arr2.length; i++) {
	// console.log(arr2[i])
}

// 1.2 for of 반복문
for (let item of arr) {
	console.log(item);
}

// 2. 객체 순회
let person = {
	name: "이저이환",
	age : 27,
	hobby: "테니스"
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 변환

let keys = Object.keys(person);

for (let key of keys) {
	const value = person[key];
	console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 변환
let values = Object.values(person);

for (let value of values){
	console.log(value);
}

// 2.3 for in
for (let key in person) {
	const value = person[key];
	console.log(key, value)
}
