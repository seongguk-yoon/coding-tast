/* esLint-disalble */

import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState(["밥집", "면집", "음료"]);
  const [count, setCount] = useState(0); // 이모티콘 클릭시 숫자 + 1
  const [modal, setModal] = useState(false);

  function title정렬() {
    const 가나다정렬 = [...title];
    setTitle(가나다정렬.sort());
  }

  return (
    <>
      <div className="APP">
        <div className="black-nav">
          <div>React tast</div>
        </div>
        <div>
          <button onClick={title정렬}>정렬</button>
        </div>
      </div>
      <div>
        {title.map(function (글) {
          return (
            <div className="lists">
              <h2>
                {" "}
                {글}
                <span
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  👍 {count}
                </span>{" "}
              </h2>
              <p>2월 18일</p>
              <hr />
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        모달버튼
      </button>

      {modal === true ? <Modal /> : null}
    </>
  );
}

function Modal() {
  return (
    <div className="modal">
      <b>제목</b>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
