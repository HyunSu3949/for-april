import React, { useState } from "react";

export default function CatchPI() {
  const [state, setState] = useState("");
  const [result, setResult] = useState("");

  const onChange = (e) => {
    setState(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const arr = state
      .split("\n")
      .filter((_, index) => index % 2 === 1)
      .map((v) => {
        return v.split("\t")[0];
      });

    const result = [...new Set(arr)].join(", ");
    setResult(result);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="PI">PI 골라내기</label>
        <textarea
          name="PI"
          id="PI"
          cols="100"
          rows="10"
          onChange={onChange}
        ></textarea>
        <button>변환하기</button>
      </form>
      <span>결과: </span>
      <p>{result}</p>
    </>
  );
}
