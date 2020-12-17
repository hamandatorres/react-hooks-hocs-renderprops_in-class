import React, { useState } from 'react'

const Counter = (props) => {
  /*
  this.state = {
    counter: 0
  }
  
  handleIncrement(){
    this.setState({
      counter: this.state.counter + 1
    })
  }
  */
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>CLICK ME!</button>
    </div>
  )
}

export default Counter
