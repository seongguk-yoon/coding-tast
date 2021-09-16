/* esLint-disalble */

import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState(["밥추천", "음료추천", "고기추천"]);

  {
    /*function titleChange1() {
    const change1 = [...title];
    change1[0] = "덮밥추천";
    setTitle(change1);
  }
  function title정렬() {
    const 가나다정렬 = [...title];
  setTitle(가나다정렬.sort());    */
  }

  //하나의 Oncilck에 두개의 이벤트도 넣을수가있다.
  const 글자이벤트 = [...title];
  const eventhandler = () => {
    const 글전환 = 글자이벤트;
    글전환[0] = "덮밥추천";
    setTitle(글전환);

    const 정렬 = 글자이벤트;
    setTitle(정렬.sort());
  };

  const [desc, setDesc] = useState(["2월발견", "3월발견", "4월발견"]);
  const [count, setCount] = useState(0); // 이모티콘 클릭시 숫자 + 1

  return (
    <div className="APP">
      <div className="black-nav">
        <div>React tast</div>
      </div>

      <div>
        <button onClick={eventhandler}>게시글 전환</button>
      </div>

      <div className="lists">
        <h2>
          {title[0]}
          <span
            onClick={() => {
              setCount(count + 1);
            }}
          >
            😑 {count}
          </span>
        </h2>
        <p>{desc[0]}</p>
        <hr />
      </div>

      <div className="lists">
        <h2>{title[1]}</h2>
        <p>{desc[1]}</p>
        <hr />
      </div>

      <div className="lists">
        <h2>{title[2]}</h2>
        <p>{desc[2]}</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
