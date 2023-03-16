import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import "./AddComma.css";
export default function AddComma() {
  const [state, setState] = useState("");
  const [result, setResult] = useState("");

  const onChange = (e) => {
    setState(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.innerText === "쉼표 추가") {
      const result = state.split(" ").join(", ");
      setResult(result);
      setState("");
    } else if (e.nativeEvent.submitter.innerText === "중복제거 쉼표 추가") {
      const result = [...new Set(state.split(" "))].join(", ");
      setResult(result);
      setState("");
    }
  };

  return (
    <div class="container">
      <form onSubmit={onSubmit}>
        <label htmlFor="쉼표">쉼표 변환기</label>{" "}
        <input id="쉼표" type="text" value={state} onChange={onChange} />
        <button>쉼표 추가</button>
        <button>중복제거 쉼표 추가</button>
      </form>
      <p>변환값: {result}</p>
      <CopyToClipboard text={result}>
        <button>변환값 복사</button>
      </CopyToClipboard>
    </div>
  );
}
