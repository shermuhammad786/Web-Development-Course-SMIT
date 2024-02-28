import logo from "./Assests/UsePopcorn_logo.PNG"
export default function Header({ setMovies, searchedItems }) {
    // setMovies("interstellar")
    const searching = (event) => {
        setMovies(event.target.value)
    }

    return (
        <header className="flex justify-between items-center w-11/12  m-3 bg-[#5A37D1] rounded">
            <img src={logo} alt={logo} />
            <div className="flex space-x-4">
                <input onChange={searching} className="p-3 w-72 h-7 bg-[#6E45F1] rounded outline-none border-0 text-white" placeholder="Search movies..." />
            </div>
            <p className="text-white mx-3">Found {searchedItems} top results</p>
        </header>
    )
}
