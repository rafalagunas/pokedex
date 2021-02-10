import React, { useState, useEffect } from 'react';
import { IPokemon, PokeResponse } from './interfaces'
import { getData } from '../../Services';
import Table from '../Table';

type PokemonsListProps = { isIndividual: boolean };


const PokemonsList = ({ isIndividual }: PokemonsListProps) => {
    const [pokemons, setPokemons] = useState<IPokemon[]>([]);

    useEffect(() => {
        getData<{ data: PokeResponse, results: IPokemon[] }>('https://pokeapi.co/api/v2/pokemon?limit=110')
            .then((data) => {
                return data;
            }).then(({ results }) => {
                ////console.log(results);
                setPokemons([...pokemons, ...results])
            })
            .catch(error => {
                throw (error)
            });
    }, [])


    return (
        <div className="pokemons-list" >

            <Table isIndividual={isIndividual} data={pokemons} />

        </div >)

}

export default PokemonsList;

