// Promise
	// -> 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
	// -> 효능
		// 비동기 작업 실행 / 상태 관리 / 결과 저장 / 병렬 실행 / 다시 실행 / 기타 등등...

const promise = new Promise((resolve, reject) => {
	// 비동기 작업 실행하는 함수
	// executor

	// setTimeout(() => {
	// 	console.log("안녕");
	// 	resolve("안녕");
	// 	reject("왜 실패했는지 이유 ...")
	// }, 2000);

	setTimeout(() => {
		const num = 10;

		if (typeof num === "number") {
			resolve(num + 10)
		} else {
			reject("num이 숫자가 아닙니다.")
		}
	}, 2000);
})

// then 메서드
// -> 그 후에
promise
.then((value) => {
	console.log(value);
})
.catch((err) => {
	console.log(err)
})
