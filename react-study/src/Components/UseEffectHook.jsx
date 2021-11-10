import { useEffect, useState } from "react";

let allCount = 0;
let nameCount = 0;
let noCount = 0;

function UseEffectHook() {
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");

  // 描画が終わった後にuseStateが実行される
  // 何も参照していないuseEffect
  useEffect(() => {
    noCount = noCount + 1;
    console.log("noCount:", noCount)
  }, [])

  // nameを参照するuseEffect
  useEffect(() => {
    nameCount = nameCount + 1;
    console.log("nameCount:", nameCount)
  }, [name])

  // 全てを参照するuseEffect
  useEffect(() => {
    allCount = allCount + 1;
    console.log("allCount:", allCount)
  }, );

  return (
    <>
      <h1>useEffect</h1>
      <label>name</label>
      <input onChange={(e)=>{setName(e.target.value)}} />
      <br/>
      <label>name2</label>
      <input onChange={(e) => {setName2(e.target.value)}} />
      <br/>
      <label>Output</label>
      <div>name :{name}</div>
      <div>name2:{name2}</div>
      <label>変更回数</label>
      <div>noCount:{noCount}</div>
      <div>allCount:{allCount}</div>
      <div>nameCount:{nameCount}</div>
    </>
  );
}

export default UseEffectHook;
