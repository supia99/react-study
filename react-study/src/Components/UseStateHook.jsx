import { useState } from "react"

function UseStateHook() {
  const [name, setName] = useState('111')

  return (
    <>
      <h1>useState</ h1>
      <label>Name</label>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      {/* e はevent */}
      <br />
      <label>Output</label>
      <div>{name}</div>
    </>
  )
}

export default UseStateHook;