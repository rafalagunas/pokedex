import React, { FC, useState } from 'react';
import { Link, useHistory, useParams, RouteComponentProps, withRouter } from 'react-router-dom'
import logo from '../../Assets/pokelogo.png'

type HeaderProps = RouteComponentProps;

const Header: FC<HeaderProps> = ({ history }) => {
    const [input, changeInput] = useState("")

    const handleChange = (e: any) => {
        changeInput(e.target.value)
    }

    const navigate = () => {
        history.push(`/individual/${input.toLowerCase()}`);
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
            <div className="flex items-center flex-no-shrink text-white mr-6">
                <Link to="/">
                    <img alt="" style={{ width: 250 }} src={logo}></img>
                </Link>
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">

                    <div className="searchContainer">
                        <input type="search" className="bg-purple-white shadow rounded border-0 p-3" placeholder="Busca un Pokémon..." value={input} onChange={(e) => { handleChange(e) }}>
                        </input>
                        <button
                            onClick={navigate}
                            className="searchButton inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none "
                        >
                            Encuéntralo!
                        </button>

                    </div>
                </div>

            </div>
        </nav >)
}

export default withRouter(Header);