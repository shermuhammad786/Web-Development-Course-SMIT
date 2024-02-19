import React from 'react'

import logo from "./Assests/UsePopcorn_logo.PNG"
export default function Header({ setMovies }) {
    // setMovies("interstellar")
    const searching = (event) => {
        console.log(event.target.value)
        setMovies(event.target.value)
    }

    return (
        <header className="flex justify-between items-center w-11/12  m-3 bg-[#5A37D1] rounded">
            <img src={logo} alt="" />
            <div className="flex space-x-4">
                <input onChange={searching} className="p-3 w-72 h-7 bg-[#6E45F1] rounded outline-none border-0 text-white" placeholder="Search movies..." />
            </div>
            <p className="text-white mx-3">Found 0 top results</p>
        </header>
    )
}
