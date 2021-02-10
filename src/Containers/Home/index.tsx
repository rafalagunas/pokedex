import React, { Component } from 'react'
import PokemonsList from '../../Components/PokemonList'
import { Header } from '../../Components'


function Home() {

  return (
    <>
      <Header />
      <PokemonsList isIndividual={false} />
    </>
  )

}

export default Home;