import React, { useState, useEffect } from 'react'
import axios from 'axios';


const PokemonList = () => {
  const [pokemon, setPokemon] = useState([])


  useEffect(() => {
    axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
          setPokemon(res.data.results)
        })
        return () => { // act as componentWillUnMount 
          console.log('Goodbye')
        }
  }, [])

  return <div>{JSON.stringify(pokemon)}</div>
}

export default PokemonList;