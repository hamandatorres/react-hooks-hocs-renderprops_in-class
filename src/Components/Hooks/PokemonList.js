import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PokemonList = (props) => {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
      setPokemon(res.data.results)
    })

    //For componentWillUnmount:
    return () => console.log('Component will unmount')
  }, [])

  return <div>{JSON.stringify(pokemon)}</div>
}

export default PokemonList

/*
* Example using dependency array
const PokemonList = (props) => {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextUrl, setNextUrl] = useState('')
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get(url).then((res) => {
      setPokemon(res.data.results)
      setNextUrl(res.data.next)
    })

    //For componentWillUnmount:
    return () => console.log('Component will unmount')
  }, [url])

  return (
    <div>
      {JSON.stringify(pokemon)}
      <button onClick={() => setUrl(nextUrl)}>NEXT</button>
    </div>
  )
}
*/
