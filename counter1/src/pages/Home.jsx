import React from 'react'
import './home.css'
import { useState } from 'react'

function Home() {
  const [count,setcount] = useState(0);
  //function to increment our counter
  const increasecount = ()=>{
    setcount(count + 2)
  }
  //function to decrement our counter
  const decreasecount = ()=>{
    setcount(count - 2)
  }
  //function to reset our counter
  const resetcount = ()=>{
    setcount(0)
  }
  return (
    <div className='counter-challange-body'>
    <h4>The conter challange on useState hook </h4>
    <div className='btn'>
    <button className='btns button1'onClick={increasecount}>increase</button>
    <button className='btns button2'onClick={decreasecount}>decrease</button>
    <button className='btns button3'onClick={resetcount}>Reset</button>
    <button className='btns button4'>{count}</button>
    </div>
    </div>
  )
}

export default Home
