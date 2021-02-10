import React, { CSSProperties, useEffect, useState, FC, Props } from "react";
import PropTypes from "prop-types";
import { IPokemon, ICompletePokemon, } from '../PokemonList/interfaces'
import { Link, RouteComponentProps, useParams, RouteProps, withRouter } from 'react-router-dom';
import './index.css'

import logo from '../../Assets/pokelogo.png';
type RouteParams = {
  pokemon: string;
};

type PokemonCardProps = { data: IPokemon, isIndividual: boolean, selected: string };

async function getData<Response>(url: string) {
  const response = await fetch(url);
  const data = await response;
  return data;
}
const PokemonCard = ({ data, isIndividual, selected }: PokemonCardProps) => {

  const [pokemon, setPokemon] = useState<ICompletePokemon>();
  const [pokemonType, setType] = useState(false);


  //console.log(pokemon)

  useEffect(() => {
    getData<{ data: ICompletePokemon }>(`https://pokeapi.co/api/v2/pokemon/${selected}`)
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        let object = {
          name: response.name,
          height: response.height,
          id: response.id,
          weight: response.weight,
          types: [response.types],
          sprites: {
            front_default: response.sprites.front_default,
            front_shiny: response.sprites.front_shiny
          }
        }
        //console.log(object);
        setPokemon(object);
      })
      .catch(error => {
        throw (error)
      });
  }, [])

  const PokeStyle: CSSProperties = {
    backgroundColor: "#ff5a5a",
    color: "#000"
  }
  const PokePics: CSSProperties = {
    backgroundImage: `url(${pokemon?.sprites.front_default})`,
    color: "#000"
  }

  const manyPokemons = () => {
    return (
      <Link to={`/individual/${data.name}`} >
        <div style={PokeStyle} className="cardContainer flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl">
          <div className=" flex items-center justify-between px-4 py-2 overflow-hidden">
            <div className="flex flex-row items-center">

            </div>
          </div>
          <hr />
          <div className="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
            <span>
              <h2 className="text-2xl font-bold tracking-normal text-gray-800">
                {data.name}
              </h2>
            </span>
          </div>
          <hr />
          <img src={logo} />
          <hr />

        </div>
      </Link >)
  }
  const individualPokemon = () => {

    return (
      <div className={"individualCard"}>
        <div className="mx-auto px-4 py-8 max-w-xl my-20">
          <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide" >
            <div className="md:flex-shrink-0">
              {pokemonType ? <img src={`${pokemon?.sprites.front_default}`} alt="mountains" className="cardImage w-100 h-64 object-center rounded-lg rounded-b-none" />
                : <img src={`${pokemon?.sprites.front_shiny}`} alt="mountains" className="cardImage w-100 h-64 object-center rounded-lg rounded-b-none" />
              }
            </div>
            <div className="px-4 py-2 mt-2">
              <h2 className="font-bold text-2xl text-gray-800 tracking-normal">{pokemon?.name}</h2>
              <h3 className="font-bold  text-gray-800 tracking-normal">{`Height: ${pokemon?.height}`}</h3>
              <h3 className="font-bold  text-gray-800 tracking-normal">{`Weight: ${pokemon?.weight}`}</h3>

              < p className="text-sm text-gray-700 px-2 mr-1">
              </p>
              <div className="flex items-center justify-between mt-2 mx-6">
                <button onClick={() => {
                  setType(!pokemonType)
                }} className="text-blue-500 text-xs -ml-3 ">Shiny / Normal</button>
                <span className="flex text-gray-700">

                  <b>  {`#${pokemon?.id}`}</b>
                </span>
              </div>
              <div className="author flex items-center -ml-3 my-3">


              </div>
            </div>
          </div>
        </div>

      </div >)
  }

  return (
    <div>
      {isIndividual && pokemon ? individualPokemon() : manyPokemons()}
    </div >
  );
};

export default (PokemonCard);

PokemonCard.propTypes = {
  data: PropTypes.array,


}

PokemonCard.defaultProps = {
  data: [{
    name: "",
    url: ""
  }],
  selected: ""

}