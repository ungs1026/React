// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다
// 3. 나만의 훅을 직접 만들 수 있다.

import useInput from "../hooks/useInput";
// const state = useState() => Error

function HookExam() {
	const [input, onChange] = useInput();
	const [input1, onChange1] = useInput();

	return (
		<>
			<div>
				<input type="text" value={input} onChange={onChange}/>
				<input type="text" value={input1} onChange={onChange1}/>
				HookExam
			</div>
		</>
	)
}

export default HookExam