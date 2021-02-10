import React, { Component } from 'react'
import PokemonsList from '../../Components/PokemonList'
import { Header } from '../../Components'


function Details() {

  return (
    <>
      <Header />
      <PokemonsList isIndividual={true} />
    </>
  )

}

export default Details;