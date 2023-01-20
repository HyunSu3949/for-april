import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState("");
  const [result, setResult] = useState("");
  const onChange = (e) => {
    setState(e.target.value);
  };
  const onClick = (value) => {
    const result = value.split(" ").join(", ");
    setResult(result);
  };
  return (
    <div>
      <label htmlFor="쉼표">쉼표 변환기</label>{" "}
      <input id="쉼표" type="text" value={state} onChange={onChange} />
      <button onClick={() => onClick(state)}>변환</button>
      결과 <p>{result}</p>
    </div>
  );
}

export default App;
