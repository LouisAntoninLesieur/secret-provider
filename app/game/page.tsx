'use client'

import { useState } from "react"
import Navbar from "../components/Navbar"

const game = () => {

  const [number, setNumber] = useState(0)
  
  const increment = () => {
    setNumber(number + 1)
    if (number === 10) {
      setNumber(10)
    }
  }

  const decrement = () => {
    setNumber(number - 1)
    if (number === -10) {
      setNumber(-10)
    }
  }

  return (
    <>
      <Navbar />
      <h1>game</h1>
      {number >= 0 ?
        <div className="text-green-500">{number}</div>
        :
        <div className="text-red-500">{number}</div>
      }
      <div className="flex gap-2">
        <button className="bg-green-500" type="button" onClick={increment}>increment</button>
        <button className="bg-red-500" type="button" onClick={decrement}>decrement</button>
      </div>
    </>
  )
}

export default game