import {useState} from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)
  const onIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }
  const onDecrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className="container">
      <h1 className="heading">Counter</h1>
      <p className="count">{count}</p>
      <div>
        <button className="button" onClick={onIncrement}>
          Increase
        </button>
        <button className="button" onClick={onDecrement}>
          Decrease
        </button>
      </div>
    </div>
  )
}

export default App
