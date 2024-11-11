// 1. 배열 구조 분해 할당
	// 배열에서 값을 분리해서 변수에 할당하는 것 => 배열 길이 초과될 경우 undefiend

let arr  = [1, 2, 3];
let one1 = arr[0];

// ======================
let [one, two] = arr; 
console.log(one, two);

// 2. 객체의 구조 분해 할당
let person = {
	name : "이정환",
	age : 27,
	hobby : "테니스",
};

let {
	age : myAge,
	hobby,
	name,
	extra = "hello",
} = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법

const func = ({name, age, hobby, extra}) => {
	console.log(name, age, hobby, extra);
} 
func(person)