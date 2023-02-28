import React, { useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/src";

export default function CatchPI() {
  const [state, setState] = useState("");
  const [result, setResult] = useState([]);
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

    const result = [...new Set(arr)];
    setResult([...result]);
    setState("");
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
          value={state}
        ></textarea>
        <button>변환하기</button>
      </form>
      <span>결과: </span>
      <div>{result.join(", ")}</div>
      <div>
        {result.map((i) => {
          const link = `https://catalog-tools.coupang.net/quality/products/${i}
            /items/detail`;
          return (
            <div>
              <a href={link}>{i}</a>
            </div>
          );
        })}
      </div>
      <CopyToClipboard text={result}>
        <button>복사</button>
      </CopyToClipboard>
    </>
  );
}
