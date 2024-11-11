function Button({text, color, children}) {

	// dlqpsxm rorcp
	function onClickButton(e) {
		console.log(e)
		console.log(text);
	}

	return (
		<button 
		onClick={onClickButton}
		// onMouseEnter={onClickButton}
		style={{color : color}}>
			{text} - {color.toUpperCase()}
			{children}
		</button>
	)
}

export default Button