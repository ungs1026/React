import { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {
	const [debounceValue, setdebounceValue] = useState(value)

	useEffect(() => {
		const handler = setTimeout(() => {
			setdebounceValue(value)
		}, delay)
		return () => {
			clearTimeout(handler)
		}
	}, [value, delay])
	
	return debounceValue
}