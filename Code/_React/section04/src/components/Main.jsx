import "./Main.css"
// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.

// 메인 화면이 ReRendering 되는 상황
  // 1. Props가 변경
  // 2. State 변경
  // 3. 부모가 변경

// useRef(DOM요소에 접근 가능) | useState
// Reference 객체를 생성 | State를 생성
// 컴포넌트 내부의 변수로 활용 가능 | 컴포넌트 내부의 변수로 활용 가능
// 어떤 경우에도 리렌더링을 유발하지 않음 | 값이 변겨오디면 컴포넌트 리렌더링

// react hooks => 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록
  // -> 접두사 use 사용
  // 대략 20개정도
  // 1. 함수 컴포넌트 내부에서만 호출가능
  // 2. 조건문, 반복문 내부에서는 호출 불가
  // 3. 나만의 Hook도 제작 가능

function Main() {
  /*const num = 10
  return (
    <>
      <hr />
      <h1>main</h1>
      <h2>{num % 2 == 0 ? "짝수" : "홀수"}</h2>
      <hr />
    </>
  )*/

  const user = {
    name: "이정환",
    isLogin: true,
  };
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>
  } else {
    return <div>로그인</div>
  }
}

export default Main;
