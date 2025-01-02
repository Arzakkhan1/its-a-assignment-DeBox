import { useState } from 'react'
import Form from './assets/component/Form'
import './App.css'
import Data1 from './assets/component/Data1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Form />
    <Data1 />
    </>
  )
}

export default App
