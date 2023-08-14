import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterSlice, increment, decrement, incrementBy } from "./store/slices/counter/counterSlice";

function App() {
  const { counter } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>

      <h1>Vite + React</h1>
      <div className="card text-center my-4">
        <div className="card-title">
          <h3>{counter}</h3>
        </div>
        <div className="card-body">
          <button className='btn btn-primary mr-2' onClick={() => dispatch(increment())}>
            Increment +1
          </button>
          <button className='btn btn-danger' onClick={() => dispatch(decrement())}>
            Decrement +1
          </button>
        </div>
        <div className="card-body">
          <button className='btn btn-primary' onClick={() => dispatch(incrementBy(2))}>
            Increment +2
          </button>

        </div>
      </div>
    </>
  )
}

export default App
