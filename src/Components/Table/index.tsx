import React, { FC, useState } from 'react';
import PropTypes from 'prop-types';
import { IPokemon } from '../PokemonList/interfaces'
import { PokemonCard } from '..';
type TableProps = { data: IPokemon[], isIndividual: boolean }; /* could also use interface */

const Table = ({ data, isIndividual }: TableProps) => {
    const [selected, select] = useState("");
    ////console.log(select)

    const many = () => {
        return (
            data.map((element) => {
                return <div
                    className="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3"
                >
                    <li key={`${element.url}`}>
                        <PokemonCard isIndividual={isIndividual} selected={`${element.name}`} data={element} key={`${element.url}`} />
                    </li>
                </div>

            })

        )
    }

    const single = () => {
        return (<div><PokemonCard isIndividual={isIndividual} /> </div >
        )
    }

    return (
        <section className="flex flex-row flex-wrap mx-auto">

            {isIndividual ? single() : many()}
        </section>
    )
}

export default Table;

Table.propTypes = {
    data: PropTypes.array.isRequired
}

Table.defaultProps = {
    data: [{
        name: "",
        url: ""
    }]
}