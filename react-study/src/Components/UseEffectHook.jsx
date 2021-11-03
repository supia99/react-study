import { useEffect, useState } from "react";

function UseEffectHook() {
  const [name, setName] = useState("");
  let count = 0;

  useEffect(() => {
    count = count + 1;
    console.log("count:", count)
  });

  return (
    <>
      <h1>useEffect</h1>
      <label>name</label>
      <input onChange={(e)=>{setName(e.target.value)}} />
      <br />
      <label>Output</label>
      <div>{name}</div>
      <label>変更回数</label>
      <div>{count}</div>

    </>
  );
}

export default UseEffectHook;
