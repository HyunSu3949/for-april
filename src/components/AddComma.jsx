import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/src";

export default function AddComma() {
  const [state, setState] = useState("");
  const [result, setResult] = useState("");
  const onChange = (e) => {
    setState(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const result = state.split(" ").join(", ");
    setResult(result);
    setState("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="쉼표">쉼표 변환기</label>{" "}
        <input id="쉼표" type="text" value={state} onChange={onChange} />
        <button>변환</button>
      </form>
      <p>{result}</p>
      <CopyToClipboard text={result}>
        <button>복사</button>
      </CopyToClipboard>
    </div>
  );
}
