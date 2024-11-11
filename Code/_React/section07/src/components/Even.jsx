import { useEffect } from "react"

function Even () {
	useEffect(() => {
		// 클린업 , 정리함수
		return () => {
			console.log("unmount")
		}
	}, [])

	return <div>짝수입니다.</div>
}

export default Even