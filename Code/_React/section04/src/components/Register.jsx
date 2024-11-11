// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState, useRef } from "react";

function Register() {
  // const [name, setName] = useState("이름");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");

  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  const countRef = useRef(0);
  const inputRef = useRef();

  function onChange(e) {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit() {
    if (input.name === "") {
      // 이름을 입력하는 DOM요소 포커스
			inputRef.current.focus();
    }
  }

  // function onChangeName(e) {setName(e.target.value);}
  // function onChangeBirth(e) {setBirth(e.target.value);}
  // function onChangeContry(e) {setCountry(e.target.value);}
  // function onChangeBio(e) {setBio(e.target.value); }

  /*function onChangeName(e) {
    setInput({
			...input,
			name: e.target.value,
		})
  }
  function onChangeBirth(e) {
    setInput({
			...input,
			birth: e.target.value,
		})
  }
  function onChangeCountry(e) {
    setInput({
			...input,
			country: e.target.value,
		})
  }
  function onChangeBio(e) {
    setInput({
			...input,
			bio: e.target.value,
		})
  }*/

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          type="text"
          onChange={onChange}
          value={input.name}
          placeholder="이름"
        />
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
}

export default Register;
