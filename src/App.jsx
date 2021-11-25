import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import RouterIndex from './Routers/RouterIndex'
import 'antd/dist/antd.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <RouterIndex/>
    </div>
  )
}

export default App
