// 단락평가 => 조건식에 여러 조건이 있을 때,
		// => 앞 조건으로 뒷 조건 확인이 필요없을경우 앞 조건으로 결과도출

// function returnFalse() {
// 	console.log("False 함수");
// 	return undefined;
// }

// function returnTrue() {
// 	console.log("True 함수");
// 	return 10;
// }

// console.log(returnTrue() || returnFalse())

function printName(person) {
	const name = person && person.name;
	console.log(person || "person의 값이 없음");
}

printName();
printName({name : "Lee Jung Hyan"})