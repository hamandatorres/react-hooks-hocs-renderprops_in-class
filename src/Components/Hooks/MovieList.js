import React, { useState } from 'react'
import withStyles from '../HOCS/withStyles'

// Basic logic of useState
// const useState = (initialValue) => {
//   let currentValue = initialValue

//   function setState(newValue) {
//     currentValue = newValue
//   }

//   return [currentValue, setState]
// }

const MovieList = (props) => {
  const [movies, setMovies] = useState(['Die Hard', 'Goodfellas', 'Dogtooth'])
  const [userInput, setUserInput] = useState('')

  function addToList() {
    const newList = [...movies, userInput]
    setMovies(newList)
    setUserInput('')
  }

  return (
    <div style={props.style}>
      {movies.map((movie) => (
        <h2>{movie}</h2>
      ))}
      <input
        placeholder="Add a movie"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={addToList}>Add To List</button>
    </div>
  )
}

export default withStyles(MovieList)
