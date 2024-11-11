import { useState } from "react";

function useInput() {
	const [input, setInput] = useState("");

	function onChange(e) {
		setInput(e.target.value);
	}

	return [input, onChange];
}

export default useInput