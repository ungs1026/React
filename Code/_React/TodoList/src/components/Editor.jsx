import "./Common.css";
import { useState, useRef } from "react";

function Editor({ onCreate }) {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  function onChangeContent(e) {
    setContent(e.target.value);
  }

	function onKeydown(e) {
		if (e.keyCode === 13) {
			onSubmit();
		}
	}

  function onSubmit() {
    if (content === "") {
      alert("내용을 입력해주세요.");
			contentRef.current.focus()
      return;
    }
    onCreate(content);
		setContent("");
  }

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
				onKeyDown={onKeydown}
        onChange={onChangeContent}
        placeholder="새로운 Todo ..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}

export default Editor;
