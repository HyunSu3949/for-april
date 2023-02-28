import React, { useState } from "react";

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
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="쉼표">쉼표 변환기</label>{" "}
        <input id="쉼표" type="text" value={state} onChange={onChange} />
        <button>변환</button>
        결과 <p>{result}</p>
      </form>
    </div>
  );
}
