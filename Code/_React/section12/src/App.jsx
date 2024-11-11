import "./App.css";
import { useReducer, useRef, createContext } from "react";
import { Routes, Route } from "react-router-dom";

import New from "./pages/New";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

const mockData = [
  {
    id: 1,
    createDate: new Date("2024-10-19").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createDate: new Date("2024-10-10").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createDate: new Date("2024-12-19").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
  {
    id: 4,
    createDate: new Date("2024-11-19").getTime(),
    emotionId: 4,
    content: "4번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(5);

  // 새로운 일기 추가
  function onCreate(createDate, emotionId, content) {
    // 새로운 일기를 추가하는 기능
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createDate,
        emotionId,
        content,
      },
    });
  }

  // 기존 일기 수정
  function onUpdate(id, createDate, emotionId, content) {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createDate,
        emotionId,
        content,
      },
    });
  }

  // 기존 일기 삭제
  function onDelete(id) {
    dispatch({
      type: "DELETE",
      id,
    });
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;

{
  /* 
  // 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
  <Header 
        title={"Header"}
        leftChild={<Button text={"Left"}/>}
        rightChild={<Button text={"Right"}/>}
      />

      <Button
        text={123}
        onClick={() => {
          console.log("123 Click");
        }}
      />

      <Button
        text={123}
        type={"POSITIVE"}
        onClick={() => {
          console.log("123 Click");
        }}
      />

      <Button
        text={123}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("123 Click");
        }}
      /> */
}
