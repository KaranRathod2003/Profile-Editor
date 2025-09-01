import { useState } from "react"
import ProfileEditor from './ProfileEditor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfileEditor />
    </>
  )
}

export default App
